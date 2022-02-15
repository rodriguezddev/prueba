<template>
  <div
    id="AddPlan"
    class="modal pr-0"
    data-backdrop="static"
    data-keyboard="false"
    data-test="modal-add-plan"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div
        class="modal-content text-center animate__animated animate__slideInDown"
      >
        <div class="icon-box">
          <button
            class="close"
            type="button"
            @click="continueShopping()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img
            class="icon mt-5"
            src="https://www.flaticon.com/svg/static/icons/svg/3789/3789253.svg"
            alt="cart"
          >
          <h4
            v-if="config.addToCart"
            class="modal-title mt-3 font-weight-bold"
          >
            ¡Plan añadido al carrito!
          </h4>
          <h4
            v-else
            class="modal-title mt-3 font-weight-bold"
          >
            ¡Producto añadido al plan!
          </h4>
          <p class="mx-4 text-center">
            <span>¿Qué deseas hacer ahora?</span>
          </p>
          <div class="row mt-5 mb-5 mx-2">
            <div
              v-if="continueCustomizePlan"
              class="col-md-10 offset-md-1 text-center"
            >
              <button
                type="button"
                class="btn blue-background btn-block text-blue font-weight-bold mt-3"
                @click="continueShopping()"
              >
                <span>Seguir personalizando mi plan</span>
              </button>
            </div>
            <div class="col-md-10 offset-md-1 text-center">
              <button
                type="button"
                class="btn blue-background btn-block text-blue font-weight-bold mt-3"
                @click="addAnotherPackage()"
              >
                <span v-if="fromCustomPlan">Armar otro plan</span>
                <span v-else>Explorar otro plan</span>
              </button>
            </div>
            <div class="col-md-10 offset-md-1 text-center">
              <button
                type="button"
                class="btn navy-background btn-block text-blue font-weight-bold mt-3"
                @click="goToPayment()"
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanService from "../services/plan";
import EventService from "../events";

export default {
  name: "AddPlanModal",

  data() {
    return {
      fromCustomPlan: true,
      mobile: false,
      continueCustomizePlan: true,
      config: {
        addToCart: false
      }
    };
  },

  mounted() {
    EventService.$on("itemAddedToShoppingCart", data => {
      this.mobile = data.mobile;
      this.fromCustomPlan = data.fromCustomPlan ? data.fromCustomPlan : true;
      this.config = data;
      this.continueCustomizePlan = !(data && data.addToCart);
    });
  },

  methods: {
    goToPayment() {
      if (this.mobile) {
        EventService.$emit("addPackageToCartFromMobile", {
          goToPayment: true
        });
        return 0;
      }
      window.$("#AddPlan").modal("hide");
      //Remove active package
      PlanService.removeActivePackage();

      this.$vs.loading();

      setTimeout(() => {
        this.$vs.loading.close();
        this.$router.push({ path: "/arma-tu-plan/pago" });
      }, 600);
    },

    addAnotherPackage() {
      this.$vs.loading();

      PlanService.removeActivePackage();
      EventService.$emit("removeActivePackage");
      EventService.$emit("packagesUpdated");

      setTimeout(() => {
        window.$("#AddPlan").modal("hide");
        this.continueCustomizePlan = true;
        this.$vs.loading.close();
      }, 600);
    },

    continueShopping() {
      window.$("#AddPlan").modal("hide");
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.modal-dialog {
  max-width: 600px;
}

.modal-content {
  border-radius: 15px;
  color: #123291;
  background-color: #dcf0fb;
}

.modal {
  background-color: rgba(9, 17, 40, 0.7);
}

.icon {
  width: 5rem;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.red-background {
  background-color: #ff787d;
  border: none;
}

.text-color {
  color: #50b3e6;
}

.navy-background {
  border: none;
}

.icon-box {
  color: white;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 3;
  background: #ff7678;
  padding: 15px;
  text-align: center;
}

.icon-box button {
  color: white;
  font-size: 30px;
  position: relative;
  top: -11px;
  left: 1.8px;
}

.text-blue {
  color: #123291;
}
</style>
