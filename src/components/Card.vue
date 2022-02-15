<template>
  <div>
    <div
      :ref="plan.id"
      :class="{
        'card-selected': selected,
        deactivate: !selected && categorySelected
      }"
      data-test="product-card"
      class="card text-center mt-2 mb-4 ml-2 mr-2"
    >
      <div
        class="card-body"
        data-test="product-card-body"
      >
        <h6 class="card-subtitle my-3">
          {{ plan.type }}
        </h6>
        <h4 class="card-title font-weight-bold">
          {{ plan.title }}
        </h4>
        <div style="position: relative">
          <img
            :src="getImage(plan.image)"
            alt=""
            class="icon img-fluid my-3"
          >
          <img
            v-if="selected"
            class="check"
            src="../assets/img/check.png"
            alt="hombre"
          >
        </div>

        <h3
          v-if="!plan.has_promotion"
          class="mb-0 mt-3 text-center"
        >
          {{ plan.cost | currency }}
        </h3>
        <h3
          v-if="plan.has_promotion"
          class="mb-0 mt-3 text-center"
          :class="{ promotion: plan.has_promotion }"
        >
          {{ plan.cost | currency }}
        </h3>
        <h3
          v-if="plan.has_promotion"
          class="mb-0 mt-1 text-center"
        >
          {{ plan.sale_cost | currency }}
        </h3>


        <div class="d-flex justify-content-center">
          <button
            v-if="!selected"
            :id="plan.meta.add_to_cart_button_id"
            class="btn add-plan my-3 just-desktop"
            data-test="btn-add-product"
            type="button"
            @click="verifyAddPlan()"
          >
            Añadir a plan
          </button>
          <button
            v-if="!selected"
            :id="plan.meta.add_to_cart_button_id"
            class="btn add-plan my-3 just-mobile"
            data-test="btn-add-product"
            type="button"
            @click="verifyAddPlan(true)"
          >
            Añadir a plan
          </button>
          <button
            v-if="selected"
            :id="plan.meta.remove_to_cart_button_id"
            class="btn red-background my-3 just-desktop"
            data-test="remove-product-button"
            type="button"
            @click="removePlan"
          >
            <div class="d-flex align-items-center">
              <i class="far fa-trash-alt mr-2" />
              <span>Eliminar del plan</span>
            </div>
          </button>
          <button
            v-if="selected"
            :id="plan.meta.remove_to_cart_button_id"
            class="btn red-background my-3 just-mobile"
            data-test="remove-product-button"
            type="button"
            @click="removePlan"
          >
            <div class="d-flex align-items-center">
              <i class="far fa-trash-alt mr-2" />
              <span>Eliminar del plan</span>
            </div>
          </button>
        </div>

        <p
          class="btn-see-more mt-3 cursor-pointer text-center"
          data-test="see-more-button"
          @click="openDetails()"
        >
          Más info
          <span>
            <i class="fas fa-chevron-circle-right" />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../events";
import PlanService from "./../services/plan";
import ModalService from "./../services/modals";
import TrackingService from "../services/tracking";

export default {
  name: "Card",

  props: ["plan"],

  data() {
    return {
      selected: false,
      categorySelected: false
    };
  },

  mounted() {
    this.trackingService = new TrackingService(this);

    EventBus.$on("addPlan", () => this.checkIfPlanOfCategoryAlreadyAdded());
    EventBus.$on("removeActivePackage", () => {
      this.checkIfPlanOfCategoryAlreadyAdded();
      this.selected = false;
    });
    EventBus.$on("removePlan", plan => {
      if (this.plan.id === plan.id) {
        this.selected = false;
      }
      this.checkIfPlanOfCategoryAlreadyAdded();
    });
    this.checkIfPlanOfCategoryAlreadyAdded();
    this.checkIfThisPLanIsAlreadyAdded();
  },

  methods: {
    checkIfPlanOfCategoryAlreadyAdded() {
      this.categorySelected = PlanService.checkIfPlanOfCategoryAlreadyAdded(
        this.plan.category
      );
      this.checkIfThisPLanIsAlreadyAdded();
    },

    checkIfThisPLanIsAlreadyAdded() {
      this.selected = PlanService.checkPlanIsAdded(this.plan.id);
    },

    verifyAddPlan(isMobile = false) {
      this.addPlan(isMobile);
    },

    addPlan(isMobile) {
      if (!PlanService.checkIfWeCanAddThisPlan(this.plan)) {
        this.$refs[this.plan.id].classList.remove("flip-vertical-right");
        this.selected = true;
        EventBus.$emit("addPlan", { ...this.plan, isMobile });
        //this.trackingService.addPlan(this.plan, "Arma tu plan");
        setTimeout(
          () => this.$refs[this.plan.id].classList.add("flip-vertical-left"),
          5
        );
      }
      this.trackagregarplan();
    },

    removePlan() {
      this.$refs[this.plan.id].classList.remove("flip-vertical-left");
      this.selected = false;
      EventBus.$emit("removePlan", this.plan);
      setTimeout(
        () => this.$refs[this.plan.id].classList.add("flip-vertical-right"),
        5
      );
      this.trackremoverplan();
    },

    openDetails() {
      ModalService.showPlanDetails({
        plan: this.plan,
        selected: this.selected
      });
    },

    trackagregarplan() {
      this.$ga.event("Agregar " + this.plan.title, "Click", "arma tu plan");
    },
    trackremoverplan() {
      this.$ga.event("Remover " + this.plan.title, "Click", "arma tu plan");
    },
    getImage(image) {
      const url = require("../assets/img/plans_icons/" + image);
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
.check {
  width: 30px;
  position: absolute;
  top: 10px;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.card {
  border-radius: 25px;
  background-color: #fff8da;
  border: 1px solid #ffe4e5;
  color: #123291;
}

.card-selected {
  background-color: #e1f3db;
  border: 1px solid #e1f3db;
  color: #123291;
}

.cursor-pointer {
  cursor: pointer;
}

a img {
  width: 20px;
  height: 20px;
}

.fa-chevron-circle-right {
  color: #123291;
}

.blue-background {
  background-color: #74b1e5;
  border: none;
}

.orange-background {
  background-color: #f67779;
  border: none;
}

.add-plan {
  background-color: #faad19;
  border: none;
  font-weight: bold;
}

.green-background {
  background-color: #4cc72f;
  border: none;
  color: #123291;
  font-weight: bold;
}

.red-background {
  background-color: #ff7575;
  border: none;
  color: #123291;
  font-weight: bold;
}

.icon {
  width: 85px;
}

.flip-vertical-left {
  -webkit-animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
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
  -webkit-animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
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
