<template>
  <div class="bg-primary row p-3">
    <div class="About d-flex flex-column aling-items-start container-xl">
      <svg
        class="mb-4"
        width="36"
        height="27"
        viewBox="0 0 36 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.3401L3.66001 13.0001L0.820007 15.8201L12 27.0001L36 3.00005L33.18 0.180054L12 21.3401Z"
          fill="white"
        />
      </svg>
      <div>
        <h2 class="text-white font-weight-bold">
          ¡Tu activación se realizó con éxito!
        </h2>
        <p class="text-white">
          En 48 hrs podrás comenzar a utilizar los beneficios de tu plan de protección. En breve recibirás un mensaje de
          Whatsapp con más detalles, en caso de no recibirlo puedes contactarnos directamente:
        </p>
      </div>
      <div class="row mx-0 justify-content-start">
        <a
          id="Freemium-Asistencia"
          class="text-white font-weight-bold"
          href="https://bit.ly/asesorbamba"
          style="border-bottom:solid #fff 2px"
        >Asistencia Bamba</a>
        <p class="text-white mt-3">
          Enviamos tu certificado y datos de compra al correo {{ customer.email }}, podría tardar hasta un máximo de 72
          hrs en llegar, por favor revisa en correos no deseados ya que muchas veces llega a esta bandeja.
        </p>
      </div>
    </div>
    <div class="container-xl d-flex justify-content-start">
      <a
              id="Freemium-Planes"
              class="btn bg-light font-weight-bold w-100 my-4 col-12 px-0 col-md-3 "
              href="/"
              style="border-radius: 24px !important"
      >Conocer más planes Bamba</a>
    </div>

  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "ConfirmationFreemium",
  computed: {
    ...mapState(["cart", "customer"]),
  },
  created() {

    if (
            window.location.pathname === "/confirmacion-de-compra" ||
            window.location.pathname === "/servicios-gratuitos" ||
            window.location.pathname === "/activado"
    ) {
      document.getElementById("content").classList.remove("container-xl")
    } else {
      document.getElementById("content").classList.add("container-xl")
    }
    if (this.cart == null) {
      this.$router.push("/servicios-gratuitos");


      }
  },
}
</script>

<style>
.About {
  margin-top: 100px;
}

</style>
