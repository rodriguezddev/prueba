<template>
  <div>
    <div
      v-for="(articles, index) in articlesChunk"
      :key="index"
      class="mt-4"
    >
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Article :article="articles[0]" />
          </div>
          <div class="carousel-item">
            <Article :article="articles[1]" />
          </div>
          <div class="carousel-item">
            <Article :article="articles[2]" />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <a
            data-slide="prev"
            href="#carouselExampleIndicators"
            role="button"
          >
            <span><i
              aria-hidden="true"
              class="fas fa-chevron-left"
            /></span>
            <span class="sr-only">Previous</span>
          </a>
          <ol class="carousel-indicators">
            <li
              class="active"
              data-slide-to="0"
              data-target="#carouselExampleIndicators"
            />
            <li
              data-slide-to="1"
              data-target="#carouselExampleIndicators"
            />
            <li
              data-slide-to="2"
              data-target="#carouselExampleIndicators"
            />
          </ol>

          <a
            data-slide="next"
            href="#carouselExampleIndicators"
            role="button"
          >
            <span><i
              aria-hidden="true"
              class="fas fa-chevron-right"
            /></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Article from "./Article.vue";

export default {
  name: "MobileFeedVue",

  components: {
    Article
  },

  props: ['articlesChunk']
}
</script>

<style scoped>
.carousel-indicators li {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #c06fce;
}

li.active {
    background-color: #123291;
}

.carousel-indicators {
    position: relative;
    right: 0;
    bottom: 0px;
    left: unset;
}

.fa-chevron-left,
.fa-chevron-right {
    color: #123291;
    font-size: 30px;
}
</style>
