<template>
  <div class="container">
    <div
      id="swiper-container"
      class="swiper-container mx-0"
    >
      <div class="swiper-wrapper pb-5">
        <div
          v-for="card of cards"
          :key="card.id"
          class="swiper-slide px-2 px-md-0"
        >
          <card-contact
            :card="card"
            class="mx-md-5"
          />
        </div>
      </div>
      <!-- Add Pagination -->
      <div
        id="pagination2"
        class="swiper-pagination"
      />
      <!-- Add Arrows -->
      <div class="next pl-5">
        <i class="fas fa-chevron-right" />
      </div>
      <div class="prev pr-5">
        <i class="fas fa-chevron-left" />
      </div>
    </div>
  </div>
</template>
<script>
import CardContact from "../Contact/CardContact.vue";

export default {
  name: "Swiper",
  components: {CardContact},

  data() {
    return {
      user: "Carmen",
      cards: [
        {
          id: 1,
          name: "Empleador/a",
          iam: "Soy",
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
          iam: "Soy",
          url: require("../../assets/BMB_corazon.png"),
          color: "#fce38b",
          width: "80px",
          path: "/contacto/trabajador"
        },
        {
          id: 4,
          name: "Empresa",
          iam: "Soy",
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
          width: "170px",
          path: "/contacto/embajador"
        }
      ]
    };
  },

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
.next {
  left: auto;
  right: 0px;
}
.prev {
  left: 0px;
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
.fa-chevron-right,
.fa-chevron-left {
  font-size: 30px;
}

.swiper-pagination >>> .swiper-pagination-bullet {
  border: #123291 solid 1px;
  background-color: #50b3e6;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #123291;
}
</style>
