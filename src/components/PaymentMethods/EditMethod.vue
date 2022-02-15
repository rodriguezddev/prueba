<template>
  <div class="MyInfo px-1 mb-5 text-left">
    <div class="row mx-0">
      <div class="col-12 col-md-6 pl-md-5">
        <h1 class="text-sm-left font-weight-bold mb-3">
          Editar Datos de Pago
        </h1>
        <router-link
          to="/metodos-de-pago"
        >
          <small
            class="font-weight-bold"
          ><i class="fas fa-arrow-left mr-2 red-color" />Regresar</small>
        </router-link>
        <form @submit.prevent="processForm">
          <div class="form-row mt-4">
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="account"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Número de cuenta:"
              >
            </div>
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="name"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Nombre del Titular:"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <div class="row mb-0">
                <div class="col-8">
                  <small class="text-muted">Fecha de expiración</small>
                </div>
                <div class="col-4">
                  <small class="font-weight-bold">CVV</small>
                </div>
              </div>
              <div class="row">
                <div class="col-4 mt-2">
                  <input
                    type="number"
                    class="form-control form-control-lg text-center"
                    placeholder="Día"
                  >
                </div>
                <div class="col-4 mt-2">
                  <select
                    id="month"
                    class="form-control form-control-lg"
                    placeholder="Mes"
                    style="height:42px;"
                  >
                    <option selected>
                      Mes
                    </option>
                    <option>Enero</option>
                    <option>Febrero</option>
                  </select>
                </div>
                <div class="col-4 mt-2">
                  <input
                    type="number"
                    class="form-control form-control-lg text-center"
                    placeholder="CVV"
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 mt-4">
              <p class="ml-1">
                Tipo de tarjeta:
              </p>
              <div class="row text-center mt-3">
                <div class="col-6 font-weight-bold">
                  <input
                    id="exampleRadios1"
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    value="option1"
                  >
                  <label
                    class="form-check-label"
                    for="exampleRadios2"
                  >
                    Débito
                  </label>
                </div>
                <div class="col-6 font-weight-bold">
                  <input
                    id="exampleRadios2"
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    value="option2"
                  >
                  <label
                    class="form-check-label"
                    for="exampleRadios2"
                  >
                    Crédito
                  </label>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 mt-4">
              <input
                v-model.trim="address"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Dirección de Facturación:"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="city"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Ciudad:"
              >
            </div>
            <div class="col-12 col-md-6">
              <button
                class="btn green-background mt-5 text-blue font-weight-bold btn-block"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="img col-md-6 px-5">
        <img
          alt="info"
          class="img-fluid w-100"
          src="../../assets/info1.png"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditMethod",

  data() {
    return {
      account: "",
      name: "",
      city: "",
      address: ""
    };
  }
};
</script>

<style scoped>
.MyInfo {
  color: #123291;
  margin-top: 120px;
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
.text-color {
  color: #50b3e6;
}
button {
  margin-bottom: 30px;
}
input,
select {
  background-color: transparent;
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
  font-size: 16px;
}

input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 16px;
}
select:focus,
input:focus {
  color: #123291;
  font-size: 16px;
  font-weight: bold;
}
@media screen and (max-width: 992px) {
  .img {
    display: none;
  }
}
</style>
