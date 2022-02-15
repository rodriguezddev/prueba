import config from "./config";
const Lockr = require("lockr");

export default {
  getApp() {
    return window.App;
  },

  isUserIsLoggedIn() {
    return Lockr.get("jwt-token") ? true : false;
  },

  getAuthUser() {
    return Lockr.get("auth-user") ? Lockr.get("auth-user") : null;
  },

  getUserCards() {
    return Lockr.get("user-card") ? Lockr.get("user-card") : null;
  },

  openpayIsProduction() {
    return window.App.openpayProduction;
  },

  getOpenpayCredentials() {
    return {
      openpayId: window.App.openpayId,
      openpayPublicKey: window.App.openpayPublicKey
    };
  },

  getMsiConfig() {
    return config.getMsiConfig();
  },

  getRoute(route) {
    const url = window.App.routes[route];
    return url === "//" ? "/" : url;
  },

  getAllRoutes() {
    return window.App.routes;
  },

  getIsPromoter() {
    return false;
  },

  getShowPromoterBanner() {
    return window.App.showPromoterBanner;
  },

  getChannel() {
    return null;
  },

  getPromoterId() {
    return window.App.promoterId;
  },

  getSocialNetworks() {
    return window.App.socialNetworks;
  },

  getPromotion() {
    return {
      active: 0,
      validity: "Vigencia del 24 al 31 de Mayo del 2021.",
      banner: {
        title: "Protegerte es nuestra Misión",
        subtitle: "Aprovecha nuestro 40% en todos nuestros productos.",
        image: "SliderSuperSale.png"
      },
      sliders_our_plans: ["", "", ""]
    };
  }
};
