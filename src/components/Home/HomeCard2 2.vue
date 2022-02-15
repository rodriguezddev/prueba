<template>
  <div
    class="card text-center mt-5 mb-5"
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="800"
  >
    <div class="card-body px-lg-0">
      <div class="row align-items-center">
        <!-- <div class="col-lg-7 mt-5 mb-5 ml-0 px-5 py-0">
          <img
            src="../../../img/embajador.png"
            alt="plan"
            class="img-flud w-100 pl-0"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="800"
          />
        </div> -->
        <div class="col-12 text-center mt-5 mb-5 pl-5 pr-5">
          <h1
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            class="font-weight-bold"
          >
            Conviértete en Embajador/a, genera impacto social y obtén un ingreso
            extra.
          </h1>
          <a href="">
            <button
              type="button"
              class="btn purple-background text-white font-weight-bold px-5 mt-5"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="800"
            >
              Descubrir más
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import AppService from "./../../services/app"; */

export default {
  name: "HomeCard2"

  /* methods: {
    goToProfile() {
      let url = `${AppService.getRoute("store2.storev2.bamba-profiles")}`;
      url = url.replace("/{profile}", "");
      return `${url}/embajadores`;
    }
  } */
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
.card {
  border-radius: 10px;
  border: none;
  background-color: #f2e3f6;
}
.purple-background {
  background-color: #c06fce;
  border: none;
}

@media screen and (min-width: 768px) {
  .card {
    margin-left: 150px;
    margin-right: 150px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
