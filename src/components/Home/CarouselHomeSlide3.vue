<template>
  <div class="row align-items-center px-5 mx-0 mb-5 offset-lg-1">
    <div class="col-lg-4 text-lg-left order-2 order-md-first">
      <h1 class="mt-md-0 mt-4 font-weight-bold">
        Conoce nuestros planes
      </h1>
      <p class="mt-4">
        Contamos con planes individuales y familiares, los cuales pueden
        incluir: seguro de accidentes, atención telefónica, indemnizaciones,
        asesoría y acompañamiento.
      </p>
      <a href="">
        <button
          type="button"
          class="btn navy-background text-white font-weight-bold px-5 mt-3"
          style="background: #ff7678;"
        >
          Nuestros planes
        </button>
      </a>
      <a
        class="carousel-control-prev"
        href="#carouselIndicators"
        role="button"
        data-slide="prev"
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
        href="#carouselIndicators"
        role="button"
        data-slide="next"
        style="height: 40px"
      >
        <span><i
          aria-hidden="true"
          class="fas fa-chevron-circle-right"
        /></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="col-lg-6">
      <img
        src="../../assets/img/home/Slider01-min.png"
        alt="plan"
        class="BAM img-flud"
        style="width:80%"
      >
    </div>
  </div>
</template>

<script>
/* import AppService from "./../../services/app"; */

export default {
  name: "CarouselHomeSlide3",

  data() {
    return {
      routes: []
    };
  }

  /* mounted() {
        this.routes = AppService.getAllRoutes();
    } */
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
    top: 104%;
  }

  .carousel-control-prev {
    left: 3%;
  }

  .carousel-control-next {
    left: 22%;
  }
}
</style>
