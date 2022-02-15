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
        <h3 class="text-center mb-5">
          Activa tu asesor Bamba gratis
        </h3>
        <form @submit.prevent="submit">
          <div class="card">
            <div class="row mx-2 mt-3">
              <div class="col-lg-4 col-md-12 mt-2">
                <input
                  v-model.trim="$v.name.$model"
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  :class="{ 'is-invalid': $v.name.$error }"
                >
                <p
                  v-if="$v.name.$error"
                  class="text-danger"
                >
                  Campo requerido
                </p>
              </div>
              <div class="col-lg-4 col-md-12 mt-2">
                <input
                  v-model.trim="$v.lastname1.$model"
                  type="text"
                  class="form-control"
                  placeholder="Apellido Paterno"
                  :class="{ 'is-invalid': $v.lastname1.$error }"
                >
                <p
                  v-if="$v.lastname1.$error"
                  class="text-danger"
                >
                  Campo requerido
                </p>
              </div>
              <div class="col-lg-4 col-md-12 mt-2">
                <input
                  v-model.trim="$v.lastname2.$model"
                  type="text"
                  class="form-control"
                  placeholder="Apellido Materno"
                  :class="{ 'is-invalid': $v.lastname2.$error }"
                >
                <p
                  v-if="$v.lastname2.$error"
                  class="text-danger"
                >
                  Campo requerido
                </p>
              </div>
            </div>
            <div class="row mx-2 mb-3">
              <div class="col-lg-4 col-md-12 mt-2">
                <input
                  v-model.trim="$v.birth.$model"
                  type="text"
                  class="form-control"
                  placeholder="Fecha de Nacimiento"
                  :class="{ 'is-invalid': $v.birth.$error }"
                >
                <p
                  v-if="$v.birth.$error"
                  class="text-danger"
                >
                  Campo requerido
                </p>
              </div>
              <div class="col-lg-4 col-md-12 mt-2">
                <input
                  v-model.trim="$v.phone.$model"
                  type="text"
                  class="form-control"
                  placeholder="Número celular"
                  :class="{ 'is-invalid': $v.phone.$error }"
                >
                <p
                  v-if="$v.phone.$error"
                  class="text-danger"
                >
                  Campo requerido
                </p>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn navy-background text-white font-weight-bold px-5 mt-5 mb-5"
            >
              Activar
            </button>
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
import {required} from "vuelidate/lib/validators";

export default {
  name: "Freelance",

  data() {
    return {
      name: "",
      lastname1: "",
      lastname2: "",
      phone: "",
      birth: ""
    };
  },
  validations: {
    name: { required },
    lastname1: { required },
    lastname2: { required },
    phone: { required },
    birth: { required }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {

      } else {

      }
    }
  }
};
</script>

<style scoped>
.Employer {
  color: #123291;
}
.emp {
  margin-top: 120px;
  margin-bottom: 50px;
}
.fa-arrow-left {
  color: #50b3e6;
}
a {
  color: #123291;
  text-decoration: none;
}
button {
  border-radius: 25px;
}
.card {
  background-color: #dcf0fb;
  border: none;
  border-radius: 10px;
}
input,
select {
  border-color: #a0d6f1;
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
