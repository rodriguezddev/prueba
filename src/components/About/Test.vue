<template>
  <div
    class="About"
    style="margin-top: 100px"
  >
    <h1>Este es mi color: {{ color }}</h1>
  </div>
</template>

<script>
export default {
  name: "Name",
  data() {
    return {
      color: "rojo"
    };
  },
  mounted() {
    this.color = this.$route.params.color;
  }
};
</script>
