<template>
  <div
    v-if="plans.length"
    data-test="our-plans"
  >
    <div class="Planes px-5">
      <h1 class="text-center font-weight-bold mt-5">
        Nuestros <span class="text-color">planes</span>
      </h1>
      <p class="text-center">
        Conoce los planes que tenemos
        <span class="font-weight-bold">para ti.</span>
      </p>
    </div>

    <div class="swiper-plan mx-0 mt-5">
      <swiper-plan
        :plans="plans"
        :promotion="promotion"
      />
    </div>

    <div class="row mx-0 mt-5 swipe">
      <div
        v-for="(plan, index) of plans"
        :key="index"
        class="col-12 col-md-6 col-lg-3 px-0"
      >
        <card-plan
          :mobile="false"
          :plan="plan"
          class="max-card"
        />
      </div>
    </div>

    <p
      v-if="promotion.active"
      class="text-center"
    >
      {{ promotion.validity }}
    </p>

    <a href="/arma-tu-plan">
      <button
        id="Planes-Armar"
        type="button"
        class="btn navy-background text-white font-weight-bold mt-4 mb-5 px-5"
      >
        Quiero armar mi plan
      </button>
    </a>

    <div v-if="_showFamiliarPlans">
      <carousel :promotion="promotion" />
    </div>

    <h1 class="font-weight-bold mt-5 ident">
      Identifica tu nivel de vulnerabilidad frente a imprevistos
    </h1>
    <h5 class="col-lg-8 offset-lg-2 mt-3">
      Realiza un test rápido que te ayudará a conocer el nivel de exposición y
      vulnerabilidad que pudiera poner en riesgo tu salud y finanzas e
      identifica cuál es el plan de protección que te ayudará.
    </h5>
    <a
      target="_blank"
      href="https://conoce.vivebamba.com/test-descubre-tu-plan-de-proteccion-ideal"
    >
      <button
        type="button"
        class="btn navy-background text-white font-weight-bold mt-4 mb-5 px-5"
      >
        Solicitar
      </button>
    </a>

    <div
      v-if="_showFamiliarPlans"
      class="container"
    >
      <subscribe :phone="'55 4585 0371'" />
    </div>
    <modal-plan />
    <add-plan />
    <shopping-cart />
  </div>
</template>

<script>
import CardPlan from "./CardPlan.vue";
import Carousel from "./Carousel.vue";
import Subscribe from "./Subscribe.vue";
import SwiperPlan from "./SwiperPlan.vue";
import PlanService from "./../../services/plan";
import ModalPlan from "./ModalPlan.vue";
import AddPlan from "./../AddPlanModal.vue";
import ShoppingCart from "../ShoppingCart.vue";
import AppService from "../../services/app";
import GoogleAnalyticsService from "../../services/GoogleAnalyticsService";

export default {

  name: "Plans",

  components: {
    CardPlan,
    Carousel,
    Subscribe,
    SwiperPlan,
    ModalPlan,
    AddPlan,
    ShoppingCart
  },
  props: ["showFamiliarPlans"],

  data() {
    return {
      plans: [],
      trackingService: "",
      // eslint-disable-next-line vue/no-reserved-keys
      _showFamiliarPlans: false,
      promotion: {}
    };
  },

  mounted() {
    this.promotion = AppService.getPromotion();
    this.trackingService = new GoogleAnalyticsService(this);
    this.trackingService.sendHeartBeatEvent();
    this.getPlans();
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
      setTimeout(() => this.$vs.loading.close(), 800);
    }
  }
};
</script>

<style scoped>
  .max-card{
    min-height: 60rem;
  }
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
  .ident{
    font-size:16px;
  }
}

@media (min-width: 577px) {
  .swiper-plan {
    display: none;
  }

}

</style>
