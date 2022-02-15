<template>
  <div
    id="carouselExampleIndicators"
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
        <carousel-about-card :card="card" />
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
import CarouselAboutCard from "./CarouselAboutCard.vue";

export default {

  name: "CarouselAbout",
  components: {CarouselAboutCard},

  data() {
    return {
      cards: [
        {
          image: require("../../assets/img/about-us-sliders/Slide1.png"),
          title: "Qué nos hace diferentes",
          content:
              "Nuestra oferta además de ser personalizable está diseñada para ofrecer la mejor cobertura a precios justos. Puedes adquirir tu plan o planes completamente online, desde tu computadora o celular."
        },
        {
          image: require("../../assets/img/about-us-sliders/Slide2.png"),
          title: "Porqué confiar en nosotros",
          content:
            "Nuestro modelo único de integración de soluciones y servicios de instituciones sólidas nos permite crear un motor de inclusión y empoderamiento económico para todos los mexicanos."
        },
        {
          image: require("../../assets/img/about-us-sliders/Slide3.png"),
          title: "Nuestra Misión",
          content:
            "Dar acceso a toda la fuerza trabajadora del país (empleadores, trabajadores vulnerables y freelance) a soluciones de protección laboral, de salud y financiera a la medida de sus necesidades para que puedan salir adelante."
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
  background-color: #c06fce;
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

  .carousel-control-prev{
    left: 0
  }
  .carousel-control-next{
    right: 0
  }
}
</style>
