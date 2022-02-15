<template>
  <div
    class="SetUpPlan px-1"
    data-test="confirmation"
  >
    <div class="row mx-0">
      <div
        class="col-12 col-lg-7 px-md-1"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="200"
      >
        <h1 class="text-center font-weight-bold mt-4">
          ¡Gracias por tu compra!
        </h1>

        <h4 class="text-center font-weight-bold mt-5">
          Confirmación de compra
        </h4>
        <p class="text-center">
          Tu compra se realizó exitosamente
        </p>
        <card-confirmation />
      </div>
      <div
        class="col-lg-5 mt-3 mb-5"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="200"
      >
        <img
          class="draw1"
          src="../../assets/img/draw1resumen.png"
          alt="draw1"
          style="width:80%;"
        >
      </div>
    </div>
  </div>
</template>

<script>
import CardConfirmation from "./CardConfirmation.vue";
import OrderService from "./../../services/order";
import TrackingService from "./../../services/tracking";

const Lockr = require("lockr");

export default {

  name: "Confirmation",
  components: {CardConfirmation},

  data() {
    return {
      trackingService: ""
    };
  },

  mounted() {
    this.trackingService = new TrackingService(this);
    OrderService.removeOrderItems();

    if (Lockr.get("successPayment") === true) {
      //this.trackingService.viewCheckout();
      Lockr.set("successPayment", false);
      Lockr.rm("originalPrice");
      Lockr.rm("paymentIntent");
    } else {
      this.$router.push({ path: "/" });
      return 0;
    }
  }
};
</script>

<style scoped>
.SetUpPlan {
  color: #123291;
  margin-top: 100px;
}

a {
  color: #123291;
  text-decoration: none;
}

a:focus {
  border-bottom: 2px solid #123291;
}

@media screen and (max-width: 992px) {
  .draw1 {
    display: none;
  }
}
</style>
