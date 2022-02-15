<template>
  <div class="Employer px-1">
    <div class="row mx-0">
      <div class="emp col-md-2">
        <img
          class="hola img-fluid w-100"
          src="../../assets/hola1.png"
          alt="hombre"
        >
      </div>
      <div class="emp col-md-8 text-left px-5">
        <h1 class="text-center">
          Empleador/a
        </h1>
        <router-link
          to="/contacto"
        >
          <small
            class="font-weight-bold text-left"
          ><i class="fas fa-arrow-left mr-2" />Regresar</small>
        </router-link>
        <form @submit.prevent="processForm">
          <div class="form-row mt-4">
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="contact.name"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Nombre:*"
              >
            </div>
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="contact.lastname"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Apellidos:*"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="contact.phone"
                type="tel"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Celular:*"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="contact.email"
                type="email"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Correo Electrónico:*"
              >
            </div>
            <div class="col-12 col-md-6 mt-4">
              <select
                class="form-control form-control-lg"
                type="text"
              >
                <option selected>
                  ¿Qué te interesa conocer?*
                </option>
                <option>Información general</option>
                <option>Plan Básico</option>
                <option>Plan Medio</option>
                <option>Plan Alto</option>
                <option>Plan Premium</option>
                <option>Planes familiares</option>
                <option>Pago de Nómina/IMSS</option>
                <option>Cómo hacer mi propio plan</option>
              </select>
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="contact.employers"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Número de empleados:*"
              >
            </div>
            <div class="col-12 mt-4">
              <div class="form-group">
                <textarea
                  id="exampleFormControlTextarea1"
                  v-model.trim="contact.comments"
                  class="form-control"
                  rows="3"
                  style="border-color: #b9de9d"
                  placeholder="Comentarios:"
                />
              </div>
              <small>*Datos obligatorios</small>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="form-check">
                <input
                  id="exampleRadios1"
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  value="option1"
                >
                <label
                  class="form-check-label"
                  for="exampleRadios1"
                  style="font-size: 12px;"
                >
                  He leído y acepto
                  <span class="font-weight-bold">Términos y Condiciones.</span>
                </label>
              </div>
              <div class="form-check">
                <input
                  id="exampleRadios1"
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  value="option2"
                >
                <label
                  class="form-check-label"
                  for="exampleRadios1"
                  style="font-size: 12px;"
                >
                  Deseo unirme a la
                  <span class="font-weight-bold">newsletter.</span>
                </label>
              </div>
            </div>
            <div class="col-12 col-md-4 text-center text-lg-right mt-4 mt-md-0">
              <button
                href="#ModalContact"
                data-toggle="modal"
                class="btn text-blue font-weight-bold btn-block trigger-btn"
                style="background-color: #7FC34A"
              >
                Enviar
              </button>
              <modal-contact />
            </div>
          </div>
        </form>
      </div>
      <div class="emp col-md-2">
        <img
          class="hola img-fluid w-100"
          src="../../assets/hola2.png"
          alt="hombre"
        >
      </div>
    </div>
  </div>
</template>

<script>
import ModalContact from "./ModalContact.vue";

export default {
  name: "Employer",
  components: {ModalContact},

  data() {
    return {
      contact: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        interest: "",
        employers: "",
        comments: ""
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
.Employer {
  color: #123291;
  background-color: #e6f3db;
}
input,
select {
  border-color: #b9de9d;
}
.emp {
  margin-top: 120px;
  margin-bottom: 50px;
}
.fa-arrow-left {
  color: #7fc34a;
}
a {
  color: #123291;
  text-decoration: none;
}
input,
select,
textarea {
  background-color: transparent;
  color: #123291;
  font-weight: bold;
  font-size: 16px;
}
.text-blue {
  color: #123291;
}
textarea::-webkit-input-placeholder,
input::-webkit-input-placeholder,
select::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 16px;
  background-color: transparent;
}
textarea:focus,
input:focus,
select:focus {
  color: #123291;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
}
button {
  border: none;
}

@media screen and (max-width: 768px) {
  .emp {
    margin-top: 40px;
  }
}
@media screen and (max-width: 992px) {
  .hola {
    display: none;
  }
}
</style>
