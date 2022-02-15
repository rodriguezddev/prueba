<template>
  <!-- Swiper -->
  <div
    id="swiper"
    class="swiper-container"
  >
    <div class="swiper-wrapper pb-3">
      <div class="swiper-slide mt-5 px-5">
        <img
          alt="aliados"
          src="../../assets/benef.png"
          style="width:110px"
        >
        <p class="font-weight-bold mt-5 mb-3">
          Personalización y Precios justos
        </p>
        <p>
          Escoge solo los productos que más necesitas, paga lo justo por tu
          protección desde $50 al mes.
        </p>
      </div>
      <div class="swiper-slide mt-5 px-5">
        <img
          alt="aliados"
          src="../../assets/benef.png"
          style="width:110px"
        >
        <p class="font-weight-bold mt-5 mb-3">
          Acompañamiento
        </p>
        <p>
          Tu asesor Bamba te apoyará en caso de accidente, enfermedad, agendar
          consultas médicas e información para que alcances tu máximo nivel de
          desarrollo.
        </p>
      </div>
      <div class="swiper-slide mt-5 px-5">
        <img
          alt="aliados"
          src="../../assets/celular.png"
          style="width:80px"
        >
        <p class="font-weight-bold mt-5 mb-3">
          Flexibilidad y Accesibilidad
        </p>
        <p>
          Explora y compra desde tu computadora, celular o tablet y accede a
          nuestra plataforma de clientes desde nuestra App*.
        </p>
      </div>
    </div>
    <!-- Add Pagination -->
    <div
      id="pagination"
      class="swiper-pagination"
    />
  </div>
</template>

<script>
export default {
  name: "SwiperDif",
  components: {},

  mounted() {
    this.swiper = new window.Swiper("#swiper", {
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: "#pagination",
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
