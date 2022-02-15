<template>
  <router-link :to="card.path">
    <div
      :style="{ 'background-color': card.color }"
      class="card mt-4"
    >
      <div class="card-body">
        <img
          :src="card.url"
          :style="{ width: card.width }"
          alt="notes"
        >
        <h5 class="mt-4 mb-5">
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
  border-radius: 10px;
  border: none;
  -webkit-box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  height: 250px;
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
  height: 250px;
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
