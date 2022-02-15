import axios from "./axios";
import to from "await-to-js";
import Config from "./config";

const Lockr = require("lockr");

export default {
  async login(credentials) {
    return await to(axios.post(`/api/v2/auth/login`, credentials));
  },

  async askForPin(cellphone) {
    return await to(
      axios.post(`${Config.API_URL}/api/send-pin`, {
        cellphone
      })
    );
  },

  setMobile(mobile) {
    Lockr.set("cellphone", mobile);
  },

  getMobile(mobile) {
    return Lockr.get("cellphone", mobile) ? Lockr.get("cellphone", mobile) : "";
  },

  async loginWithPin(pin) {

    const [error, { data }] = await to(
      axios.put(`${Config.API_URL}/api/login-jwt`, {
        cellphone: Lockr.get("cellphone"),
        pin
      }).catch((e) => {
        console.log(e)
        document.getElementById("warning").style.display = "block"
        document.getElementById("proces").style.display = "none"
      })
    );
    if (error) {
      return [error];
    }

    Lockr.set("jwt-token", data.token);
    Lockr.set("auth-user", data.user);
    Lockr.set("user-card", data.userCard);

    return [null, data];
  },

  async checkIfCellphoneAlreadyRegistered(cellphone) {
    return await to(
      axios.get(`${Config.API_URL}/api/verify-cellphone/${cellphone}`)
    );
  },

  async logout() {
    Lockr.rm("jwt-token");
    Lockr.rm("auth-user");
    Lockr.rm("coupon");
    Lockr.rm("customer");
    Lockr.rm("cellphone");
    Lockr.rm("plans");
    Lockr.rm("price");
    Lockr.rm("name");
    Lockr.rm("packages");
    Lockr.rm("ourPlans");
    Lockr.rm("successPayment");
    Lockr.rm("orderId");
    Lockr.flush();

    /* await to(axios.get(`${AppService.getRoute('store2.storev2.logout')}`)); */
  }
};
