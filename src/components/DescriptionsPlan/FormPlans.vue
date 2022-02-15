<template>
  <div class="mb-3">
    <form @submit.prevent="submit">
      <div class="row">
        <div
                :class="{ 'form-group--error': $v.name.$error }"
                class="row mx-0 justify-content-start pb-3 col-12 col-md-4"
        >
          <label class="font-weight-bold text-left">Nombre (s)</label>
          <input
                  :class="{ 'is-invalid': $v.name.$error }"
                  class="input-bamba"
                  type="text"
                  v-model.trim="$v.name.$model"
                  value="name"
          />
          <p class="text-danger" v-if="$v.name.$error">Campo requerido</p>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Apellido paterno</label>
          <input
                  :class="{ 'is-invalid': $v.lastname.$error }"
                  class="input-bamba"
                  type="text"
                  v-model.trim="$v.lastname.$model"
                  value="lastname"
          />
          <p class="text-danger" v-if="$v.lastname.$error">Campo requerido</p>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Apellido materno</label>
          <input
                  :class="{ 'is-invalid': $v.second_lastname.$error }"
                  class="input-bamba"
                  type="text"
                  v-model.trim="$v.second_lastname.$model"
                  value="second_lastname"
          />
          <p class="text-danger" v-if="$v.second_lastname.$error">
            Campo requerido
          </p>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Correo electrónico</label>
          <input
                  :class="{ 'is-invalid': $v.email.$error }"
                  class="input-bamba"
                  type="email"
                  v-model.trim="$v.email.$model"
                  value="email"
          />
          <div v-if="$v.email.$error">
            <p class="text-danger" v-if="!$v.email.required">Campo requerido</p>
            <p class="text-danger" v-if="!$v.email.email">
              Ingresa un correo válido
            </p>
            <p class="text-danger" v-if="!$v.email.validateEmail">
              Este correo ya está en uso
            </p>
          </div>
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Número celular</label>
          <input
                  :class="{ 'is-invalid': $v.cellphone.$error }"
                  @blur="validatePhone()"
                  class="input-bamba"
                  maxlength="10"
                  type="text"
                  v-model.trim="$v.cellphone.$model"
                  value="cellphone"
          />
          <p class="text-danger" v-if="$v.cellphone.$error">Campo requerido</p>
          <span
                  class="text-danger"
                  style="font-size: 12px"
                  v-if="mensaje === null"
          >El numero ingresado ya esta en uso</span
          >
        </div>
        <div class="row mx-0 justify-content-start pb-3 col-12 col-md-4">
          <label class="font-weight-bold text-left">Fecha de nacimiento</label>
          <input
                  :class="{ 'is-invalid': $v.date.$error }"
                  @blur="setBirthdate($event.target.value)"
                  class="input-bamba"
                  placeholder="DD/MM/AAAA"
                  type="tel"
                  v-mask="'##/##/####'"
                  value="date"
          />
          <div v-if="$v.date.$error || !ageAvailable" class="invalid-feedback">
            <span v-if="!ageAvailable"></span>
            <span v-else>Proporciona tu fecha de nacimiento</span>
          </div>
          <p class="text-danger" v-else-if="!$v.age.between">
            <span> Debes tener un rango de edad de entre 18 y 73 años</span>
          </p>
        </div>
        <div class="row  mx-0 align-items-start pb-3 col-12 col-md-4 ">
          <label class="font-weight-bold text-left pb-3">Género</label>
          <div class="w-100 col-12 px-0">
            <div class="pb-3">
              <label class="row mx-0 align-items-center">
                <input
                        type="radio"
                        class="option-input radio"
                        name="example"
                        value="F"
                        v-model.trim="$v.gender.$model"
                        checked
                />
                <p class="font-weight-bold text-left col-9 mb-0 px-2">
                  Femenino
                </p>
              </label>
            </div>

            <div class="pb-3">
              <label class="row mx-0 align-items-center">
                <input
                        type="radio"
                        class="option-input radio"
                        name="example"
                        value="M"
                        v-model.trim="$v.gender.$model"
                />
                <p class="font-weight-bold text-left col-9 mb-0 px-2">
                  Masculino
                </p>
              </label>
            </div>
          </div>
          <p class="text-danger" v-if="$v.gender.$error">Campo requerido</p>
        </div>
      </div>
      <div :class="{'contentSubtotal' : valueScroll, 'efectScrollSubTotal' : efectSubtotal}"
           class="row flex-column p-3 m-0 align-items
           -center d-md-none w-100" style="transform: translateY(240px);">
        <div v-if="sale_subtotal === subtotal" >
          <p class="font-weight-bold text-center">Total</p>
          <h2 class="font-weight-bold text-center">{{ subtotal | currency}} MXN</h2>
        </div>
        <div v-else>
          <p class="font-weight-bold text-center">Total</p>
          <h3 style=" color: #C4C4C4;" class="font-weight-bold text-center">De <span style="text-decoration: line-through; color: #C4C4C4;">{{ subtotal | currency}} MXN</span> a</h3>
          <h2  class="font-weight-bold text-center">{{ sale_subtotal | currency}} MXN</h2>
        </div>
        <button
                class="btn btn-secondary font-weight-bold col-12 col-md-3 mt-3 mb-4"
                style="border-radius: 24px !important; "
                type="submit"
        >
          continuar
        </button>
        <button
                @click="getBack()"
                class="
          btn btn-outline-secondary
          font-weight-bold
          px-5
          mt-1
          mb-1
          col-12 col-md-3
          p-0
          py-2
        "
                style="border-radius: 24px !important; font-size: 15px; top: auto"


        >
          Regresar
        </button>
      </div>
      <div :class="{'contentSubtotal' : valueScrollD, 'efectScrollSubTotal' : efectSubtotalD}"
           class="row flex-column p-3 m-0 align-items-center d-none d-md-flex d-xl-none w-100" style="transform: translateY(240px);">

        <div v-if="sale_subtotal === subtotal" >
          <p class="font-weight-bold text-center">Total</p>
          <h2 class="font-weight-bold text-center">{{ subtotal | currency}} MXN</h2>
        </div>
        <div v-else>
          <p class="font-weight-bold text-center">Total</p>
          <h3 style="text-decoration: line-through; color: #C4C4C4;" class="font-weight-bold text-center">{{ subtotal | currency}} MXN</h3>
          <h2  class="font-weight-bold text-center">{{ sale_subtotal | currency}} MXN</h2>
        </div>
        <button
                class="btn btn-secondary font-weight-bold col-12 col-md-3 mt-3 mb-4"
                style="border-radius: 24px !important; "
                type="submit"
        >
          continuar
        </button>
        <button
                class="
          btn btn-outline-secondary
          font-weight-bold
          px-5
          mt-1
          mb-1
          col-12 col-md-3
          p-0
          py-2
        "
                style="border-radius: 24px !important; font-size: 15px; top: auto"
                @click="getBack()"
          >
          Regresar
        </button>
      </div>
      <div :class="{'contentSubtotal' : valueScrollT, 'efectScrollSubTotal' : efectSubtotalT}"
           class="row flex-column p-3 m-0 align-items-center d-none d-md-none d-xl-flex w-100" style="transform: translateY(240px);">
        <div v-if="sale_subtotal === subtotal" >
          <p class="font-weight-bold text-center">Total</p>
          <h2 class="font-weight-bold text-center">{{ subtotal | currency}} MXN</h2>
        </div>
        <div v-else>
          <p class="font-weight-bold text-center">Total</p>
          <h3 style="text-decoration: line-through; color: #C4C4C4;" class="font-weight-bold text-center">{{ subtotal | currency}} MXN</h3>
          <h2  class="font-weight-bold text-center">{{ sale_subtotal | currency}} MXN</h2>
        </div>
        <button
                class="btn btn-secondary font-weight-bold col-12 col-md-3 mt-3 mb-4"
                style="border-radius: 24px !important; "
                type="submit"
        >
          continuar
        </button>
        <button
                class="
          btn btn-outline-secondary
          font-weight-bold
          px-5
          mt-1
          mb-1
          col-12 col-md-3
          p-0
          py-2
        "
                style="border-radius: 24px !important; font-size: 15px; top: auto"
                @click="getBack()"
        >
          Regresar
        </button>
      </div>
    </form>

  </div>
</template>
<script>
  import {between, email, maxLength, minLength, numeric, required,} from "vuelidate/lib/validators";
  import moment from "moment";
  import axios from "axios";
  import Config from "../../services/config";
  import {mapState} from "vuex";
  import PlanService from "../../services/plan";
  import EventBus from "../../events";

  const Lockr = require("lockr");
  export default {
    name: "FormPlans",
    props: [
      "indexPackage",
      "indexBeneficiary",
      "beneficiary",
      "pack"
    ],
    data() {
      return {
        name: "",
        lastname: "",
        second_lastname: "",
        email: "",
        cellphone: "",
        date: "",
        gender: "",
        ageAvailable: true,
        age: null,
        mensaje: "",
        birthdate: null,
        type: "MYSELF",
        item: null,
        ruta: Config.API_URL,
        trackingService: "",
        emailMessage: "",
        addPagoNomina: false,
        addSeguroAccidentes: false,
        addConsultasTelefonicas: false,
        valueScroll: false,
        valueScrollD: false,
        valueScrollT: false,
        efectSubtotal: false,
        efectSubtotalD: false,
        efectSubtotalT: false,
        price:0
      };
    },
    computed: {
      ...mapState(["cart", "subtotal", "sale_subtotal"]),
    },
    validations: {
      name: { required },
      lastname: { required },
      second_lastname: { required },
      email: {
        required,
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
      gender: { required },
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('scroll', this.handleScrollD);
      window.addEventListener('scroll', this.handleScrollT);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('scroll', this.handleScrollD);
      window.removeEventListener('scroll', this.handleScrollT);
    },
    methods: {
      getBack(){
        window.history.go(-1)
      },
      handleScrollT(event) {
        
        if (window.scrollY >= 400) {
          this.valueScrollT = false;
        } else if (window.scrollY >= 0) {
          this.valueScrollT = true;
          this.efectSubtotalT = true;
        } else if (window.scrollY < 0) {
          this.valueScrollT = false;
          this.efectSubtotalT = false;
        }
      },
      handleScrollD(event) {
        
        if (window.scrollY >= 950) {
          this.valueScrollD = false;
        } else if (window.scrollY >= 400) {
          this.valueScrollD = true;
          this.efectSubtotalD = true;
        } else if (window.scrollY < 400) {
          this.valueScrollD = false;
          this.efectSubtotalD = false;
        }
      },
      handleScroll(event) {
        if (window.scrollY >= 1800) {
          this.valueScroll = false;
        } else if (window.scrollY >= 400) {
          this.valueScroll = true;
          this.efectSubtotal = true;
        } else if (window.scrollY < 400) {
          this.valueScroll = false;
          this.efectSubtotal = false;
        }
      },
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

      sendUser() {
        this.birthdate = moment(this.date, "DD/MM/YYYY").toISOString();
        const beneficiary = {
          birthdate : this.birthdate,
          cellphone : this.cellphone,
          email : this.email,
          gender : this.gender,
          lastName : this.lastname,
          name : this.name,
          secondLastName : this.second_lastname
        }

        Lockr.set("customer", beneficiary)
        this.$router.push({ path: "/arma-tu-plan/pago" });

      },
      submit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
        } else {
          this.sendUser();
        }
      },
    },
  };
</script>
<style lang="scss">
  $breakpoint-tablet: 768px;
  .contentSubtotal {
    position: fixed;
    z-index: 9999999;
    background: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .efectScrollSubTotal {
    transform: translateY(0px) !important;
    transition: all ease 0.5s;
    background: #fff;
  }


</style>