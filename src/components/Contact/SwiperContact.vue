<template>
  <!-- Swiper -->
  <div
    id="swiper-contact"
    class="swiper-container"
  >
    <div class="swiper-wrapper pb-5">
      <div
        v-for="card of cards"
        :key="card.id"
        class="swiper-slide"
      >
        <card-contact :card="card" />
      </div>
    </div>
    <!-- Add Pagination -->
    <div
      id="pagination-contact"
      class="swiper-pagination"
    />
  </div>
</template>

<script>
import CardContact from "./CardContact.vue";

export default {
  name: "SwiperContact",
  components: {CardContact},

  data() {
    return {
      cards: [
        {
          id: 1,
          name: "Empleador/a",
          iam: "Soy un",
          url: require("../../assets/BMB_estrella.png"),
          color: "#b9de9d",
          width: "110px",
          path: "/contacto/empleador"
        },
        {
          id: 2,
          name: "Freelance",
          iam: "Soy",
          url: require("../../assets/benef.png"),
          color: "#a0d6f1",
          width: "105px",
          path: "/contacto/freelance"
        },
        {
          id: 3,
          name: "Trabajador/a",
          iam: "Soy un",
          url: require("../../assets/BMB_corazon.png"),
          color: "#fce38b",
          width: "80px",
          path: "/contacto/trabajador"
        },
        {
          id: 4,
          name: "Empresa",
          iam: "Soy una",
          url: require("../../assets/service.png"),
          color: "#ffb4b6",
          width: "60px",
          path: "/contacto/empresa"
        },
        {
          id: 5,
          name: "Embajador/a",
          iam: "Quiero ser",
          url: require("../../assets/BMB_puente.png"),
          color: "#ddb1e4",
          width: "80%",
          path: "/contacto/embajador"
        }
      ]
    };
  },

  mounted() {
    this.swiper = new window.Swiper("#swiper-contact", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: "#pagination-contact",
        clickable: true
      }
    });
  }
};
</script>

<style scoped>
.swiper-pagination >>> .swiper-pagination-bullet {
  background-color: #50b3e6;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #123291;
}
</style>
