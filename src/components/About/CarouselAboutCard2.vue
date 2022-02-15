<template>
  <div class="card text-center">
    <div class="card-body px-lg-0">
      <div class="row align-items-center">
        <div class="col-lg-7 mt-md-5 mb-md-5 ml-0 px-5 py-0">
          <img
            src="../../assets/BAM_Emprendedor.svg"
            alt="plan"
            class="img-flud w-100 pl-0"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
          >
        </div>
        <div class="col-lg-5 text-lg-left mt-3 mt-md-5 mb-5 pl-5 pr-5">
          <h2
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            Porqué confiar en nosotros
          </h2>
          <p
            class="mt-4 pr-lg-5"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            Nuestro modelo único de integración de soluciones y servicios de
            instituciones sólidas nos permite crear un motor de inclusión y
            empoderamiento económico para todos los mexicanos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselAboutCard2"
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: none;
  background-color: #fff8db;
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
