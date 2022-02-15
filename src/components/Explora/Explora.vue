<template>
  <div class="Explora px-1 mb-3">
    <h1
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      ¡Hola de nuevo, {{ user }}!
    </h1>
    <p
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      Explora y vive Bamba®
    </p>
    <div class="swiper-explora">
      <swiper-explora />
    </div>
    <div class="row mx-0 mb-5">
      <div class="col-md-2">
        <img
          class="hola img-fluid w-100"
          src="../../assets/hola1.png"
          alt="hombre"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
        >
      </div>
      <div class="col-md-8">
        <div
          class="row px-5 px-md-0"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <div
            v-for="card of cards"
            :key="card.id"
            class="col-md-6 col-lg-4 px-4"
          >
            <card-explora
              :card="card"
              class="card-explora"
            />
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <img
          class="hola img-fluid w-100"
          src="../../assets/hola2.png"
          alt="hombre"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
        >
      </div>
    </div>
  </div>
</template>

<script>
import CardExplora from "./CardExplora.vue";
import SwiperExplora from "./SwiperExplora.vue";

export default {
  name: "Explora",
  components: {CardExplora, SwiperExplora},

  data() {
    return {
      user: "Carmen",
      cards: [
        {
          id: 1,
          name: "Mis Datos",
          url: require("../../assets/notes.png"),
          color: "#ffb4b6",
          width: "60px",
          path: "/mis-datos"
        },
        {
          id: 2,
          name: "Beneficiarios",
          url: require("../../assets/benef.png"),
          color: "#a0d6f1",
          width: "105px",
          path: "/beneficiarios"
        },
        {
          id: 3,
          name: "Ver Carrito",
          url: require("../../assets/basket.png"),
          color: "#b9de9d",
          width: "50px",
          path: "/resumen"
        },
        {
          id: 4,
          name: "Ayuda",
          url: require("../../assets/service.png"),
          color: "#b8c2dd",
          width: "60px",
          path: "/metodos-de-pago"
        },
        {
          id: 5,
          name: "Noticias Importantes",
          url: require("../../assets/news.png"),
          color: "#fce38b",
          width: "45px",
          path: "/metodos-de-pago"
        },
        {
          id: 6,
          name: "Mis Métodos de Pago",
          url: require("../../assets/pay.png"),
          color: "#ddb1e4",
          width: "70px",
          path: "/metodos-de-pago"
        }
      ]
    };
  },
  methods: {
    seguirRuta(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.Explora {
  color: #123291;
  margin-top: 120px;
}
@media screen and (max-width: 992px) {
  .hola {
    display: none;
  }
}

@media (max-width: 576px) {
  .card-explora {
    display: none;
  }
}
@media (min-width: 577px) {
  .swiper-explora {
    display: none;
  }
}
</style>
