<template>
  <div>
    <router-link
      :id="blok.id"
      :to="blok.route"
      class="
          btn btn-outline-secondary
          font-weight-bold
          px-5
          mt-1
          mb-1

          p-0
          py-2
        "
      style="border-radius: 24px !important; font-size: 15px; top: auto"
    >
      Regresar
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SbBackButton",
  props: ['blok']
}
</script>

<style scoped>

</style>
