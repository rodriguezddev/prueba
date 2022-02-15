<template>
  <div
    id="AddOtherPlan"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div
        class="modal-content animate__animated animate__slideInDown text-center"
      >
        <div class="modal-body">
          <img
            alt="cart"
            class="icon mt-5"
            src="../assets/img/cart.png"
          >
          <h4 class="modal-title mt-3 font-weight-bold">
            Crear otro plan
          </h4>
          <p class="mx-4">
            ¿Qué quieres hacer con tu plan actual?
          </p>
          <div class="icon-box">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="row mt-5 mb-5 mx-2">
            <div class="col-6 text-center">
              <button
                type="button"
                class="btn blue-background btn-block text-white font-weight-bold"
                @click="cleanAndStartFromBegingin()"
              >
                Empezar desde el inicio
              </button>
            </div>
            <div class="col-6 text-center">
              <button
                type="button"
                class="btn navy-background btn-block text-white font-weight-bold"
                @click="addPlanToShoppingCart()"
              >
                Agregar plan a carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "./../events";
import PlanService from "./../services/plan";

export default {
  name: "ModalAddOtherPlan",

  data() {
    return {
      plans: [],
      price: 0,
      originalPrice: 0,
      planname: ""
    };
  },

  mounted() {
    EventBus.$on("setPackages", data => {
      this.plans = data.plans;
      this.price = data.price;
      this.planname = data.planname;
      this.originalPrice = data.originalPrice;
    });
  },

  methods: {
    cleanAndStartFromBegingin() {
      this.$vs.loading();

      setTimeout(() => {
        PlanService.removeActivePackage();
        EventBus.$emit("removeActivePackage");
        window.$("#AddOtherPlan").modal("hide");
        this.$vs.loading.close();
      }, 800);
    },

    addPlanToShoppingCart() {
      this.$vs.loading();
      setTimeout(() => {
        PlanService.addPackage({
          plans: this.plans,
          price: this.price,
          planName: this.planname,
          originalPrice: this.originalPrice
        });
        PlanService.removeActivePackage();
        EventBus.$emit("packagesUpdated");
        EventBus.$emit("removeActivePackage");
        window.$("#AddOtherPlan").modal("hide");
        this.$vs.loading.close();
      }, 800);
    }
  }
};
</script>

<style scoped>
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
</style>
