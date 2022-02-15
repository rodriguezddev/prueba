<template>
    <div class=" row p-3">
        <div class="About d-flex flex-column aling-items-start container-xl">
            <svg
                    class="mb-4"
                    fill="none"
                    height="27"
                    viewBox="0 0 36 27"
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
            >
                <path
                        d="M12 21.3401L3.66001 13.0001L0.820007 15.8201L12 27.0001L36 3.00005L33.18 0.180054L12 21.3401Z"
                        class="check-fill"
                />
            </svg>
            <div>
                <h2 class="text-primary font-weight-bold">
                    ¡Tu pago se realizó con éxito!
                </h2>
                <div class="w-100 row mx-0 justify-content-between mt-3">
                    <p class="text-warning font-weight-bold">
                        Folio
                    </p>
                    <p class="text-warning font-weight-bold">
                        {{order.orderData.id}}
                    </p>
                </div>
                <p class="text-dark">
                    Enviamos la confirmación y datos de tu compra, información de los beneficios que adquiriste y como a usarlos a {{order.orderData.email}}
                </p>


                <p class="text-dark">
                    En caso de tener alguna duda puedes llamar al 800 220 9000.
                </p>
            </div>
            <div class="row mx-0 justify-content-start">
                <a
                        class="text-white font-weight-bold"
                        href="https://bit.ly/asesorbamba"
                        id="Freemium-Asistencia"
                        style="border-bottom:solid #fff 2px"
                >Asistencia Bamba</a>
            </div>
            <div class="row mx-0 justify-content-start">
                <a
                        class="btn btn-primary font-weight-bold col-12 px-0 col-md-3 my-4 text-white"
                        href="/"
                        id="Freemium-Planes"
                        style="border-radius: 24px !important"
                >Ir a inicio</a>
            </div>

        </div>


    </div>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        name: "ConfirmationFreemium",

        computed: {
            ...mapState(["order"]),
        },
        mounted() {
            if (this.order === null) {
                this.$router.push("/")
            }
        },
        created() {
      if (
          window.location.pathname === "/confirmacion-de-compra" ||
          window.location.pathname === "/servicios-gratuitos"
      ) {
        document.getElementById("content").classList.remove("container-xl")
      } else {
        document.getElementById("content").classList.add("container-xl")
      }
    }
    }
</script>

<style>
    .About {
        margin-top: 100px;
    }

</style>
