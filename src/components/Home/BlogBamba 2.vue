<template>
  <div class="blog container-fluid">
    <h1 class="mt-5">
      Blog Bamba®
    </h1>

    <div class="vue-rss-feed mt-4">
      <Feed
        :feed-url="feedUrl"
        :limit="limit"
      />
    </div>
  </div>
</template>

<script>
import Feed from "./Feed.vue";

export default {
  name: "BlogBamba",

  components: {
    Feed
  },

  data() {
    return {
      feedUrl: "https://blog.vivebamba.com/rss.xml",
      limit: 3
    };
  }
};
</script>

<style scoped>
.text-color {
  color: #ff7678;
}

h1 {
  font-weight: bold;
}

.blog {
  margin-top: 100px;
  margin-bottom: 100px;
  padding-left: 3rem;
  padding-right: 3rem;
}

@media (min-width: 767.98px) {
  .blog {
    padding-left: 7rem;
    padding-right: 7rem;
  }
}
</style>
