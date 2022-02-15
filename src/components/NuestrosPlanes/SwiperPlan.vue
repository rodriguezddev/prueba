<template>
  <div class="swiper-container mx-0">
    <div class="swiper-wrapper">
      <div
        v-for="plan of plans"
        :key="plan.id"
        class="swiper-slide px-0 px-md-0 mx-0"
      >
        <card-plan
          :mobile="true"
          :plan="plan"
        />
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" />
    <!-- Add Arrows -->
    <div class="next pl-5">
      <i class="fas fa-chevron-circle-right" />
    </div>
    <div class="prev pr-5">
      <i class="fas fa-chevron-circle-left" />
    </div>
  </div>
</template>

<script>
import CardPlan from "./CardPlan.vue";

export default {

  name: "SwiperPlan",
  components: {CardPlan},


  props: ["plans"],

  mounted() {
    this.swiper = new window.Swiper(".swiper-container", {
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
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
.next {
  left: auto;
  right: 10px;
}
.prev {
  left: 10px;
  right: auto;
}

.next,
.prev {
  position: absolute;
  top: 50%;
  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fa-chevron-circle-right,
.fa-chevron-circle-left {
  font-size: 30px;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  border: #123291 solid 1px;
  background-color: #50b3e6;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #123291;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0px;
}
</style>
