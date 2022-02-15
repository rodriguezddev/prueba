<template>
  <div class="card text-center mx-0">
    <div class="card-body px-lg-0">
      <div class="row align-items-center">
        <div class="col-lg-7 mt-5 mb-5 ml-0 px-5 py-0">
          <img
            :src="card.image"
            alt="plan"
            class="img-flud w-100 pl-0"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
          >
        </div>
        <div class="col-lg-5 text-lg-left mt-5 mb-5 pl-5 pr-5">
          <h2
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            {{ card.title }}
          </h2>
          <p
            class="mt-4 pr-lg-5 text-md-center text-justify"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            {{ card.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselAboutCard",

  props: ["card"]
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: none;
  background-color: #fdeeba;
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
