<template>
  <div
    class="mb-5 p-5 container-md"
    style="border:solid #123291 3px"
  >
    <h1 class="font-weight-bold mt-5">
      ¿Necesitas ayuda?
    </h1>
    <h5 class="mt-3 px-3">
      Escríbenos y un asesor Bamba® se pondrá en contacto contigo
    </h5>
    <router-link to="/contacto">
      <button
        type="button"
        class="btn navy-background text-white font-weight-bold mt-4 mb-4 px-5"
        @click=" trackContacto()"
      >
        Contactar
      </button>
    </router-link>

    <h5
      v-if="phone"
      class="px-3"
    >
      O llama al
      <a
        :href="
          `https://api.whatsapp.com/send?phone=52${phone.replace(
            /\s/g,
            ''
          )}&amp;text=¡Hola!`
        "
        target="_blank"
      ><i class="fab fa-whatsapp ml-2" /> {{ phone }}</a>
    </h5>
  </div>
</template>

<script>
export default {
  name: "Help",
  props: ["phone"],

  data() {
    return {
      routes: []
    };
  },
  methods: {
    trackContacto() {
      this.$ga.event('Contactar', 'Click', 'nuestros planes')
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
</style>
