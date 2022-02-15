import EventBus from "../events";
/* import $ from "jquery"; */

export default {
  showItemAddedToShoppingCart(data) {
    EventBus.$emit(data.eventName, data.data);
    window.$("#AddPlan").modal("show");
  },

  showAlert(options) {
    if (options.type === "confirm") {
      window.$("#confirmAlert").modal("show");
      EventBus.$emit("confirmAlert", options);
    }

    if (options.type === "alert" || options.type === "error") {
      window.$("#alert").modal("show");
      EventBus.$emit("alertMessage", options);
    }
  },

  showPlanDetails(options) {
    window.$("#ModalInfo").modal("show");
    EventBus.$emit("openCardDetails", options);
  },

  showOurPlanDetail(plan) {
    window.$("#ModalPlan").modal("show");
    EventBus.$emit("openModalDetailsPlan", plan);
  },

  showShoppingCart() {
    window.$("#ShoppingCart").modal("show");
    EventBus.$emit("shoppingCartOpened");

  },

  confirmDeletePlan(options) {
    EventBus.$emit("deletePackage", options);
    window.$("#DeletePlan").modal("show");
  },

  openDetailsCustomPlan(options) {

    EventBus.$emit("resumeModal", options);
    window.$("#Resume").modal("show");
  }
};
