<template>
  <div class="row align-items-center px-5 mx-0 mb-5 mt-4 offset-lg-1">
    <div class="col-lg-6 text-lg-left order-2 order-md-first ml-5">
      <h1
        class="mt-md-0 mt-4 font-weight-bold"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        Protección y asistencia para tu salud y economía
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        <p class="mt-4">
          Revolucionamos la manera de protegerte a ti y a tu familia con productos para cuidar tu salud y los bienes materiales que
          más te importan a precios justos, sin coaseguros, ni deducibles y contratando al momento.
        </p>
      </div>

      <router-link
        to="/sobre-nosotros"
        data-aos="zoom-in"
        data-aos-offset="-100"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        <button
          type="button"
          class="btn text-white font-weight-bold px-5 mt-3"
          style="background: #ff7678;"
        >
          Conócenos
        </button>
      </router-link>
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
    <div class="col-lg-5">
      <img
        src="../../assets/bambaicon.png"
        alt="plan"
        class="BAM img-flud"
        style="width:80%"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "CarouselHomeSlide1",

  data() {
    return {
      routes: []
    };
  }
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
