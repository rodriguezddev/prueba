<template>
  <div>
    <div class="row align-items-center px-3 mx-0">
      <div class="col-lg-6 text-left text-bold">
        <h1>
          Orientación Médica Telefónica Gratuita <br>
          + Asesor Bamba
        </h1>
      </div>
      <div class="col-6">
        <img
          alt="plan"
          class="BAM img-flud w-100"
          src="../../assets/img/orientac.png"
        >
      </div>
    </div>
    <div class="mt-5 px-5 text-justify">
      <p>
        Sabemos que son tiempos difíciles por eso Bamba® te apoya con
        Orientación Médica Telefónica 24/7 y un Asesor Bamba totalmente GRATIS
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoHeader"
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .BAM {
    display: none;
  }
}
</style>
