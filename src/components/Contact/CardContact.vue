<template>
  <router-link :to="card.path">
    <div
      class="card mt-lg-5 mt-4 mx-4"
      :style="{ 'background-color': card.color }"
    >
      <div class="card-body">
        <img
          class="mt-4"
          :src="card.url"
          alt="notes"
          :style="{ width: card.width }"
        >
        <p class="mt-4 mb-0">
          {{ card.iam }}
        </p>
        <h5 class="mb-5">
          {{ card.name }}
        </h5>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardExplora",

  props: {
    card: Object
  }
};
</script>

<style scoped>
.card {
  border-radius: 8px;
  border: none;
  -webkit-box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  height: 260px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card:hover {
  border-radius: 8px;
  border: none;
  -webkit-box-shadow: -2px 3px 25px -4px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: -2px 3px 25px -4px rgba(0, 0, 0, 0.7);
  box-shadow: -2px 3px 25px -4px rgba(0, 0, 0, 0.7);
  height: 260px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
img {
  margin-top: 50px;
}
a {
  text-decoration: none;
  color: #123291;
}
</style>
