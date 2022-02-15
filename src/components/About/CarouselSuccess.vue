<template>
  <div
    id="carouselIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <carousel-success-card :card="card" />
      </div>
    </div>

    <ol
      v-if="cards.length > 1"
      class="carousel-indicators"
    >
      <li
        v-for="(card, index) in cards"
        :key="index"
        data-target="#carouselSuccess"
        :data-slide-to="index"
        class="mr-3 text-md-center text-justify"
        :class="{ active: index === 0 }"
      />
    </ol>
    <a
      v-if="cards.length > 1"
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
      v-if="cards.length > 1"
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
import CarouselSuccessCard from "./CarouselSuccessCard.vue";

export default {

  name: "CarouselSuccess",
  components: {CarouselSuccessCard},

  props: ["cards"],

  mounted() {
    this.swiper = new window.Swiper("#swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      pagination: {
        el: "#pagination2",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 80
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev"
      }
    });
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
.carousel-control-prev{
  left: -9rem
}
.carousel-control-next{
  right: -9rem
}

@media (max-width: 576px) {
  .carousel-control-prev,
  .carousel-control-next {
    bottom: -92%;
  }
  .carousel-control-prev{
    left: 0
  }
  .carousel-control-next{
    right: 0
  }
}
</style>
