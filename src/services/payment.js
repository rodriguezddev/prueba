import PlanService from "./plan";
import CustomerService from "./customer";
import to from "await-to-js";
import Payment from "./payment";
import AppService from "./app";
import Config from "./config";
import axios from "./axios";

const _ = require("lodash");
const Lockr = require("lockr");

export default {
  MARKETPLACE: "MARKETPLACE",
  PARTNERSHIPS: "PARTNERSHIPS",
  CHECKOUT_EXPRESS: "CHECKOUT_EXPRESS",
  FREEMIUM: "FREEMIUM",

  setCoupon(coupon, discount) {
    Lockr.set("coupon", coupon);
    Lockr.set("coupon_discount", discount);
  },

  setCardData(brand, cardType) {
    Lockr.set("cardData", {
      brand,
      cardType: cardType === 1 ? "Tarjeta Débito" : "Tarjeta Crédito"
    });
  },

  getPaymentIntent() {
    return Lockr.get("paymentIntent") ? Lockr.get("paymentIntent") : 0;
  },

  async pay(data) {
    const paymentIntent = Payment.getPaymentIntent();
    Lockr.set("paymentIntent", paymentIntent + 1);

    let orderData = Lockr.get("orderData");
    if (!orderData) {

      const [errorOrder, orderDataResponse] = await Payment.createOrder(data);
      if (errorOrder) {
        return [errorOrder];
      }

      orderData = orderDataResponse.data;
      const total = Lockr.get("subtotalplan")
      const customer = Lockr.get("customer")
      orderData.total = total
      orderData.email = customer.email
      Lockr.set("orderData", orderData);

    }
    return [
      null,
      {
        orderData,
      }
    ];
  },

  async payOnCheckoutExpress(chargeData) {
    const orderId = Lockr.get("orderId");

    return Payment.chargeOnCheckoutExpress(orderId, chargeData);
  },

  removeDataAfterSuceessPayment() {
    Lockr.rm("coupon");
    Lockr.rm("cellphone");
    Lockr.rm("plans");
    Lockr.rm("price");
    Lockr.rm("name");
    Lockr.rm("packages");
    Lockr.rm("ourPlans");
    Lockr.rm("orderData");
    Lockr.rm("lastPackageRemoved");
    Lockr.set("successPayment", true);
  },

  async generateLink() {
    let orderData = Lockr.get("orderData");
    if (!orderData) {
      const [errorOrder, orderDataResponse] = await Payment.createOrder();
      if (errorOrder) {
        return [errorOrder];
      }
      orderData = orderDataResponse.data;
      Lockr.set("orderId", orderData);
    }

    const [errorPayment, linkData] = await Payment.getLinkFromOrder(
      orderData.order.id
    );
    if (errorPayment) {
      return [errorPayment];
    }

    return [null, linkData];
  },

  async getLinkFromOrder(orderId) {
    return to(
      axios.post(`${Config.API_URL}/api/v2/orders/${orderId}/checkout-link`, {
        order_id: orderId
      })
    );
  },

  async charge(order, data) {
    data.fulfilled_in = Payment.MARKETPLACE;
    if (data.installments === 0) {
      delete data.installments;
    }
    const [error, response] = await to(
      axios.post(`${Config.API_URL}/api/checkout/${order}`, data)
    );

    if (error) return [error];
    Lockr.set("jwt-token", response.data.token);
    Lockr.set("auth-user", response.data.user);
    Lockr.set("user-card", response.data.userCard);

    return [null, response];
  },

  async chargeOnCheckoutExpress(order, data) {
    data.fulfilled_in = Payment.CHECKOUT_EXPRESS;
    if (data.installments === 0) {
      delete data.installments;
    }

    return axios.post(`${Config.API_URL}/api/checkout/${order}`, data);
  },

  async createOrder(item) {
    const sku = Lockr.get("sku")
    const customer = Lockr.get("customer")
    const data = {
      customer:customer,
      paymentParams: item,
      products: [sku]
    };
    return await to(
      axios.post(`${Config.API_URL}/store/orders`, data)
    );
  },

  getItems(packages) {
    let productsIDs = [];
    const items = [];
    packages.map(pack => pack.plans.map(plan => productsIDs.push(plan.id)));

    const justProducts = [];
    const allPlans = packages.map(pack => pack.plans.map(plan => plan));
    allPlans.map(plan => plan.map(el => justProducts.push(el)));

    productsIDs = _.countBy(productsIDs);
    for (let productId in productsIDs) {
      items.push({
        product: {
          id: productId,
          sku: justProducts[0].sku
        },
        beneficiaries: Payment.getBeneficiariesFromProduct(packages, productId),
        quantity: productsIDs[productId]
      });
    }
    return items;
  },

  getBeneficiariesFromProduct(packages, productId) {
    const myPackages = [...packages];
    const totalBeneficiaries = [];
    const packagesIncludingProductId = myPackages.filter(
      pack => !!pack.plans.find(plan => Number(plan.id) === Number(productId))
    );
    packagesIncludingProductId.map(pack =>
      totalBeneficiaries.push(...pack.beneficiaries)
    );
    return totalBeneficiaries.map(beneficiary => {
      return {
        name: beneficiary.name,
        lastname: beneficiary.paternalLastname,
        second_lastname: beneficiary.maternalLastname,
        email: beneficiary.email,
        cellphone: beneficiary.mobile,
        birthdate: new Date(
          beneficiary.birthdate_year,
          beneficiary.birthdate_month,
          beneficiary.birthdate_day
        ),
        type: "EMPLOYEE",
        gender: beneficiary.gender,
        addons: beneficiary.addons.filter(el => el.selected).map(el => el.sku)
      };
    });
  },
  async updateOrderCustomer(id, data) {
    return await to(
      axios.put(`${Config.API_URL}/api/v2/orders/${id}/customer`, data)
    );
  },
  async updateOrderCoupon(id, coupon) {
    return await to(
      axios.put(`${Config.API_URL}/api/v2/orders/${id}/coupon`, {
        coupon_code: coupon
      })
    );
  }
};
