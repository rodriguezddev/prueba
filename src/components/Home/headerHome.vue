<template>
  <div class="row mb-5 justify-content-around bg-content" >
    <div class="About container-xl mt-md-5 mt-0 pt-5 d-flex justify-content-between">
      <div class=" col-lg-6 text-left order-2 order-md-first About mt-5 pb-5">
        <h1 class="mt-md-0 mt-4 font-weight-bold">
          Protección personalizada para la salud y economía de todas las personas.
        </h1>
        <p class="mt-4">
          Somos la primera plataforma digital que ofrece planes y soluciones de protección para tu salud y economía, a precios justos, <strong class="font-weight-bold">sin deducibles, ni coaseguros</strong> , ni letras chiquitas.
        </p>
        <a
                id="Plan-home"
                class="
          btn
          btn-secondary
          font-weight-bold
          px-5
          mt-3
          col-12 col-md-6
          p-0
          py-2
        "
                href="#planes"
                style="
          border-radius: 24px !important;
          font-size: 15px;
          top: auto;
        "
        >
          Elige un plan
        </a>
      </div>
      <img
        src="../../assets/img/home/slider-min.svg"
        alt="plan"
        class="img-flud d-none d-md-block"
        style="width: 40%;"
      >
    </div>

  </div>
</template>

<script>
export default {
  name: "CarouselHomeSlide2",

  data() {
    return {
      routes: [],
    };
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
    top: 106%;
  }

  .carousel-control-prev {
    left: 3%;
  }

  .carousel-control-next {
    left: 22%;
  }
}

</style>
