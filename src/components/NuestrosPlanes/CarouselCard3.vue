<template>
  <div class="card text-center">
    <div class="card-body px-lg-0">
      <div class="row">
        <div class="col-lg-6 mt-5 ml-0 px-0 py-0">
          <img
            src="./../../assets/img/Slide3.png"
            alt="plan"
            class="img-flud w-100 pl-0"
          >
        </div>
        <div class="col-lg-6 text-left mt-5 mb-5 px-md-5 px-4 pl-lg-0">
          <h5>Pago de Nómina</h5>
          <p class="mt-4 font-weight-bold">
            $497 / Precio Anual
          </p>

          <h5 class="text-md-left text-justify">
            *Si tienes trabajadores del hogar o trabajadores este producto te
            interesa
          </h5>
          <p class="text-md-left text-justify">
            El/la trabajador/a obtiene una tarjeta de débito, donde puede
            recibir el pago del sueldo y dejar de manejar efectivo.
          </p>
          <p class="text-md-left text-justify">
            Nos encargamos de pagar la nómina de tu trabajadores a través de
            tarjeta de débito.
          </p>

          <p class="font-weight-bold">
            Qué incluye:
          </p>
          <ul>
            <li class="text-md-left text-justify">
              Gestión de tarjeta de débito BBVA para trabajador/a sin documentos
              ni visita a sucursal.
            </li>
            <li class="text-md-left text-justify">
              Domiciliación de salario a la cuenta BBVA de trabajador/a.
            </li>
            <li class="text-md-left text-justify">
              Envío de comprobantes del cobro y pago del sueldo.
            </li>
            <li class="text-md-left text-justify">
              El/la trabajador/a puede sacar efectivo hasta 4 veces gratis en
              cajeros BBVA y las veces que quiera en tiendas de autoservicio
              (Aurrera, Walmart, La Comer, etc.).
            </li>
          </ul>

          <p class="font-weight-bold">
            Qué no incluye:
          </p>
          <ul>
            <li class="text-md-left text-justify">
              En caso de extravío, el/la trabajador/a deberá solicitar la
              reposición directamente al banco.
            </li>
          </ul>

          <p class="font-weight-bold text-md-left text-justify">
            Nota: Si son pagos mayores de $15,000 pesos mensuales es necesario
            asistir a sucursal.
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
  name: "CarouselCard3",

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
