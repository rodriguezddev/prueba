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
      <div class="emp col-md-8 px-5">
        <img
          alt="hombre"
          class="hola"
          src="../../assets/star.png"
        >
        <h3 class="text-center mb-5 mt-5">
          Tu asesor Bamba a sido activado
        </h3>
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
export default {
  name: "Freelance",

  data() {
    return {
      contact: {
        name: "",
        lastname1: "",
        lastname2: "",
        phone: "",
        birthday: ""
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
