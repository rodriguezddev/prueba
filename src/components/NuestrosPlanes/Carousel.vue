<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active mx-0">
        <carousel-card-1 />
      </div>
      <div class="carousel-item">
        <carousel-card-2 />
      </div>
      <div class="carousel-item">
        <carousel-card-3 />
      </div>
    </div>
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active mr-3"
      />
      <li
        data-slide-to="1"
        data-target="#carouselExampleIndicators"
      />
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="2"
        class="ml-3"
      />
    </ol>
    <a
      class="carousel-control-prev"
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
    <a
      class="carousel-control-next"
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
</template>

<script>
import CarouselCard1 from "./CarouselCard1.vue";
import CarouselCard2 from "./CarouselCard2.vue";
import CarouselCard3 from "./CarouselCard3.vue";

export default {
  name: "Carousel",
  components: {CarouselCard1, CarouselCard2, CarouselCard3}
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
  background-color: #f67779;
}
li.active {
  background-color: #123291;
}
</style>
