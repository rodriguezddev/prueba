<template>
  <div
    id="carouselBlogIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner text-left px-3">
      <div class="carousel-item active mx-0">
        <div class="">
          <img
            src="../../assets/office.jpg"
            alt="plan"
            class="img-flud w-100 mb-4"
          >
          <p class="text-color">
            Educación Financiera
          </p>
          <h5 class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </h5>
          <p>03 de Junio, 2020</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <p>Leer más</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="">
          <img
            src="../../assets/office.jpg"
            alt="plan"
            class="img-flud w-100 mb-4"
          >
          <p class="text-color">
            Educación Financiera
          </p>
          <h5 class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </h5>
          <p>03 de Junio, 2020</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <p>Leer más</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="">
          <img
            src="../../assets/office.jpg"
            alt="plan"
            class="img-flud w-100 mb-4"
          >
          <p class="text-color">
            Educación Financiera
          </p>
          <h5 class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </h5>
          <p>03 de Junio, 2020</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <p>Leer más</p>
        </div>
      </div>
    </div>
    <ol class="carousel-indicators">
      <li
        data-target="#carouselBlogIndicators"
        data-slide-to="0"
        class="active mr-2"
      />
      <li
        data-slide-to="1"
        data-target="#carouselBlogIndicators"
      />
      <li
        data-target="#carouselBlogIndicators"
        data-slide-to="2"
        class="ml-2"
      />
    </ol>
    <a
      class="carousel-control-prev"
      href="#carouselBlogIndicators"
      role="button"
      data-slide="prev"
    >
      <span><i
        aria-hidden="true"
        class="fas fa-chevron-left"
      /></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselBlogIndicators"
      role="button"
      data-slide="next"
    >
      <span><i
        aria-hidden="true"
        class="fas fa-chevron-right"
      /></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "CarouselSuccess"
};
</script>

<style scoped>
.text-color {
  color: #ff7678;
}

.fa-chevron-left,
.fa-chevron-right {
  color: #123291;
  font-size: 25px;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #50b3e6;
}
li.active {
  background-color: #123291;
}
.carousel-indicators {
  left: 50%;
  top: 93.5%;
}
.carousel-control-prev {
  left: 50%;
}
.carousel-control-prev,
.carousel-control-next {
  bottom: -92%;
}
</style>
