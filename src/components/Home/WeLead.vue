<template>
  <div class="container">
    <div class="row align-items-center mx-0 py-0 w-100">
      <div class="col-lg-7 text-lg-center w-100">
        <div class="ml-2">
          <h2 class="pl-md-5 font-weight-bold pt-3">
            Arma tu Plan
          </h2>
          <p class="pl-md-5">
            Arma tu propio plan de protección seleccionando los productos que
            necesitas.
          </p>
          <router-link
            class="pl-md-5"
            to="/arma-tu-plan"
          >
            <button
              type="button"
              class="btn navy-background text-white font-weight-bold px-5 mt-3"
            >
              Arma tu plan
            </button>
          </router-link>
        </div>
      </div>
      <div class="col-lg-5 ml-0 px-5 mt-0">
        <img
          src="../../assets/img/sliders-brokers/weleed.png"
          alt="plan"
          class="img-fluid my-3"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeLead"
};
</script>

<style scoped>
.row {
  background-color: #dcf0fb;
  margin-top: 100px;
  border-radius: 10px;
}
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
h1 {
  font-size: 3.1rem;
  font-weight: bold;
}

p {
  font-size: 1.5rem;
}
</style>
