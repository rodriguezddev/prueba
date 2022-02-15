<template>
  <div class="MyInfo px-1 mb-5 text-left">
    <div class="row mx-0">
      <div class="col-md-6">
        <div class="container ml-md-5">
          <h1 class="text-sm-left font-weight-bold mb-3">
            Mis Datos
          </h1>
          <router-link
            to="/explora"
          >
            <small
              class="font-weight-bold"
            ><i class="fas fa-arrow-left mr-2 red-color" />Regresar</small>
          </router-link>
          <div class="ml-3 mt-5">
            <div class="row mt-4">
              <div class="col-md-6 pl-0">
                <small
                  class="text-color font-weight-bold"
                >Tipo de Perfil:</small>
                <p class="font-weight-bold">
                  {{ profile }}
                </p>
              </div>
              <div class="col-md-6 pl-0">
                <small class="text-color font-weight-bold">Nombre:</small>
                <p class="font-weight-bold">
                  {{ customerName }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pl-0">
                <small class="text-color font-weight-bold">Celular:</small>
                <p class="font-weight-bold">
                  {{ phone }}
                </p>
              </div>
              <div class="col-md-6 pl-0">
                <small
                  class="text-color font-weight-bold"
                >Correo Electrónico:</small>
                <p class="font-weight-bold">
                  {{ email }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-8 pl-0">
                <small class="text-color font-weight-bold">Dirección:</small>
                <p class="font-weight-bold">
                  {{ address }}
                </p>
              </div>
            </div>
          </div>
          <div class="row  mt-5">
            <div class="col-lg-6 text-center text-md-left">
              <router-link
                to="/mis-datos-editar"
                data-toggle="modal"
                class="btn green-background btn-block text-blue font-weight-bold mt-3 trigger-btn"
              >
                Editar mis Datos
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 px-5">
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
  name: "MyInfo",

  data() {
    return {
      profile: "Empleador",
      customerName: "Jose Alfredo Hernández",
      phone: "555 55 55 555",
      email: "jose@gmail.com",
      address: "Jose Alfredo Hernández, Avenida San Miguel, Ciudad de México"
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
@media screen and (max-width: 992px) {
  img {
    display: none;
  }
}
</style>
