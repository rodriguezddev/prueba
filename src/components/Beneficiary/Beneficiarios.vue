<template>
  <div class="Beneficiario px-1 mb-5 text-left">
    <div class="container">
      <h1 class="text-left font-weight-bold mb-3">
        Beneficiarios
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
          <beneficiarios-card />
        </div>
      </div>
      <div class="row text-center text-md-right mt-5">
        <div class="col-12">
          <a
            href="#AddBeneficiary"
            data-toggle="modal"
            class="btn navy-background text-white font-weight-bold mt-3 trigger-btn"
          >
            Agregar Beneficiario
          </a>
          <add-beneficiary />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddBeneficiary from "./AddBeneficiary.vue";
import BeneficiariosCard from "./BeneficiariosCard.vue";

export default {
  name: "Beneficiarios",
  components: {BeneficiariosCard, AddBeneficiary},

  data() {
    return {
      customer: {
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
.Beneficiario {
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

.navy-background {
  border: none;
}
button {
  margin-bottom: 30px;
}
</style>
