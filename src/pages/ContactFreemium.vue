<template>
  <div class="About">
    <h2 class="font-weight-bold text-left col-12">
      Datos del beneficiario
    </h2>
    <p class="col-12">
      Agrega a continuación los datos de la persona que recibirá esta protección
      y usará estos beneficios
    </p>
    <form @submit.prevent="submit">
      <div class="row mx-0">
        <div
          class="row mx-0 justify-content-start pb-3 col-12 col-md-4"
          :class="{ 'form-group--error': $v.name.$error }"
        >
          <label class="font-weight-bold text-left">Nombre (s)</label>
          <input
            v-model.trim="$v.name.$model"
            type="text"
            value="name"
            class="input-bamba"
            :class="{ 'is-invalid': $v.name.$error }"
          >
          <p
            v-if="$v.name.$error"
            class="text-danger"
          >
            Campo requerido
          </p>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Apellido paterno</label>
          <input
            v-model.trim="$v.lastname.$model"
            type="text"
            value="lastname"
            class="input-bamba"
            :class="{ 'is-invalid': $v.lastname.$error }"
          >
          <p
            v-if="$v.lastname.$error"
            class="text-danger"
          >
            Campo requerido
          </p>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Apellido materno</label>
          <input
            v-model.trim="$v.second_lastname.$model"
            type="text"
            value="second_lastname"
            class="input-bamba"
            :class="{ 'is-invalid': $v.second_lastname.$error }"
          >
          <p
            v-if="$v.second_lastname.$error"
            class="text-danger"
          >
            Campo requerido
          </p>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Coreo electrónico</label>
          <input
            v-model.trim="$v.email.$model"
            type="email"
            value="email"
            class="input-bamba"
            :class="{ 'is-invalid': $v.email.$error }"
          >
          <div v-if="$v.email.$error">
            <p
              v-if="!$v.email.required"
              class="text-danger"
            >
              Campo requerido
            </p>
            <p
              v-if="!$v.email.email"
              class="text-danger"
            >
              Ingresa un correo válido
            </p>
            <p
              v-if="!$v.email.validateEmail"
              class="text-danger"
            >
              Este correo ya está en uso
            </p>
          </div>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Número celular</label>
          <input
            v-model.trim="$v.cellphone.$model"
            type="text"
            value="cellphone"
            class="input-bamba"
            maxlength="10"
            :class="{ 'is-invalid': $v.cellphone.$error }"

          >
          <p
            v-if="$v.cellphone.$error"
            class="text-danger"
          >
            Campo requerido
          </p>
          <span
            v-if="mensaje === null"
            style="font-size: 12px"
            class="text-danger"
          >El numero ingresado ya esta en uso</span>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Fecha de nacimiento</label>
          <input
            v-mask="'##/##/####'"
            type="tel"
            value="date"
            class="input-bamba"
            placeholder="DD/MM/AAAA"
            :class="{ 'is-invalid': $v.date.$error }"
            @blur="setBirthdate($event.target.value)"
          >
          <div
            v-if="$v.date.$error || !ageAvailable"
            class="invalid-feedback"
          >
            <span v-if="!ageAvailable" />
            <span v-else>Proporciona tu fecha de nacimiento</span>
          </div>
          <p
            v-else-if="!$v.age.between"
            class="text-danger"
          >
            <span> Debes tener un rango de edad de entre 18 y 73 años</span>
          </p>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left pb-3">Género</label>
          <div class="w-100 row mx-0">
            <div class="pb-3 col-md-6 px-0">
              <label class="row mx-0 align-items-center">
                <input
                  v-model.trim="$v.gender.$model"
                  type="radio"
                  class="option-input radio "
                  name="example"
                  value="Mujer"
                  checked
                >
                <p class="font-weight-bold text-left col-9 mb-0 px-2 col-md-6" >
                  Femenino
                </p>
              </label>
            </div>

            <div class="pb-3 col-md-6 px-0">
              <label class="row mx-0 align-items-center">
                <input
                  v-model.trim="$v.gender.$model"
                  type="radio"
                  class="option-input radio"
                  name="example"
                  value="Hombre"
                >
                <p class="font-weight-bold text-left col-9 mb-0 px-2 col-md-6">
                  Masculino
                </p>
              </label>
            </div>
          </div>
          <p
            v-if="$v.gender.$error"
            class="text-danger"
          >
            Campo requerido
          </p>
        </div>
      </div>
      <p class="col-12 col-md-6">
        Al activar recibirás un mensaje vía Whatsapp confirmando la Activación
        de tu protección, la cuál podrás empezar a utilizar en 48 hrs . Así
        mismo estás aceptando nuestro
        <span class="font-weight-bold">Aviso de Privacidad</span>
      </p>
      <div class="pb-3 col-12">
        <label class="row mx-0 align-items-center">
          <input
            v-model.trim="$v.terms.$model"
            type="checkbox"
            class="option-input radio"
            name="mayor"
            checked
          >
          <p class="text-left col-9 mb-0 px-2">
            Soy mayor de edad,<span class="font-weight-bold">
              he leído y acepto los términos y condiciones</span>
          </p>
        </label>

        <p
          v-if="$v.terms.$error"
          class="terms-invalid text-danger tam-label text-left"
        >
          Acepta los Términos y Condiciones y Aviso de Privacidad
        </p>
      </div>
      <button
        id="Freemium-activar"
        type="submit"
        class="btn btn-secondary font-weight-bold w-100 mt-3 mb-4 col-12 col-md-3"
        style="border-radius: 24px !important"
      >
        Activar
      </button>
    </form>
  </div>
</template>
<script>
import {between, email, maxLength, minLength, numeric, required,} from "vuelidate/lib/validators";
import moment from "moment";
import axios from "axios";
import Config from "../services/config";
import {mapState} from "vuex";
import GoogleAnalyticsService from "../services/GoogleAnalyticsService";

export default {
  name: "ContactoFreemium",
  data() {
    return {
      name: "",
      lastname: "",
      second_lastname: "",
      email: "",
      cellphone: "",
      date: "",
      gender: "",
      terms: false,
      ageAvailable: true,
      age: null,
      mensaje: "",
      birthdate: null,
      type: "MYSELF",
      item: null,
      ruta: Config.API_URL,
      trackingService: "",
      emailMessage: "",
    };
  },
  computed: {
    ...mapState(["cart"]),
  },
  validations: {
    name: { required },
    lastname: { required },
    second_lastname: { required },
    email: {
      required,
      email,
      validateEmail(value) {
        if (!this.$v.email.email || !this.$v.email.required) {
          return true;
        }

        return axios
          .get(`${this.ruta}/api/verify-email/${value}`)
          .then((res) => {
            return true;
          })
          .catch((e) => {
            return false;
          });
      },
    },
    cellphone: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
    date: { required },
    age: {
      required,
      between: between(18, 73),
    },
    gender: {required},
    terms: {
      accepted: (val) => val === true,
    },
  },
  created() {
    if (this.cart == null) {
      this.$router.push("/servicios-gratuitos");
    }
    if (
            window.location.pathname === "/confirmacion-de-compra" ||
            window.location.pathname === "/servicios-gratuitos"
    ) {
      document.getElementById("content").classList.remove("container-xl")
    } else {
      document.getElementById("content").classList.add("container-xl")
    }
  },
  mounted() {
    this.trackingService = new GoogleAnalyticsService(this);
    this.trackingService.sendHeartBeatEvent();
  },
  methods: {
    validateAge(value) {
      var defaultDateFormat = "DD/MM/YYYY";
      if (value.length === defaultDateFormat.length) {
        var date = moment(value, defaultDateFormat);
        this.age = moment(new Date()).diff(date, "years");
      }
    },
    setBirthdate(value) {
      var defaultDateFormat = "DD/MM/YYYY";
      if (moment(value, defaultDateFormat).isValid()) {
        this.validateAge(value);
        if (!this.$v.age.$error) {
          this.date = value;
          this.$v.date.$touch();
        }
      }
    },
    validatePhone() {
      this.loader = true;
      axios
        .get(`${this.ruta}/api/verify-cellphone/${this.cellphone}`)
        .then((res) => {
          this.mensaje = res.data.message;
          this.loader = false;
        })
        .catch((e) => {
          this.mensaje = null;
          this.loader = false;
        });
    },
    sendUser() {
      this.birthdate = moment(this.date, "DD/MM/YYYY").toISOString();
      var formulario = {
        items: [
          {
            beneficiaries: [
              {
                addons: [],
                birthdate: this.birthdate,
                cellphone: this.cellphone,
                email: this.email,
                gender: this.gender,
                lastname: this.lastname,
                name: this.name,
                second_lastname: this.second_lastname,
                type: this.type,
              },
            ],
            quantity: this.quantity,
            product: {
              id: this.cart.id,
              sku: this.cart.sku,
            },
          },
        ],
        created_in: "FREEMIUM",
        channel_code: "FREEMIUM",
        customer: {
          name: this.name,
          lastname: this.lastname,
          second_lastname: this.second_lastname,
          email: this.email,
          cellphone: this.cellphone,
          gender: this.gender,
          birthdate: this.birthdate,
          address: {
            colony: "Actipan",
            external_number: "1428",
            internal_number: "",
            municipality: "Benito Juárez",
            state: "Ciudad de México",
            state_id: 1,
            street: "Av. Insurgentes Sur",
            town: "Ciudad de México",
            zip_code: "03230",
          },
        },
        packages: [
          {
            name: "Asesor Bamba + Seguro de accidentes 10k",
            products: [
              {
                id: 59,
              },
            ],
          },
        ],
        coupon_code: "",
      };

      const BASE_URL = `${this.ruta}/api/v2/orders`;
      axios
        .post(BASE_URL, formulario)
        .then((res) => {
          this.order_id = res.data.order.id;
          this.validateOrder();
        })
        .catch((e) => {});
    },
    validateOrder() {
      const BASE_URL = `${this.ruta}/api/alliances/checkout/${this.order_id}`;
      axios
        .post(BASE_URL, {
          fulfilled_in: "FREEMIUM",
        })
        .then((res) => {
          this.$router.push("/activado");
          this.item = res.data.order.customer;
          this.$store.commit("setCustomer", this.item);
          this.setEvent(
            "Envio formulario de registro freemium",
            "Envio formulario de registro freemium",
            "Envio formulario de registro freemium"
          );
        })
        .catch((e) => {});
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
      } else {
        this.sendUser();
      }
    },
    setEvent(category, action, label) {
      this.trackingService.sendEvent(category, action, label);
    },
  },
};
</script>
<style lang="scss" >
.About {
  margin-top: 100px;
}
</style>
