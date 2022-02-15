<template>
  <div class="Beneficiario px-1 mb-5 text-left">
    <div class="container">
      <h1 class="text-left font-weight-bold mb-4">
        Mis métodos de pagos
      </h1>
      <router-link
        to="/explora"
      >
        <small
          class="font-weight-bold"
        ><i class="fas fa-arrow-left mr-2 red-color" />Regresar</small>
      </router-link>
      <div class="row mt-5">
        <div class="col-12">
          <card-method />
        </div>
      </div>
      <div class="row text-left mt-5">
        <div class="col-12">
          <a
            href="#AddCard"
            data-toggle="modal"
            class="btn green-background text-blue font-weight-bold mt-3 trigger-btn"
          >
            Agregar Tarjeta
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardMethod from "./CardMethod.vue";

export default {
  name: "PaymentMethods",
  components: {CardMethod}
};
</script>

<style scoped>
.Beneficiario {
  color: #123291;
  margin-top: 125px;
}
.red-color {
  color: #ff787d;
}
a {
  text-decoration: none;
  color: #123291;
  margin-bottom: 20px;
}
.green-background {
  background-color: #7fc34a;
  border: none;
}

.text-blue {
  color: #123291;
}

.navy-background {
  border: none;
}
button {
  margin-bottom: 30px;
}
</style>
