<template>
  <div
    :ref="plan.id"
    class="card text-center mb-5 mx-3"
    data-test="plan-card"
    :class="{ 'card-selected': selected }"
  >
    <div
      v-if="plan"
      class="card-body px-0 row mx-0 flex-column align-items-center justify-content-between"
    >
      <div class="w-100">
        <p class="font-weight-bold text-center">
          Planes Bamba®
        </p>
        <h3
          class="font-weight-bold text-center px-3"
          style="font-size:23px;"
        >
          {{ plan.level }}
        </h3>
        <h3 class="font-weight-bold text-center px-3">
          {{ plan.name }}
        </h3>
        <div class="line" />
      </div>


      <div
        v-if="!mobile"
        class="features"
      >
        <div
          v-for="(feature, index) in plan.meta.features_card"
          :key="index"
          class="pr-4 pl-1 mb-4"
        >
          <p class="font-weight-bold mt-3 mb-0 text-left ml-4">
            {{ feature.name }}
          </p>
          <p
            v-for="(nameFeature, index) in feature.features"
            :key="index"
            class="mt-2 text-left ml-4"
          >
            <i class="fas fa-check mr-2" />{{ nameFeature }}
          </p>
        </div>
      </div>

      <div>
        <div :style="{ 'margin-top': plan.margin }" />
        <p class="margin font-weight-bold text-uppercase text-center">
          Plan anual
        </p>
        <h3
          v-if="!plan.has_promotion"
          class="font-weight-bold text-center"
        >
          {{ plan.price | currency }}
        </h3>

        <h3
          v-if="plan.has_promotion"
          class="font-weight-bold"
        >
          {{ plan.sale_price | currency }}
        </h3>
        <div class="row mb-3 mx-0 justify-content-center">
          <p class="text-center">
            MSI:<br>{{ msiOption }} meses de ${{ getPriceMsi(plan, msiOption) }} MXN
          </p>
        </div>
      </div>
      <div>
        <button
          v-if="!selected"
          :id="plan.meta.add_to_cart_button_id"
          class="btn text-blue blue-background btn-md mb-4 trigger-btn font-weight-bold mt-5 mt-md-0"
          @click="addPlan()"
        >
          Añadir al carrito
        </button>

        <button
          v-else
          :id="plan.meta.remove_to_cart_button_id"
          class="btn text-blue green-background btn-md mb-4 trigger-btn font-weight-bold"
          @click="removePlan()"
        >
          Quitar del carrito
        </button>
        <div
          class="row justify-content-center align-items-center cursor-pointer"
          style="cursor: pointer;"
          @click="openModalDetailsPlan()"
        >
          <p class="mt-2">
            Más info
          </p>
          <a
            class="trigger-btn ml-2 mb-1"
            data-toggle="modal"
          >
            <i class="fas fa-chevron-circle-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../events";
import PlanService from "../../services/plan";
import ModalsService from "../../services/modals";
import ChartService from "../../services/charts";
/* import TrackingService from "./../../services/tracking"; */

export default {
  name: "CardPlan",
  components: {},

  props: ["plan", "mobile"],

  data() {
    return {
      selected: false,
      msiOption: 0,
      options: {},
      trackingService: ""
    };
  },

  mounted() {
    this.msiOption = this.getMSIOptions();
    this.getOurPlansAddedToCart();

    EventBus.$on("removeFromOurPlans", ({ plan }) => {
      if (plan.name === this.plan.name) {
        this.removePlan();
      }
    });
  },

  methods: {

    trackPlan(level) {
      this.$ga.event(level, "Click", "nuestros planes")
    },
    getMSIOptions() {
      return this.plan.has_promotion
        ? PlanService.getInstallments(Number(this.plan.sale_price))
        : PlanService.getInstallments(Number(this.plan.price));
    },

    getOurPlansAddedToCart() {
      const plansAddedToCart = PlanService.getOurPlansAddedToCart();
      this.selected = !!plansAddedToCart.find(
        plan => plan.name === this.plan.name
      );
      this.options = this.selected
        ? ChartService.ourPlansSelectedChart
        : ChartService.ourPlansStartChart;
    },

    openModalDetailsPlan() {
      ModalsService.showOurPlanDetail(this.plan);
      /* this.trackingService.productDetail(this.plan, "Nuestros Planes"); */
    },

    addPlan() {
      PlanService.addProductFromOurPlans(this.plan);
      ModalsService.showItemAddedToShoppingCart({
        eventName: "itemAddedToShoppingCart",
        data: {
          fromCustomPlan: false
        }
      });
      /* this.trackingService.addToCart(this.plan, "Nuestros Planes"); */
      EventBus.$emit("packagesUpdated");
      this.$refs[this.plan.id].classList.remove("flip-vertical-right");
      this.selected = true;
      this.options = ChartService.ourPlansSelectedChart;

      setTimeout(
        () => this.$refs[this.plan.id].classList.add("flip-vertical-left"),
        5
      );
      this.trackplanAg()
    },

    removePlan() {
      PlanService.removeProductFromOurPlans(this.plan);
      EventBus.$emit("packagesUpdated");
      this.$refs[this.plan.id].classList.remove("flip-vertical-left");
      this.selected = false;
      this.options = ChartService.ourPlansStartChart;
      setTimeout(
        () => this.$refs[this.plan.id].classList.add("flip-vertical-right"),
        5
      );
      this.trackplanQuit()
    },
    trackplanAg() {
          this.$ga.event('Agregar '+ this.plan.name, 'Click', 'Nuestros planes-agregar')
      },
    trackplanQuit() {
        this.$ga.event('Remover '+ this.plan.name, 'Click', 'Nuestros planes-remover')
    },
    getPriceMsi(plan, msi) {
      return (Math.ceil(Number(plan.sale_price) / Number(msi))).toFixed(0)
    }
  }
};
</script>

<style lang="scss" scoped>
.features {
  min-height: 350px;
}

.check {
  width: 45px;
  position: absolute;
  top: 15%;
  right: 20%;
}
.card {
  border-radius: 20px;
  background-color: #dcf0fb;
  color: #123291;
  border: none;
}
.card-selected {
  background-color: #e6f3da !important;
}

p {
  font-size: 13px;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.green-background {
  background-color: #4cc72f;
  border: none;
  color: #123291;
  font-weight: bold;
}
.fa-check {
  color: #50b3e6;
}
.fa-chevron-circle-right {
  font-size: 19px;
  color: #123291;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
  color: #123291;
}

.line {
  border-bottom: 1px solid #50b3e6;
}
input {
  background-color: transparent;
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}
input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 12px;
}
input:focus {
  background-color: transparent;
  color: #123291;
  font-size: 14px;
  font-weight: bold;
}

.flip-vertical-left {
  -webkit-animation: flip-vertical-left 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.deactivate {
  opacity: 0.45;
  pointer-events: none;
}

@-webkit-keyframes flip-vertical-left {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
}

@keyframes flip-vertical-left {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
}

.flip-vertical-right {
  -webkit-animation: flip-vertical-right 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

@-webkit-keyframes flip-vertical-right {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}

@keyframes flip-vertical-right {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}

.promotion {
  text-decoration: line-through;
  text-decoration-color: #595b5f;
  color: #595b5f !important;
  font-size: 1.3rem;
}
</style>
