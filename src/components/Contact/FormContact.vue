<template>
  <form @submit.prevent="processForm">
    <div class="form-row mt-4">
      <div class="col-12 col-md-6 mt-3">
        <input
          v-model.trim="contact.name"
          type="text"
          class="form-control form-control-lg input-group input-group-lg"
          placeholder="Nombre:*"
          :style="{ 'border-color': bgcolor.border }"
        >
      </div>
      <div class="col-12 col-md-6 mt-3">
        <input
          v-model.trim="contact.lastname"
          type="text"
          class="form-control form-control-lg input-group input-group-lg"
          placeholder="Apellidos:*"
          :style="{ 'border-color': bgcolor.border }"
        >
      </div>
      <div class="col-12 col-md-6 mt-4">
        <input
          v-model.trim="contact.phone"
          type="tel"
          class="form-control form-control-lg input-group input-group-lg"
          placeholder="Celular:*"
          :style="{ 'border-color': bgcolor.border }"
        >
      </div>
      <div class="col-12 col-md-6 mt-4">
        <input
          v-model.trim="contact.email"
          type="email"
          class="form-control form-control-lg input-group input-group-lg"
          placeholder="Correo Electrónico:*"
          :style="{ 'border-color': bgcolor.border }"
        >
      </div>
      <div class="col-12 col-md-6 mt-4">
        <input
          v-model.trim="contact.about"
          type="text"
          class="form-control form-control-lg input-group input-group-lg"
          placeholder="¿Qué te interesa conocer?*"
          :style="{ 'border-color': bgcolor.border }"
        >
      </div>
      <div class="col-12 col-md-6 mt-4">
        <input
          v-model.trim="contact.employers"
          type="text"
          class="form-control form-control-lg input-group input-group-lg"
          placeholder="Número de empleados:*"
          :style="{ 'border-color': bgcolor.border }"
        >
      </div>
      <div class="col-12 mt-4">
        <div class="form-group">
          <textarea
            id="exampleFormControlTextarea1"
            v-model.trim="contact.comments"
            class="form-control"
            rows="3"
            :style="{ 'border-color': bgcolor.border }"
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
          :style="{ 'background-color': bgcolor.bg }"
        >
          Enviar
        </button>
        <modal-contact />
      </div>
    </div>
  </form>
</template>

<script>
import ModalContact from "./ModalContact.vue";

export default {
  name: "Contact",
  components: {ModalContact},

  props: {
    bgcolor: Object
  },

  data() {
    return {
      contact: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        about: "",
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
input,
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
input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 16px;
  background-color: transparent;
}
textarea:focus,
input:focus {
  color: #123291;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
}
button {
  border: none;
}
</style>
