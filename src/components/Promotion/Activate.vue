<template>
  <div class="mt-5">
    <div class="row align-items-center px-3 mx-0">
      <div class="col-lg-8 text-left text-bold">
        <h2>
          ¿Cómo funciona?
        </h2>
        <ul class="mt-4">
          <li class="mb-2">
            <img
              alt="1"
              class="mr-2"
              src="../../assets/img/step1.png"
            >
            Registra tus datos en el formulario y da clic en Activar.
          </li>
          <li class="mb-2">
            <img
              src="../../assets/img/step2.png"
              alt="2"
              class="mr-2"
            >Recibirás un whatsapp dándote la bienvenida.
          </li>
          <li class="mb-2">
            <img
              alt="3"
              class="mr-2"
              src="../../assets/img/step3.png"
            >¡Listo!
            Ya cuentas con Orientación Médica Telefónica 24/7 y con un Asesor
            Bamba®.
          </li>
          <li class="mb-2">
            <img
              alt="4"
              class="mr-2"
              src="../../assets/img/step4.png"
            >
            Recibirás vía email tu certificado 72 horas después de haber
            activado el producto.
          </li>
        </ul>
      </div>
      <div class="col-4">
        <img
          alt="plan"
          class="BAM img-flud w-100"
          src="../../assets/img/activate.png"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activate"
};
</script>

<style scoped>
li {
  list-style: none;
}
@media screen and (max-width: 992px) {
  .BAM {
    display: none;
  }
}
</style>
