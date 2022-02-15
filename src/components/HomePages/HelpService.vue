<template>
  <div class="my-5 row flex-column align-items-center mx-0">
    <h2 class="font-weight-bold text-center">
      ¿Necesitas ayuda?
    </h2>
    <p class="text-center">
      Prueba nuestra Asistencia Bamba y resuelve cualquier duda o emergencia a través de Whatsapp
    </p>
    <router-link
      class="col-12 px-0"
      to="/contacto"
    >
      <button
        type="button"
        class="
          btn btn-secondary
          font-weight-bold
           px-5
          mt-3
          w-100
          p-0
          py-2
        "
        style="border-radius: 24px !important; font-size: 15px;"
        @click=" trackContacto()"
        
      >
        Activar tu asistencia Bamba
      </button>
    </router-link>

    <span
      v-if="phone"
      class=" text-center pt-2 font-weight-bold text-decoration"
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
    </span>
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
