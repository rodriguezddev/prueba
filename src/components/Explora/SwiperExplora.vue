<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper pb-5">
      <div
        v-for="card of cards"
        :key="card.id"
        class="swiper-slide"
      >
        <card-explora :card="card" />
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" />
  </div>
</template>

<script>
import CardExplora from "./CardExplora.vue";

export default {
  name: "SwiperExplora",
  components: {CardExplora},

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

  mounted() {
    this.swiper = new window.Swiper(".swiper-container", {
      slidesPerView: 1.5,
      spaceBetween: 40,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style scoped>
.swiper-pagination >>> .swiper-pagination-bullet {
  border: #123291 solid 1px;
  background-color: #50b3e6;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #123291;
}
</style>
