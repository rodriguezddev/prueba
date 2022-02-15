import PlanService from "./plan";

const Lockr = require("lockr");

const PREDEFINED_PACKAGE = "PREDEFINIDO";
const CUSTOM_PACKAGE = "PERSONALIZADO";
const ECOMMERCE = "ECOMMERCE";
export default class TrackingService {
  constructor(self) {
    this.mixpanel = self.$mixpanel;
    this.cookies = self.$cookies;
  }

  visit(page) {
    this.track("visit", {
      page
    });
  }

  formatPackages(packages) {
    return packages.map(pack => ({
      name: pack.name,
      price: pack.price,
      package_type: pack.ourPlanType ? PREDEFINED_PACKAGE : CUSTOM_PACKAGE,
      promotion_discount: pack.originalPrice - pack.price,
      store: this.cookies.get("utm[utm_content]")
        ? this.cookies.get("utm[utm_content]")
        : ECOMMERCE,
      entry_point: window.location.href,
      products: pack.plans.map(plan => ({
        product_name: plan.name,
        product_price: plan.price,
        promotion_discount: plan.price - plan.sale_price,
        sku: plan.sku
      })),
      beneficiaries: pack.beneficiaries.map(beneficiary => ({
        gender: beneficiary.gender,
        birthdate: new Date(
          beneficiary.birthdate_year,
          beneficiary.birthdate_month,
          beneficiary.birthdate_day
        )
      }))
    }));
  }

  beneficiariesData(packages) {
    const payload = {
      entry_point: window.location.href,
      store: this.cookies.get("utm[utm_content]")
        ? this.cookies.get("utm[utm_content]")
        : ECOMMERCE,
      shopping_cart: this.formatPackages(packages)
    };

    this.track("beneficiaries_data", payload);
  }

  employerData(customer) {
    const payload = {
      first_name: customer.name,
      last_name: `${customer.maternalLastname} ${customer.paternalLastname}`,
      email: customer.email,
      phone: customer.cellphone,
      birthdate: new Date(
        customer.birthdate_year,
        customer.birthdate_year,
        customer.birthdate_day
      ),
      address: customer.address
    };

    this.mixpanel.people.set(payload);
    this.mixpanel.identify(this.getDistinctId());
  }

  // DONE
  login(cellphone) {
    this.track("logged_in", {
      login_phone: cellphone
    });
  }

  getProductPayloadBasedOnProductType(product, product_type) {
    if (product_type === "Nuestros Planes") {
      return {
        entry_point: window.location.href,
        store: this.cookies.get("utm[utm_content]")
          ? this.cookies.get("utm[utm_content]")
          : ECOMMERCE,
        product_name: product.name,
        package_type: PREDEFINED_PACKAGE,
        product_price: product.sale_price,
        promotion_discount: product.price - product.sale_price,
        sku: product.sku
      };
    }
    return {
      entry_point: window.location.href,
      store: this.cookies.get("utm[utm_content]")
        ? this.cookies.get("utm[utm_content]")
        : ECOMMERCE,
      product_name: product.title,
      package_type: PREDEFINED_PACKAGE,
      product_price: product.sale_cost,
      promotion_discount: product.cost - product.sale_cost,
      sku: product.sku
    };
  }

  addPlan(product, product_type) {
    const payload = this.getProductPayloadBasedOnProductType(
      product,
      product_type
    );

    this.track("add_product", payload);
  }

  productDetail(product, product_type) {
    const payload = this.getProductPayloadBasedOnProductType(
      product,
      product_type
    );

    this.track("product_detail", payload);
  }

  // DONE
  addToCart(product, product_type) {
    let products = [];
    if (product_type === "Nuestros Planes") {
      products = [
        {
          product_name: product.name,
          product_price: product.sale_price,
          discount: product.price - product.sale_price,
          sku: product.sku,
          quantity: 1
        }
      ];
    } else {
      products = product.products.map(product => ({
        product_name: product.title,
        product_price: product.sale_cost,
        discount: product.cost - product.sale_cost,
        sku: product.sku,
        quantity: 1
      }));
    }

    const payload = {
      entry_point: window.location.href,
      store: this.cookies.get("utm[utm_content]")
        ? this.cookies.get("utm[utm_content]")
        : ECOMMERCE,
      product_type,
      products
    };

    this.track("add_to_cart", payload);
  }

  viewCheckout() {
    const payload = Lockr.get("successfulPurchase");

    this.track("view_thank_you_page", payload);
  }

  successfulPurchase(data) {
    const cardData = Lockr.get("cardData") ? Lockr.get("cardData") : {};
    const packages = Lockr.get("packages") ? Lockr.get("packages") : [];
    const coupon = Lockr.get("coupon") ? Lockr.get("coupon") : "";
    const coupon_discount = Lockr.get("coupon_discount")
      ? Lockr.get("coupon_discount")
      : 0;

    const payload = {
      cart_size: packages.length,
      store: this.cookies.get("utm[utm_content]")
        ? this.cookies.get("utm[utm_content]")
        : ECOMMERCE,
      cart_value: PlanService.getSubtotalPrice(),
      discounts: PlanService.getDiscounts(),
      payment_form: data.paymentData.order.charge.payment_method,
      card_type: cardData.cardType,
      card_brand: cardData.brand,
      has_coupon_discount: !!coupon_discount,
      coupon_code: coupon,
      coupon_discount,
      is_renovation: false,
      promoter: data.orderData.hasPromoter
        ? data.orderData.promoter.name
        : null,
      business_channel: data.orderData.business_channel,
      created_in: data.orderData.created_in,
      fulfilled_in: data.orderData.fulfilled_in,
      order_id: data.orderData.id,
      shopping_cart: this.formatPackages(packages)
    };

    Lockr.set("successfulPurchase", payload);

    this.track("succesfull_purchase", payload);
  }

  activateAllianceAdvisor(contact, alliance) {
    this.track("activate_adviser", {
      contact,
      alliance
    });
  }

  activateFreemiumPlan(contact, plan) {
    this.track("activate_freemium", {
      contact,
      plan
    });
  }

  track(eventName, payload) {
    const distinctId = this.getDistinctId();

    if (distinctId) {
      payload.distinct_id = distinctId;
    }

    this.mixpanel.track(eventName, payload);g
  }

  getDistinctId() {
    return this.mixpanel.get_distinct_id();
  }
}
