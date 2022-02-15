<template>
  <div class="auth">
    <div class="row mx-0 mb-5">
      <div class="col-md-3 col-lg-4 px-3">
        <img
          class="img-fluid w-100"
          src="../../assets/img/mujer.png"
          alt="hombre"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
        >
      </div>
      <div class="col-md-6 col-lg-4 mt-5">
        <card-auth
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
        />
      </div>
      <div class="col-lg-4 px-3">
        <img
          class="img-fluid w-100 mt-2"
          src="../../assets/img/hombre.png"
          alt="hombre"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
        >
      </div>
    </div>
  </div>
</template>

<script>
import CardAuth from "./CardAuth.vue";

export default {
  name: "Login",
  components: {CardAuth}
};
</script>

<style scoped>
.auth {
  margin-top: 100px;
}
@media screen and (max-width: 992px) {
  img {
    display: none;
  }
}
</style>
