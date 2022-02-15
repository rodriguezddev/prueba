<template>
  <div class="row align-items-center px-5 mx-0 mb-5 offset-lg-1">
    <div class="col-lg-3  text-lg-left order-2 order-md-first">
      <h1
        class="mt-md-0 mt-4 font-weight-bold"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="200"
      >
        {{ promotion.banner.title }}
      </h1>
      <p
        class="mt-4"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="200"
      >
        {{ promotion.banner.subtitle }}

        <br>

        {{ promotion.validity }}
      </p>
      <a

        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="-100"
      >
        <button
          class="btn navy-background text-white font-weight-bold px-5 mt-3"
          type="button"
        >
          Conócenos
        </button>
      </a>
      <a
        class="carousel-control-prev"
        data-slide="prev"
        href="#carouselIndicators"
        role="button"
        style="height: 40px"
      >
        <span><i
          aria-hidden="true"
          class="fas fa-chevron-circle-left"
        /></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        data-slide="next"
        href="#carouselIndicators"
        role="button"
        style="height: 40px"
      >
        <span><i
          aria-hidden="true"
          class="fas fa-chevron-circle-right"
        /></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="col-lg-8">
      <img
        alt="plan"
        class="BAM img-flud"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="200"
        src="../../../img/home/SliderPromoApril.png"
        style="width:80%"
      >
    </div>
  </div>
</template>

<script>
import AppService from "./../../services/app";

export default {
    name: "CarouselHomePromotion",

    props: ['promotion'],

    data() {
        return {
            routes: [],
            image: ''
        }
    },

    mounted() {
        this.routes = AppService.getAllRoutes();
        this.image = require(`../../../img/home/${this.promotion.banner.image}`);
    },

};
</script>

<style scoped>
.btn {
    border-radius: 10px !important;
    padding: 12px 40px;
}

.fa-chevron-circle-left,
.fa-chevron-circle-right {
    color: #123291;
    font-size: 35px;
}

@media (max-width: 991px) {
    .carousel-control-prev,
    .carousel-control-next {
        visibility: hidden;
    }
}

@media (min-width: 992px) {
    a {
        top: 105%;
    }

    .carousel-control-prev {
        left: 3%;
    }

    .carousel-control-next {
        left: 22%;
    }
}
</style>
