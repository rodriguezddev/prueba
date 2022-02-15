<template>
  <div class="About">
    <div class=" d-flex flex-column flex-md-row align-items-start container-xl">
      <div class="col-12 col-md-5">
        <p class="text-center text-md-left d-md-none d-flex">
          En Bamba estamos comprometidos en cuidar la vida y salud de los
          mexicanos
        </p>
        <h2 class="text-center text-md-left font-weight-bold font-size-medium">
          ¡PRUÉBANOS!<br>
          <span class="text-alternative">Disfruta 1 AÑO</span> de
          protección para tu salud<br>
          ¡SIN COSTO!
        </h2>
        <p class="text-center text-md-left d-md-flex d-none">
          En Bamba estamos comprometidos en cuidar la vida<br/> y salud de los
          mexicanos
        </p>
        <a href="#option" class="w-100 row justify-content-start mx-0">
          <button
                  id="Prueba-ahora"
                  class="btn btn-alternative font-weight-bold w-100 mt-3 col-12 px-0 col-md-10"
                  style="border-radius: 24px !important"
                  @click="setEvent('Obtener ahora', 'Obtener ahora', 'Obtener ahora')"
          >
            Pruébalo ahora
          </button>
        </a>
        <p class="text-center text-md-left mt-4">
          <span class="font-weight-bold">Sin trucos, ni letras chiquitas,</span><br>
          solo queremos proteger tu salud y economía
        </p>
      </div>
      <img
              alt=""
              class=" d-md-flex d-none col-md-7 px-0 mt-3"
              src="@/assets/freemium_mobile.svg"
      >
    </div>

    <div>
      <img
        alt=""
        class="w-100 d-md-none d-flex"
        src="@/assets/freemium_mobile.svg"
      >
      <div
        id="option"
        class="bg-primary-30 row py-5 pb-0 flex-column flex-md-row justify-content-center"
      >
        <div class="col-md-5 px-0 ">
          <div class="container-xl">
            <h3 class="font-weight-bold text-center w-100">
              Tu plan de protección incluye:
            </h3>
            <p class="text-center">
              Orientación médica <br>
              telefónica 24/7<br>
              <span class="font-weight-bold font-size-medium">+</span> <br>
              Asistencia Bamba<br>
              Apoyo y guía para solucionar<br>
              cualquier imprevisto <br>
              <span class="font-weight-bold font-size-medium">+</span> <br>
              Elige uno de los siguientes productos
            </p>
          </div>
          <div class="container-xl">
            <div class="text-decoration p-3">
              <label class="row mx-0 align-items-center">
                <input
                        v-model.trim="$v.sku_bamba.$model"
                        type="radio"
                        class="option-input radio"
                        name="example"
                        checked
                        value="FREEMIUM0521ACCIDENTES"
                        :class="{ 'is-invalid': $v.sku_bamba.$error }"
                        @click="
                  setEvent(
                    'Seguro de accidentes',
                    'Seguro de accidentes',
                    'Seguro de accidentes'
                  )
                "
                >
                <p class="font-weight-bold text-left col-9 mb-0 px-2">
                  Seguro de accidentes, cobertura $10,000 MXN
                </p>
              </label>
              <div
                      class="
                row
                justify-content-start
                align-items-center
                ml-5
                mr-0
                mt-2
              "
              />
            </div>

            <div class="text-decoration p-3">
              <label class="row mx-0 align-items-center">
                <input
                        v-model.trim="$v.sku_bamba.$model"
                        type="radio"
                        class="option-input radio"
                        name="example"
                        value="FREEMIUM0521VIDA"
                        :class="{ 'is-invalid': $v.sku_bamba.$error }"
                        checked
                        @click="
                  setEvent('Seguro de vida', 'Seguro de vida', 'Seguro de vida')
                "
                >
                <p class="font-weight-bold text-left col-9 mb-0 px-2">
                  Seguro de vida, cobertura $10,000 MXN
                </p>
              </label>
              <div
                      class="
                row
                justify-content-start
                align-items-center
                ml-5
                mr-0
                mt-2
              "
              />
            </div>

            <div class="text-decoration p-3">
              <label class="row mx-0 align-items-center">
                <input
                        v-model.trim="$v.sku_bamba.$model"
                        type="radio"
                        class="option-input radio"
                        name="example"
                        value="FREEMIUM0521ESPECIALISTA"
                        :class="{ 'is-invalid': $v.sku_bamba.$error }"
                        checked
                        @click="
                  setEvent(
                    'consulta con médico especialista',
                    'consulta con médico especialista',
                    'consulta con médico especialista'
                  )
                "
                >
                <p class="font-weight-bold text-left col-9 mb-0 px-2">
                  Una consulta con médico especialista
                </p>
              </label>
              <div
                      class="
                row
                justify-content-start
                align-items-center
                ml-5
                mr-0
                mt-2
              "
              />
            </div>
            <p
                    v-if="validate"
                    class="text-danger text-center mt-3"
            >
              Campo requerido
            </p>
          </div>
        </div>

      </div>
    </div>

    <div>
      <p class="font-size-small mt-3 text-left text-md-center container-xl ">
        Protección válida para personas entre 18 y 73 años
      </p>
      <div class="d-flex justify-content-center container-xl">
        <button
                id="Freemium-continuar"
                class="btn btn-secondary font-weight-bold w-100 mt-3 col-12 col-md-3 px-0"
                style="border-radius: 24px !important"
                @click="setProduct()"
        >
          Continuar
        </button>
      </div>

      <div class="mt-5 container-xl">
        <h2 class="font-weight-bold text-center mb-5">
          Beneficios Bamba
        </h2>
        <div class="row flex-column flex-md-row my-5 mx-0">
          <div class="row mx-0 align-items-center mb-3 col-12 col-md-4 px-0">
            <svg
              class="px-0"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18.5"
                cy="18.5"
                r="17.5"
                fill="#E8A2DF"
                stroke="#0C256E"
                stroke-width="2"
              />
              <path
                d="M17.1404 26H19.7804V12H17.3204C17.3204 13.42 16.4804 14.1 13.8204 14.1V16.08H17.1404V26Z"
                fill="#0C256E"
              />
            </svg>
            <p class="col-10 pl-2 pr-0 mb-0">
              Protegemos tu salud sin trámites largos, ni letras chiquitas .
            </p>
          </div>
          <div class="row mx-0 align-items-center mb-3 col-12 col-md-4 px-0">
            <svg
              class="px-0"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18.5"
                cy="18.5"
                r="17.5"
                fill="#E8A2DF"
                stroke="#0C256E"
                stroke-width="2"
              />
              <path
                d="M14.4806 25H23.7206V22.66H17.1206V22.46C17.1206 21.74 17.4406 21.22 18.4606 20.58L21.1406 18.96C22.8006 17.96 23.6806 16.74 23.6806 14.92C23.6806 12.66 21.9006 10.74 19.0006 10.74C16.0406 10.74 14.4606 12.94 14.4606 15.14H16.9206C16.9206 14.1 17.7206 13.18 18.9606 13.18C20.2806 13.18 21.0206 14 21.0206 15.02C21.0206 15.92 20.5406 16.52 19.7806 17L17.2006 18.6C15.3406 19.74 14.4806 20.92 14.4806 22.78V25Z"
                fill="#0C256E"
              />
            </svg>
            <p class="col-10 pl-2 pr-0 mb-0">
              Te damos la mejor asistencia y apoyo para solucionar cualquier
              imprevisto que te suceda .
            </p>
          </div>
          <div class="row mx-0 align-items-center mb-3 col-12 col-md-4 px-0">
            <svg
              class="px-0"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18.5"
                cy="18.5"
                r="17.5"
                fill="#E8A2DF"
                stroke="#0C256E"
                stroke-width="2"
              />
              <path
                d="M18.9648 26.24C22.0448 26.24 23.8248 24.06 23.8248 21.6C23.8248 19.4 22.2648 17.72 20.2248 17.46V17.34L23.4048 14.32V12H14.6648V14.36H20.1448V14.5L17.0448 17.46V19.52H18.9048C20.2848 19.52 21.1648 20.46 21.1648 21.62C21.1648 22.88 20.2848 23.74 18.9448 23.74C17.7048 23.74 16.8848 22.9 16.8448 21.84H14.3848C14.3848 23.98 15.9448 26.24 18.9648 26.24Z"
                fill="#0C256E"
              />
            </svg>
            <p class="col-10 pl-2 pr-0 mb-0">
              En cualquier momento y lugar podrás tener orientación médica
              telefónica con un médico general .
            </p>
          </div>
        </div>
      </div>
      <div class="container-xl">
        <div class="row mx-0 justify-content-between">
          <p class="font-weight-bold col-12 px-0">
            Nos respaldan los mejores aliados para solucionar tu imprevisto:
          </p>
          <div
            class="
              col-6 col-md-3
              py-3
              px-0
              row
              mx-0
              justify-content-center
              align-items-center
            "
          >
            <img
              src="../assets/img/axa.png"
              alt="axa"
              style="max-width: 8rem"
            >
          </div>

          <div
            class="
              col-6 col-md-3
              py-3
              px-0
              row
              mx-0
              justify-content-center
              align-items-center
            "
          >
            <img
              class="mb-0"
              src="../assets/img/bbva.png"
              alt="bbva"
              style="max-width: 8rem"
            >
          </div>

          <div
            class="
              col-6 col-md-3
              py-3
              px-0
              row
              mx-0
              justify-content-center
              align-items-center
            "
          >
            <img
              src="../assets/img/Mapfre.png"
              alt="mapfre"
              style="max-width: 8rem"
            >
          </div>

          <div
            class="
              col-6 col-md-3
              py-3
              px-0
              row
              mt-2
              mx-0
              justify-content-center
              align-items-center
            "
          >
            <img
              src="../assets/img/gentera.png"
              class="img-fluid"
              alt="gentera"
              style="max-width: 10rem"
            >
          </div>
        </div>
      </div>
      <div class="my-3 container-xl">
        <h3 class="font-weight-bold text-center mb-3">
          ¿Cómo funciona Bamba?
        </h3>
        <div>
          <iframe
            class="video"
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/i4fai01mAKU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {required} from "vuelidate/lib/validators";
import axios from "axios";
import Config from "../services/config";
import GoogleAnalyticsService from "../services/GoogleAnalyticsService";

export default {
  name: "FreemiumView",
  data() {
    return {
      sku_bamba: "",
      trackingService: "",
      ruta: Config.API_URL,
      validate: false,
    };
  },
  validations: {
    sku_bamba: {required},
  },
  mounted() {
    this.trackingService = new GoogleAnalyticsService(this);
    this.trackingService.sendHeartBeatEvent();
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
  },
  methods: {
    setProduct() {
      if (this.sku_bamba !== "") {
        axios
            .get(`${this.ruta}/api/product/sku/${this.sku_bamba}`)
            .then((res) => {
              var item = res.data;
              this.$store.commit("Product", item);
              this.$router.push("/contacto-freemium");
              this.setEvent(
              "selecion " + this.sku_bamba,
              "selecion " + this.sku_bamba,
              "selecion " + this.sku_bamba
            );
          })
          .catch((e) => {
            this.loader = false;
          });
      } else {
        this.validate = true;
      }
    },
    setEvent(category, action, label) {
      this.trackingService.sendEvent(category, action, label);
    },
  },
};
</script>
<style>
.About {
  margin-top: 100px;
}
</style>
