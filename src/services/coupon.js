import axios from "./axios";
import Config from "./config";
import to from "await-to-js";

export default {
  async applyCoupon(coupon, items) {
      return await to(axios.post(`${Config.API_URL}/api/v2/coupon/${coupon}`, {items}));
  }
};
