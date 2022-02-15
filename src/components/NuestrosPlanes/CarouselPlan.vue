<template>
  <div
    id="carouselIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="plan of plans"
        :key="plan.id"
        class="carousel-item active mx-0 px-0 row mx-0 align-items-center"
      >
        <card-plan :plan="plan" />
      </div>
    </div>
    <ol class="carousel-indicators">
      <li
        data-target="#carouselIndicators"
        data-slide-to="0"
        class="active mr-3"
      />
      <li
        data-slide-to="1"
        data-target="#carouselIndicators"
      />
      <li
        class="ml-3"
        data-slide-to="2"
        data-target="#carouselIndicators"
      />
    </ol>
    <a
      class="carousel-control-prev"
      href="#carouselIndicators"
      role="button"
      data-slide="prev"
    >
      <span><i
        aria-hidden="true"
        class="fas fa-chevron-left"
      /></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselIndicators"
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
</template>

<script>
import CardPlan from "./CardPlan.vue";

export default {

  name: "CarouselPlan",
  components: {CardPlan},

  data() {
    return {
      plans: [
        {
          id: 1,
          level: "Plan Básico",
          price: "32.00",
          months: "3",
          features: [
            {
              featurename: "Seguro de accidentes",
              feature: "Seguro individual por $25,000"
            }
          ]
        },
        {
          id: 2,
          level: "Plan Medio",
          price: "92.00",
          months: "9",
          features: [
            {
              featurename: "Seguro de accidentes",
              feature: "Seguro individual por $25,000"
            }
          ]
        },
        {
          id: 3,
          level: "Plan Alto",
          price: "143.00",
          months: "12",
          features: [
            {
              featurename: "Seguro de accidentes",
              feature: "Seguro individual por $50,000"
            }
          ]
        },
        {
          id: 4,
          level: "Plan Premium",
          price: "277.00",
          months: "12",
          features: [
            {
              featurename: "Seguro de accidentes",
              feature: "Seguro individual por $100,000"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.fa-chevron-left,
.fa-chevron-right {
  color: #123291;
  font-size: 30px;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #50b3e6;
}
li.active {
  background-color: #123291;
}

</style>
