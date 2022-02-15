<template>
  <div class="customerinfo mt-5 px-3 pl-md-5 text-left">
    <div class="row justify-content-between align-items-center">
      <div class="col-10 pl-0">
        <h3>Datos personales del comprador</h3>
      </div>
      <div class="col-2">
        <router-link
          to="/editar-datos"
        >
          <img
            alt="edit"
            class="mb-2"
            src="../../assets/Edit.png"
          >
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pl-0">
        <small>Nombre:</small>
        <p class="font-weight-bold">
          {{ customerName }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pl-0">
        <small>Teléfono:</small>
        <p class="font-weight-bold">
          {{ phone }}
        </p>
      </div>
      <div class="col-md-8 pl-0">
        <small>Email:</small>
        <p class="font-weight-bold">
          {{ email }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 pl-0">
        <small>Dirección:</small>
        <p class="font-weight-bold">
          {{ address }}
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-lg-6 pl-0">
        <h3>Tipo de tarjeta:</h3>
        <div class="row text-center mt-3">
          <div class="col-6">
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
              Tarjeta Débito
            </label>
          </div>
          <div class="col-6">
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
              Tarjeta Crédito
            </label>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Nombre de tarjeta"
            >
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Número de tarjeta"
            >
          </div>
        </div>
        <div class="row mt-3">
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
              style="height:39px;"
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
          <small class="sm ml-3">Fecha de expiración</small>
        </div>
        <div class="row mt-3">
          <div class="col-12 mb-2">
            <input
              type="text"
              class="form-control form-control-lg input-group"
              placeholder="Meses sin intereses"
            >
          </div>
          <small
            class="sm form-text ml-3"
          >Al dar click en pagar aceptas los Términos y Condiciones y nuestro
            Aviso de Privacidad</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerInfo",

  data() {
    return {
      customerName: "Jose Alfredo Hernández",
      phone: "555 55 55 555",
      email: "jose@gmail.com",
      address: "Jose Alfredo Hernández, Avenida San Miguel, Ciudad de México"
    };
  }
};
</script>

<style scoped>
.customerinfo {
  color: #123291;
}
input,
select {
  color: #123291;
  font-weight: bold;
  font-size: 12px;
}
input::-webkit-input-placeholder {
  color: #123291;
}
input:focus {
  color: #123291;
  font-weight: bold;
}

@media (max-width: 992px) {
  label {
    font-size: calc(0.5em + 1.1vw);
  }
  .sm {
    font-size: calc(0.3em + 1.1vw);
  }
}
</style>
