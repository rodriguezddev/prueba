<template>
  <div
    v-if="plans.length"
    data-test="our-plans"
  >
    <div class="swiper-plan mx-0 mt-5">
      <swiper-plan :plans="plans" />
    </div>

    <div class="row mx-0 mt-5 swipe">
      <div
        v-for="(plan, index) of plans"
        :key="index"
        class="col-12 col-md-6 col-lg-3"
      >
        <card-plan
          :mobile="false"
          :plan="plan"
        />
      </div>
    </div>

    <div
      v-if="_showFamiliarPlans"
      class="container"
    >
      <subscribe :phone="'55 4585 0371'" />
    </div>
    <modal-plan />
    <add-plan />
    <shopping-cart plans />
  </div>
</template>

<script>
import CardPlan from "../NuestrosPlanes/CardPlan";
import SwiperPlan from "../NuestrosPlanes/SwiperPlan.vue";
import ModalPlan from "../NuestrosPlanes/ModalPlan.vue";
import AddPlan from "./../AddPlanModal.vue";
import ShoppingCart from "../ShoppingCart.vue";
import AppService from "../../services/app";
import TrackingService from "../../services/tracking";

export default {

  name: "Plans",

  components: {CardPlan, SwiperPlan, ModalPlan, AddPlan, ShoppingCart},
  props: ["showFamiliarPlans"],

  data() {
    return {
      plans: [],
      routes: [],
      _showFamiliarPlans: false
    };
  },

  mounted() {
    this.trackingService = new TrackingService(this);
    this.trackingService.visit("Nuestros Planes");
    this.getPlans();

    this.routes = AppService.getAllRoutes();
    this._showFamiliarPlans =
      this.showFamiliarPlans !== undefined && this.showFamiliarPlans !== null
        ? this.showFamiliarPlans
        : true;
  },
  methods: {
    async getPlans() {
      this.$vs.loading();
      const [error, plans] = await PlanService.getProductsFromApi();
      if (error) return 
      this.plans = plans;
      setTimeout(_ => this.$vs.loading.close(), 800);
    }
  }
};
</script>

<style scoped>
.Planes {
  color: #123291;
  margin-top: 100px;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.navy-background {
  border: none;
}

.text-color {
  color: #ff7575;
}

input {
  background-color: transparent;
  border-color: #123291;
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

@media (max-width: 576px) {
  .swipe {
    display: none;
  }
}

@media (min-width: 577px) {
  .swiper-plan {
    display: none;
  }
}
</style>
