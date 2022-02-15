<template>
  <div>
    <component
      :is="story.content.component"
      :blok="story.content"
    />
  </div>
</template>

<script>
import Page from '@/components/Storyblok/Page';

export default {
  name: 'CategoryDescription',
  components: {Page},
  data () {
    return {
      token: process.env.VUE_APP_STORYBLOK,
      cacheVersion: process.env.VUE_APP_STORYBLOK_CACHE_VERSION,
      storeApi: null,
      msg: 'Welcome to Your Vue.js App',
      story: {
        content: {
          body: []
        }
      }
    }
  },
  created () {
    this.storyapi = new this.$StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })
    this.getStory('descripcion/' + this.$route.params.slug, 'published')
  },
  methods: {
    getStory(slug, version) {
      this.storyapi.get('cdn/stories/' + slug, {
        version: version,
        cv: this.cacheVersion
      })
          .then((response) => {
            this.story = response.data.story
          })
          .catch((error) => {
          })
    }
  }
}
</script>
<style lang="scss">
  $breakpoint-tablet: 768px;
  @media (max-width: $breakpoint-tablet) {
    .teaser__inner{

      p{
        p{
          width: 100%!important;
        }
      }
      img{
        display: none;
      }
    }
  }
  .teaser__inner{
    h1{
      font-size:24px;
      font-weight: bold;
      margin-bottom: 24px;
      text-align: left;
    }
    p{
      img{
        position: absolute;
        top: 6rem;
        right: 15%;
        flex: 0 0 50%;
        max-width: 50%;
      }
      h2{
        margin-top:32px;
        margin-bottom: 16px;
      }
      ul{
        padding: 0;
        margin: auto 16px;
      }

    }
  }
</style>
