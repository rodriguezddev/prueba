<template>
  <div
    id="carouselIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-if="promotion.active"
        class="carousel-item active"
        data-interval="10000"
      >
        <carousel-home-promotion :promotion="promotion" />
      </div>
      <div
        class="carousel-item"
        :class="{ active: !promotion.active }"
        data-interval="12000"
      >
        <carousel-home-slide-1 />
      </div>
      <div
        class="carousel-item"
        data-interval="10000"
      >
        <carousel-home-slide-2 />
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
  </div>
</template>

<script>
import CarouselHomeSlide1 from "./CarouselHomeSlide1.vue";
import CarouselHomeSlide2 from "./CarouselHomeSlide2.vue";

export default {

  name: "CarouselHome",
  components: {
    CarouselHomeSlide1,
    CarouselHomeSlide2
  },

  data() {
    return {
      promotion: {
        active: false
      }
    };
  }
};
</script>

<style scoped>
.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #50b3e6;
}

li.active {
  background-color: #123291;
}

@media (min-width: 992px) {
  .carousel-indicators li {
    visibility: hidden;
  }
}

.carousel-indicators {
  bottom: -30px;
}
</style>
