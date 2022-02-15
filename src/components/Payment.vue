<template>
  <div
    class="SetUpPlan px-1"
    data-test="payment"
  >

    <div class="row mx-0">
      <div
        class="col-12 col-lg-6"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        <h1 class="text-center font-weight-bold">
          Revisa tu compra
        </h1>
        <img
          src="../assets/img/Pasos2.png"
          alt=""
          class="img-fluid d-block mx-auto"
          style="width:250px"
        >
        <h4 class="text-center font-weight-bold mt-5">
          Resumen de compra
        </h4>
        <p class="text-center">
          Revisa que tus datos y el resumen de tu compra sean correctos
        </p>
      </div>
    </div>
    <div
      class="row mx-0 mb-5"
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="col-12 col-lg-6">
        <div class="row">
          <div class="col">
            <customer-info />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <payment-method-card />
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5">
        <card-purchase />
      </div>
    </div>

    <modal-alert />
  </div>
</template>

<script>
  import CardPurchase from "./PaymentCartResume.vue";
  import CustomerInfo from "./PaymentCustomerInfo.vue";
  import PlanService from "./../services/plan";
  import ModalAlert from "./ModalAlert.vue";
  import PaymentMethodCard from "./PaymentMethodCard.vue";

  export default {
  name: "CheckPurchase",

  components: { PaymentMethodCard, CustomerInfo, CardPurchase, ModalAlert },

  mounted() {
    this.getPackages();
  },

  methods: {
    getPackages() {
      const packages = PlanService.getPackages();

      if (packages.length === 0) {
        this.$router.push({ path: "/arma-tu-plan" });
        return 0;
      }

      packages.map(pack => {
        pack.beneficiaries.map(beneficiary => {
          if (beneficiary.name === "") {
            this.$router.push({ path: "/arma-tu-plan/beneficiarios" });
            return 0;
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.SetUpPlan {
  color: #123291;
  margin-top: 100px;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.navy-background {
  border: none;
}

.text-color {
  color: #50b3e6;
}

a {
  color: #123291;
  text-decoration: none;
}

a:focus {
  border-bottom: 2px solid #123291;
}
</style>
