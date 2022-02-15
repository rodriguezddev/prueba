<template>
  <div class="MyInfo px-1 mb-5 text-left">
    <div class="row mx-0">
      <div class="col-12 col-lg-6 pl-md-5">
        <h1 class="text-sm-left font-weight-bold mb-3">
          Editar Datos
        </h1>
        <router-link
          to="/mis-datos"
        >
          <small
            class="font-weight-bold"
          ><i class="fas fa-arrow-left mr-2 red-color" />Regresar</small>
        </router-link>
        <form @submit.prevent="processForm">
          <div class="form-row mt-4">
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="customer.profile"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Tipo de Perfil"
              >
            </div>
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="customer.name"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Nombre:"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="customer.lastname1"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Apellido Paterno:"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="customer.lastname2"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Apellido Materno:"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="customer.phone"
                type="tel"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Celular:"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="customer.email"
                type="email"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Correo Electrónico:"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="customer.address"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Dirección:"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="customer.city"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Ciudad:"
              >
            </div>
            <div class="col-12 col-lg-6">
              <button
                class="btn green-background mt-5 text-blue font-weight-bold btn-block"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-6 px-5">
        <img
          class="img-fluid w-100"
          src="../../assets/info1.png"
          alt="info"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditInfo",

  data() {
    return {
      customer: {
        profile: "",
        name: "",
        lastname1: "",
        lastname2: "",
        email: "",
        phone: "",
        city: "",
        address: ""
      }
    };
  },

  methods: {
    processForm() {

    }
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
input {
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
input:focus {
  color: #123291;
  font-size: 16px;
  font-weight: bold;
}
@media screen and (max-width: 992px) {
  img {
    display: none;
  }
}
</style>
