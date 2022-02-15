<template>
  <div class="card text-center">
    <div class="card-body px-lg-0">
      <div class="row">
        <div class="col-lg-6 mt-5 ml-0 px-0 py-0">
          <img
            src="./../../assets/img/Slide2.png"
            alt="plan"
            class="img-flud w-100 pl-0"
          >
        </div>
        <div class="col-lg-6 text-left mt-5 mb-5  px-md-5 px-4 pl-lg-0">
          <h5>Afiliación al IMSS</h5>
          <p class="mt-4 font-weight-bold">
            $172 / Precio Anual
          </p>

          <h5>*Exclusivo para Trabajadoras del Hogar</h5>
          <p class="text-md-left text-justify">
            Como empleador de una Trabajadora del Hogar conoce tus obligaciones
            ante el IMSS y recibe ayuda para afiliarla y pagar cuotas de manera
            sencilla y ágil con pago electrónico.
          </p>

          <p class="font-weight-bold">
            Qué incluye:
          </p>
          <ul>
            <li class="text-md-left text-justify my-3">
              Información general de incorporación al IMSS y cómo cumplir con
              tus obligaciones.
            </li>
            <li class="text-md-left text-justify my-3">
              Gestión del trámite para la incorporación al IMSS del trabajador.
            </li>
            <li class="text-md-left text-justify my-3">
              Gestión de pagos anuales de cuotas del IMSS.
            </li>
            <li class="text-md-left text-justify my-3">
              Envío de comprobantes anuales.
            </li>
          </ul>

          <p class="font-weight-bold">
            Qué no incluye:
          </p>
          <ul>
            <li class="text-md-left text-justify my-3">
              El precio de $172 solo incluye la gestión y asesoría,
              <span class="font-weight-bold">NO</span> la cuota del trabajador.
            </li>
            <li class="text-md-left text-justify my-3">
              Infonavit.
            </li>
            <li class="text-md-left  my-3">
              Proporcionales de aguinaldo.
            </li>
            <li class="text-md-left text-justify my-3">
              Prima vacacional.
            </li>
          </ul>

          <p class="font-weight-bold">
            Nota: es necesario registrar una cuenta para la domiciliación de la
            afiliación
          </p>

          <p v-if="promotion && activePromotion">
            <strong>{{ promotion }}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselCard2",

  props: ["promotion", "activePromotion"]
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: none;
  background-color: #ffe4e5;
  color: #123291;
}

@media screen and (min-width: 768px) {
  .card {
    margin-left: 150px;
    margin-right: 150px;
  }
}

@media screen and (max-width: 768px) {
  .card {
    margin-left: 20px;
    margin-right: 20px;
  }
}

</style>
