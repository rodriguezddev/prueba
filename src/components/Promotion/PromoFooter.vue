<template>
  <div class="mt-5 text-left px-3">
    <h2>¿Quiénes pueden registrarse?</h2>
    <p class="mt-3 text-md-left text-justify">
      Cualquier persona en México puede registrarse de entre 18 y 73 años de
      edad, si eres empleado, empleador o freelance. Si tienes un pequeño
      negocio o un gran corporativo puedes registrar a tus empleados. Solo
      tienes que compartirles esta página para que se registren:
      <a href="">www.vivebamba.com/servicios-gratuitos</a>
    </p>
    <h2 class="mt-5">
      ¿Quién es Bamba y por qué da Orientación Médica Telefónica 24/7 y el
      Asesor Bamba Gratis?
    </h2>
    <p class="mt-3 text-md-left text-justify">
      Somos una empresa de Impacto Social que busca proteger lo más importante
      ¡La Fuerza Laboral de México!. Este compromiso nos ha llevado a ofrecer
      estos servicios gratuitamente, porque entendemos que son tiempos difíciles
      y debemos hacer un esfuerzo como impulsores del cambio y del bienestar.
    </p>
    <div class="mt-5">
      <h3 class="text-center">
        Nos respaldan las Instituciones más sólidas del país:
      </h3>
      <div class="row justify-content-center align-items-center mb-5 mx-0 mt-5">
        <div class="col-md-12 px-0 px-md-3">
          <div class="row mx-0">
            <div class="col-6 col-md-3 mt-3 mb-5">
              <img
                src="../../assets/img/Mapfre.png"
                alt="mapfre"
                style="width:120px"
              >
            </div>
            <div class="col-6 col-md-3 mt-3 mb-5">
              <img
                class="mb-0"
                src="../../assets/img/bbva.png"
                alt="bbva"
                style="width:110px"
              >
            </div>
            <div class="col-6 col-md-3 mt-3 mb-5">
              <img
                src="../../assets/img/axa.png"
                alt="axa"
                style="width:120px"
              >
            </div>
            <div class="col-6 col-md-3 mt-3 mb-5">
              <img
                src="../../assets/img/gentera.png"
                class="img-fluid"
                alt="gentera"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 text-center col-sm-12 col-md-4 offset-md-4">
      <router-link to="/sobre-nosotros">
        <button
          type="button"
          class="btn navy-background text-white font-weight-bold px-5 mt-5 mb-5 btn-block"
        >
          Conoce Bamba
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
/* import AppService from "../../services/app"; */

export default {
  name: "PromoFooter",

  data() {
    return {
      routes: {}
    };
  },

  mounted() {
    /* this.routes = AppService.getAllRoutes(); */
  }
};
</script>

<style scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
</style>
