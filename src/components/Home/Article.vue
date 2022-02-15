<template>
  <div>
    <img
      :src="image"
      class="img-fluid mt-3"
    >

    <p class="mt-2 mb-0 text-left font-weight-bold category">
      {{ article.categories[0] }}
    </p>

    <h4 class="text-left mt-2 font-weight-bold">
      {{ article.title }}
    </h4>

    <p class="text-left">
      {{ myMoment(article.date).format('MMMM Do YYYY') }}
    </p>

    <p class="text-justify">
      {{ article.contentSnippet }}
    </p>

    <a
      :href="article.link"
      target="_blank"
    >
      <p class="text-left text-underline">Leer más</p>
    </a>
  </div>
</template>

<script>
const xpath = require("xpath");
const dom = require("xmldom").DOMParser;
import moment from "moment";

moment.locale("es-mx");

export default {
  name: "Article",
  props: ["article"],

  data() {
    return {
      image: '',
      myMoment: moment,
    }
  },

  mounted() {
    this.formatData();
  },

  methods: {
    formatData() {
      const xml = this.article.content;
      const doc = new window.DOMParser().parseFromString(xml, "application/xml")
      const imageNode = doc.evaluate("//*[contains(@class, 'hs-featured-image-link')][1]//img//@src", doc, null, XPathResult.STRING_TYPE, null)
      this.image = imageNode.stringValue;
    }
  }
};
</script>

<style scoped>
.category {
  color: #ff7678;
}

.text-underline {
    color: #133190;
    text-decoration: underline;
}
</style>
