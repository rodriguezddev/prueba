<template>
  <div>
    <div class="container mobile_plan">
      <button
        class="just-desktop btn btn-primary navy-background collapse-button-build-plan"
        type="button"
        data-toggle="collapse"
        data-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <span v-if="plansAdded === 0">Empieza a armar tu plan</span>
        <div
          v-else
          class="d-flex justify-content-center"
        >
          <div class="number-plans-mobile">
            {{ plansAdded }}
          </div>
          <span class="ml-2">Mi plan personalizado</span>
        </div>
      </button>

      <div
        id="collapseExample"
        class="collapse"
      >
        <my-plan :mobile="true" />
      </div>
    </div>

    <div class="horizontal-scroll-menu">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="horizontal-scroll-menu-option cursor-pointer"
        @click="setActivePlans(category.id, index)"
      >
        <div class="px-2 my-3">
          <span>{{ category.name }}</span>
          <div
            v-if="activeCategory === category.id"
            class="selected mt-2"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="mt-3">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                v-for="(plan, index) of activePlans"
                :key="plan.id"
                class="carousel-item"
                :class="{ active: index === 0 }"
              >
                <card :plan="plan" />
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <a
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span><i
                  aria-hidden="true"
                  class="fas fa-chevron-left"
                /></span>
                <span class="sr-only">Previous</span>
              </a>

              <ol class="carousel-indicators">
                <li
                  v-for="(slider, index) in activePlans"
                  :key="index"
                  data-target="#carouselExampleIndicators"
                  :data-slide-to="index + 1"
                  class="mr-3"
                  :class="{ active: index === 0 }"
                />
              </ol>

              <a
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span><i
                  aria-hidden="true"
                  class="fas fa-chevron-right"
                /></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      v-if="plansAdded"
      class="btn blue-background btn-block text-blue font-weight-bold mt-3 mt-md-0"
      @click="openResumePlan()"
    >
      Añadir plan a carrito
    </button>
  </div>
</template>

<script>
import {buildYourPlan} from "../../mixins/buildYourPlan";
import MyPlan from "./../MyPlan.vue";
import Card from "./../Card.vue";

export default {
  name: "BuildYourPlanMobile",

  components: { MyPlan, Card },

  mixins: [buildYourPlan]
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
  position: relative;
  right: 0;
  bottom: 0px;
  left: 0;
}

.fa-chevron-left,
.fa-chevron-right {
  color: #123291;
  font-size: 30px;
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
