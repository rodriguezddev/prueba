import Payment from "./payment";
import AppService from "./app";
import to from "await-to-js";
import axios from "axios";
import FreemiumService from "./freemium";
import ProductService from "./plan";
import Config from "./config";
const Lockr = require("lockr");

export default {
  getPhoneAssistanceBambaFreemiumPlan() {
    return Config.getPhoneAssistanceBambaFreemiumPlan();
  },

  getHeaderWithToken() {
    if (AppService.isUserIsLoggedIn()) {
      const token = Lockr.get("jwt-token");
      return {
        headers: { Authorization: `Bearer ${token}` }
      };
    }

    return {};
  },

  async activateAdvisor(customer, plan, newsletter) {
    const [error] = await FreemiumService.createOrder(customer, plan, newsletter);
    if (error) {
      return [error];
    }

    return [null];
  },

  async createOrder(customer, plan, newsletter) {
    const [errorProduct, product] = await ProductService.getProductIdFromSku(plan.sku);
    if (errorProduct) {
      return [errorProduct];
    }

    const data = {
      items: [
        {
          beneficiaries: [
            {
              addons: [],
              birthdate: customer.birthdate,
              cellphone: customer.cellphone,
              email: customer.email,
              gender: customer.gender,
              lastname: customer.lastname,
              name: customer.name,
              second_lastname: customer.second_lastname,
              type: "MYSELF"
            }
          ],
          quantity: 1,
          product: {
            id: product.id,
            sku: product.sku
          }
        }
      ],
      created_in: Payment.FREEMIUM,
      channel_code: AppService.getChannel() ? AppService.getChannel().channel_code : Payment.FREEMIUM, // Must change for the promoter channel
      customer,
      packages: [
        {
          name: product.body_html,
          products: [
            {
              id: product.id
            }
          ]
        }
      ],
      coupon_code: ""
    };

    if (AppService.getChannel()) {
      data.promoter_id = AppService.getChannel().promoterId;
    }

    const headers = Payment.getHeaderWithToken();

    const [error, orderData] = await to(axios.post(`${Config.API_URL}/api/v2/orders`, data, headers));
    if (error) {
      return [error];
    }

    return await to(axios.post(`${Config.API_URL}/api/alliances/checkout/${orderData.data.order.id}`, {
      fulfilled_in: Payment.FREEMIUM,
      newsletter
    }));
  }
};
