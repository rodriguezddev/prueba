<template>
  <div
    class="card mt-lg-5 mt-4 mx-4"
    type="button"
    :style="{ 'background-color': card.color }"
    @click="seguirRuta"
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
</template>

<script>
export default {
  name: "TypeCard",

  props: {
    employer: Object,
    freelance: Object,
    worker: Object,
    enterprise: Object,
    ambassador: Object
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
img {
  margin-top: 50px;
}
</style>
