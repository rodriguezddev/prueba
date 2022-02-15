<template>
  <!-- Swiper -->
  <div
    id="swiper"
    class="swiper-container"
  >
    <div class="swiper-wrapper pb-4">
      <div class="swiper-slide mt-4 px-5">
        <img
          alt="aliados"
          src="../../assets/Mapfre.png"
          style="width:120px"
        >
        <p class="mt-3">
          Es un aliado que nos ayuda a proteger la salud y finanzas de nuestros
          clientes con seguro de accidentes y atención médica para los
          beneficiarios.
        </p>
      </div>
      <div class="swiper-slide mt-4 px-5">
        <img
          alt="aliados"
          src="../../assets/bbva.png"
          style="width:110px"
        >
        <p class="mt-3">
          Junto con ellos introducimos al mundo bancario a los trabajadores a
          través del pago de su nómina electrónicamente.
        </p>
      </div>
      <div class="swiper-slide mt-4 px-5">
        <img
          alt="aliados"
          src="../../assets/axa.png"
          style="width:120px"
        >
        <p class="mt-3">
          Es la institución que nos apoya protegiendo a los beneficiarios con
          pólizas de indemnización por accidentes.
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
  name: "SwiperAllies",
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
