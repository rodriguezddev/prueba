<template>
  <div class="card text-center mx-0">
    <div class="card-body px-lg-0">
      <div class="row align-items-center">
        <div
          class="col-lg-6 mt-5 mb-md-5 ml-0 py-0"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <img
            :src="card.image"
            alt="plan"
            class="img-flud w-100 pl-0"
          >
        </div>
        <div
          class="col-lg-6 text-left mt-md-5 mb-5 order-md-last"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <p class="font-weight-bold text-color text-uppercase">
            Historias de éxito
          </p>
          <h3 class="mt-4 pr-lg-5 text-md-left text-justify">
            “{{ card.message }}”
          </h3>
          <p class="font-weight-bold mb-0 mt-4">
            {{ card.author }}
          </p>
          <p>{{ card.whois }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselSuccessCard",

  props: ["card"]
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: none;
  background-color: white;
}
.text-color {
  color: #ff7678;
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
