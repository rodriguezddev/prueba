<template>
  <div v-if="articlesChunk.length">
    <div class="just-mobile">
      <mobile-feed :articles-chunk="articlesChunk" />
    </div>

    <div
      v-for="(articles, index) in articlesChunk"
      :key="index"
      class="just-desktop mt-4"
    >
      <div class="row">
        <div class="col-md-5">
          <Article :article="articles[0]" />
        </div>

        <div class="col-md-7">
          <SmallArticle
            :article="articles[1]"
            class="mb-3"
          />

          <SmallArticle :article="articles[2]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Article from "./Article.vue";
import SmallArticle from "./SmallArticle.vue";
import MobileFeed from "./MobileFeed.vue";

const _ = require("lodash");

export default {
  name: "Feed",
  components: {
    Article,
    SmallArticle,
    MobileFeed
  },
  props: {
    feedUrl: String,
    limit: Number,
    loadMore: Boolean
  },
  data() {
    return {
      articlesChunk: [],
      loading: true,
      error: "",
      feed: {}
    };
  },
};
</script>

<style scoped>
.just-mobile {
  display: none;
}

.just-desktop {
  display: block;
}

@media (max-width: 991px) {
  .just-mobile {
    display: block;
  }

  .just-desktop {
    display: none;
  }
}
</style>
