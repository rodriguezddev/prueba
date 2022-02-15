<template>
  <div
    class="card text-center mt-5"
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="800"
  >
    <div class="card-body px-lg-0">
      <div class="row align-items-center">
        <div class="col-lg-7 mt-2 mt-md-5 mb-2 mb-md-5 ml-0 px-5 py-0">
          <img
            src="../../assets/BAM_Emprendedor.svg"
            alt="plan"
            class="img-flud w-100 pl-0"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="800"
          >
        </div>
        <div class="col-lg-5 text-lg-left mt-2 mt-md-5 mb-2 mb-md-5 pl-5 pr-5">
          <h2
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            La paz mental que tanto necesitan tu y todos los tuyos.
          </h2>
          <button
            type="button"
            class="btn red-background text-white font-weight-bold px-5 mt-2 mt-md-5"
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            Explorar nuestros planes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard1"
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: none;
  background-color: #ffe4e5;
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
