<template>
  <div class="background-bamba pt-6 ">
    <div class=" SetUpPlan py-5">
      <h1 class="text-center font-weight-bold mt-5">
        Arma <span class="text-color">tu plan</span>
      </h1>
      <p class="text-center">
        Escoge uno o más productos de nuestras categorías y arma tu plan. Cuando
        termines da clic en el carrito para continuar tu compra.
      </p>
      <div class="just-desktop">
        <div class="row mt-2">
          <div class="col-12 col-md-10 offset-md-2">
            <div
              class="row"
              data-test="category-tabs"
            >
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="col-md-2"
              >
                <div
                  class="d-flex flex-column align-items-center cursor-pointer option"
                  @click="setActivePlans(category.id, index)"
                >
                  <div class="d-flex flex-column align-items-center">
                    <div
                      :class="{ hide: category.numberPlans === 0 }"
                      class="d-flex flex-column align-items-center justify-content-center number-plans"
                    >
                      <span>{{ category.numberPlans }}</span>
                    </div>
                    <span>{{ category.name }}</span>
                  </div>
                  <div
                    v-if="activeCategory === category.id"
                    class="selected mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="mt-5">
              <div
                class="row"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="800"
              >
                <my-plan :mobile="false" />
              </div>
            </div>
          </div>
          <div
            class="col-12 col-md-9"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            <div class="mt-5">
              <div>
                <transition-group
                  class="row"
                  name="fade"
                  tag="div"
                >
                  <div
                    v-for="plan of activePlans"
                    :key="plan.id"
                    class="col-md-6 col-lg-4"
                  >
                    <card :plan="plan" />
                  </div>
                </transition-group>
              </div>

              <p
                v-if="promotion.active"
                class="text-center"
              >
                {{ promotion.validity }}
              </p>

              <div class="row justify-content-center mt-3">
                <div class="col-12 col-md-4">
                  <router-link to="/nuestros-planes">
                    <button
                      data-test="our-plans-button"
                      type="button"
                      class="btn navy-background text-white mt-5 btn-block"
                    >
                      Ver planes Bamba®
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="just-mobile">
        <build-your-plan-mobile />
      </div>
    </div>
    <modal-info />
    <modal-resume />
    <add-plan />
    <modal-add-other-plan />
    <shopping-cart />
    <modal-alert />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "./../Card.vue";
import MyPlan from "./../MyPlan.vue";
import ModalInfo from "./../ModalInfo.vue";
import ModalAddOtherPlan from "./../ModalAddOtherPlan.vue";
import ShoppingCart from "./../ShoppingCart.vue";
import ModalResume from "./../ModalResume.vue";
import AddPlan from "./../AddPlanModal.vue";
import ModalAlert from "./../ModalAlert.vue";
import BuildYourPlanMobile from "./BuildYourPlanMobile.vue";
import {buildYourPlan} from "../../mixins/buildYourPlan";
import GoogleAnalyticsService from "../../services/GoogleAnalyticsService";

export default {
  name: "Plans",

  components: {
    Card,
    MyPlan,
    ModalInfo,
    ShoppingCart,
    ModalResume,
    AddPlan,
    ModalAddOtherPlan,
    ModalAlert,
    BuildYourPlanMobile
  },
  mixins: [buildYourPlan],
  data() {
    return {
      trackingService: "",
    }
  },
  mounted() {
    this.trackingService = new GoogleAnalyticsService(this);
    this.trackingService.sendHeartBeatEvent();
  },
};
</script>

<style scoped lang="scss">
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.SetUpPlan {
  color: #23358d;
}

.option {
  font-size: 1.1rem;
}

.number-plans {
  background-color: #23358d;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  margin-bottom: 0.5rem;

  span {
    color: white;
    font-size: 0.9rem;
  }
}

.selected {
  height: 2px;
  background: #00b4ea;
  width: 30%;
}

.blue-background {
  background-color: #74b1e5;
  border: none;
}

.navy-background {
  border: none;
}

.text-color {
  color: #ff7575;
}

.hide {
  visibility: hidden !important;
}

a {
  color: #23358d;
  text-decoration: none;
}

a:focus {
  border-bottom: 2px solid #23358d;
}

.cursor-pointer {
  cursor: pointer;
}

.font-weight-bold {
  font-weight: bolder;
}

.background-bamba {
  background: #f6fcfe;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

div.horizontal-scroll-menu {
  overflow: auto;
  white-space: nowrap;
}

.horizontal-scroll-menu-option {
  display: inline-block;
  text-align: center;

  .selected {
    height: 2px;
    background: #00b4ea;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #123291;
}

.carousel-indicators {
  bottom: -45px;
}

.collapse-button-build-plan {
  width: 100%;

  &:active {
    color: #fff;
    background-color: #23358d;
    border-color: #23358d;
  }

  &:hover {
    transform: scale(1) !important;
  }
}

.number-plans-mobile {
  background: #74b1e5;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 25px;
}
</style>
