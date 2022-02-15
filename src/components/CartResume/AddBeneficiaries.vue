<template>
  <div
    class="SetUpPlan px-1"
    data-test="cart-summary"
  >
    <div class="row mx-0 my-5">
      <div class="col-12 col-lg-7">
        <h1 class="text-center font-weight-bold">
          Resumen de carrito
        </h1>
        <img
          src="../../assets/img/Pasos1.png"
          alt=""
          class="img-fluid d-block mx-auto"
          style="width: 250px"
        >
        <h4 class="text-center font-weight-bold mt-5">
          Revisa los planes de tu carrito
        </h4>
        <p class="text-center">
          Agrega los beneficiarios para cada uno
        </p>

        <cart-elements
          v-for="(pack, indexPackage) in packages"
          :key="indexPackage"
          :beneficiaries="pack.beneficiaries"
          :pack="pack"
          :index-package="indexPackage"
        />

        <div class="row justify-content-between mx-2 mb-3">
          <div class="col-5 text-left">
            <h4>Total:</h4>
            <p>(# {{ packages.length }} productos)</p>
          </div>
          <div class="col-5 text-right">
            <h4 data-test="subtotal">
              {{ subtotal | currency }}
            </h4>
          </div>
        </div>
        <div class="row justify-content-between mx-2 mb-5">
          <div class="col-md-5 mt-3">
            <router-link to="/arma-tu-plan">
              <button
                type="button"
                class="btn blue-background font-weight-bold btn-block"
              >
                Seguir comprando
              </button>
            </router-link>
          </div>
          <div class="col-md-5 mt-3">
            <button
              type="button"
              data-test="continue-button"
              class="btn green-background font-weight-bold btn-block"
              @click="goToPayment()"
            >
              Continuar a pago
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-5 mt-3">
        <img
          src="../../assets/img/draw1resumen.png"
          alt="draw1"
          style="width: 80%"
        >
      </div>
    </div>

    <modal-alert />
    <delete-plan />
    <shopping-cart />
  </div>
</template>

<script>
import CartElements from "./PlanBeneficiaries.vue";
import PlanService from "../../services/plan";
import EventBus from "../../events";
import ModalAlert from "../ModalAlert.vue";
import DeletePlan from "./DeletePlan.vue";
import ShoppingCart from "../ShoppingCart.vue";
import CustomerService from "../../services/customer";
import ModalService from "../../services/modals";

const Lockr = require("lockr");

export default {
  name: "CartResume",

  components: { CartElements, ModalAlert, DeletePlan, ShoppingCart },

  data() {
    return {
      routes: [],
      packages: [],
      subtotal: 0,
      trackingService: "",
    };
  },

  async mounted() {
    await this.getPackages();
    EventBus.$on("updateSubtotal", () => {
      this.subtotal = PlanService.getSubtotalPrice();
    });
    EventBus.$on("benDeleted", (data) => {
      this.packages[data.indexPackage].beneficiaries.splice(
        data.indexBeneficiary,
        1
      );
    });
    EventBus.$on("packageDeleted", () => this.getPackages());
  },

  methods: {
    getPackages() {
      this.packages = PlanService.getPackages();
      this.subtotal = PlanService.getSubtotalPrice();

      if (this.packages.length === 0) {
        const lastPackageRemoved = Lockr.get("lastPackageRemoved");
        if (lastPackageRemoved.ourPlanType) {
          this.$router.push({ path: '/nuestros-planes' });
        }
      }
    },

    goToPayment() {
      const packages = PlanService.getPackages();

      const beneficiariesWithoutData = packages.filter(pack => {
        const emptyBeneficiary = pack.beneficiaries.find(
          beneficiary => beneficiary.name === ""
        );
        return !!emptyBeneficiary;
      });

      if (beneficiariesWithoutData.length) {
        return ModalService.showAlert({
          type: "alert",
          title:
            "Por favor para continuar, completa la información del beneficiario",
          message: "",
        });
      }

      //this.trackingService.beneficiariesData(packages);

      this.$vs.loading();

      setTimeout(() => {
        this.$vs.loading.close();
        this.getRedirectRoute();
      }, 1000);
    },

    getRedirectRoute() {
      if (CustomerService.getCustomer()) {
        return this.$router.push("/arma-tu-plan/pago");
      }

      return this.$router.push("/eres-cliente-bamba");
    },
  },
};
</script>

<style scoped>
.SetUpPlan {
  color: #123291;
  margin-top: 100px;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
  color: #123291;
  font-weight: bold;
}

.green-background {
  background-color: #4cc72f;
  border: none;
  color: #123291;
  font-weight: bold;
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

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
</style>
