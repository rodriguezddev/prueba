<template>
  <div
    class="SignUp px-1 mb-3"
    data-test="customer-info"
  >
    <div class="row mx-0">

      <div
              class="col-12 text-left p-0"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-offset="200"
      >
        <h1 class="text-left font-weight-bold">
          Registro
        </h1>
        <p>¿Ya tienes una cuenta?
          <button class="text-decoration font-weight-bold p-0 m-0 text-primary" data-target="#sendcode"
                  data-toggle="modal" type="button">Inicia sesión
          </button>
        </p>
        <div>
          <div class="form-row mt-3">
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Nombre</label>
              <input
                      v-model.trim="name"
                      autocomplete="none"
                      type="text"
                      class="input-bamba"
                      :class="{'is-invalid': $v.name.$error }"
                      name="name"
              >
              <div
                v-if="$v.name.$error"
                class="invalid-feedback"
              >
                El campo nombre es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Apellido Paterno</label>
              <input
                      v-model.trim="lastname"
                      autocomplete="none"
                      type="text"
                      class="input-bamba"
                      :class="{'is-invalid': $v.lastname.$error }"
                      name="lastname"
              >
              <div
                v-if="$v.lastname.$error"
                class="invalid-feedback"
              >
                El campo apellido paterno es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Apellido Materno</label>
              <input
                      v-model.trim="second_lastname"
                      autocomplete="none"
                      type="text"
                      class="input-bamba"
                      :class="{'is-invalid': $v.second_lastname.$error }"
                      name="second_lastname"
              >
              <div
                v-if="$v.second_lastname.$error"
                class="invalid-feedback"
              >
                El campo apellido materno es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Correo Electrónico</label>
              <input
                      v-model.trim="email"
                      autocomplete="none"
                      type="email"
                      class="input-bamba"
                      :class="{'is-invalid': $v.email.$error }"
                      name="email"
              >
              <div
                v-if="$v.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.email.required">Proporciona el email del beneficiario</span>
                <span v-if="!$v.email.email">Proporciona un email válido</span>
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Celular</label>
              <input
                      v-model.trim="cellphone"
                      autocomplete="none"
                      type="tel"
                      class="input-bamba"
                      :class="{'is-invalid': $v.cellphone.$error || cellphoneAlreadyRegistered || cellphoneInBeneficiaryForm }"
                      name="cellphone"
              >
              <div
                v-if="$v.cellphone.$error || cellphoneAlreadyRegistered || cellphoneInBeneficiaryForm"
                class="invalid-feedback"
              >
                <span v-if="cellphoneAlreadyRegistered">Este celular ya está registrado</span>
                <span v-if="cellphoneInBeneficiaryForm">Este celular ya lo usaste para el Beneficiario</span>
                <span v-if="!$v.cellphone.required">Proporciona el celular del beneficiario</span>
                <span v-if="!$v.cellphone.numeric">Este campo solo acepta números</span>
                <span
                  v-if="$v.cellphone.numeric && (!$v.cellphone.maxLength || !$v.cellphone.minLength)"
                >Este campo debe contener 10 dígitos</span>
              </div>
            </div>
            <div class="row mx-0 justify-content-start pb-3 mt-4 col-12 col-md-4 ">
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
              <div class="invalid-feedback" v-if="$v.date.$error || !ageAvailable">
                <span v-if="!ageAvailable"></span>
                <span v-else>Proporciona tu fecha de nacimiento</span>
              </div>
              <p class="text-danger" v-else-if="!$v.age.between">
                <span> Debes tener un rango de edad de entre 18 y 73 años</span>
              </p>
            </div>
          </div>


          <div class="form-row mt-4">
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Calle</label>
              <input
                      v-model.trim="street"
                      autocomplete="none"
                      type="text"
                      class="input-bamba"
                      :class="{'is-invalid': $v.street.$error }"
                      name="street"
              >
              <div
                v-if="$v.street.$error"
                class="invalid-feedback"
              >
                El campo calle es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Número exterior</label>
              <input
                      v-model.trim="ext_number"
                      autocomplete="none"
                      type="text"
                      class="input-bamba"
                      :class="{'is-invalid': $v.ext_number.$error }"
                      name="ext_number"
              >
              <div
                v-if="$v.ext_number.$error"
                class="invalid-feedback"
              >
                El campo número exterior es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Número interior</label>
              <input
                      v-model.trim="int_number"
                      autocomplete="none"
                      type="text"
                      class="input-bamba"
                      :class="{'is-invalid': $v.int_number.$error }"
                      name="int_number"
              >
              <div
                v-if="$v.int_number.$error"
                class="invalid-feedback"
              >
                El campo número interior es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
              <label class="font-weight-bold text-left">Código postal</label>
              <input
                      v-model.trim="cp"
                      autocomplete="none"
                      type="number"
                      class="input-bamba"
                      :class="{'is-invalid': $v.cp.$error }"
                      name="zip_code"
                      @input="getZipCodeInfo()"
              >
              <div
                v-if="$v.cp.$error"
                class="invalid-feedback"
              >
                El campo código postal es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Estado</label>
              <input
                      v-model.trim="state"
                      autocomplete="none"
                      type="text"
                      class="input-bamba"
                      :class="{'is-invalid': $v.state.$error }"
                      name="state"
              >
              <div
                v-if="$v.state.$error"
                class="invalid-feedback"
              >
                El campo estado es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Colonia</label>
              <select
                      id="colony"
                      v-model.trim="colony"
                      class="input-bamba"
                      :class="{'is-invalid': $v.colony.$error }"
                      style="height:38px;"
                      name="colony"
              >
                <option
                  selected
                  value=""
                >
                  Colonia
                </option>
                <option
                  v-for="(colony, index) in colonies"
                  :key="index"
                  :value="colony"
                >
                  {{
                    colony
                  }}
                </option>
              </select>

              <div
                v-if="$v.colony.$error"
                class="invalid-feedback"
              >
                El campo colonia es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4">
                <label class="font-weight-bold text-left">Municipio</label>
              <input
                      v-model.trim="town"
                      autocomplete="none"
                      type="text"
                      class="input-bamba"
                      :class="{'is-invalid': $v.town.$error }"
                      name="town"
              >
              <div
                v-if="$v.town.$error"
                class="invalid-feedback"
              >
                El campo municipio es obligatorio
              </div>
            </div>
          </div>

          <div class="mt-4" v-if="pack.length !== 0 && pack !== undefined">
            <div v-if="sale_subtotal === subtotal" >
              <p class="font-weight-bold text-center">Total</p>
              <h2 class="font-weight-bold text-center">{{ subtotal | currency}} MXN</h2>
            </div>
            <div v-else>
              <p class="font-weight-bold text-center">Total</p>
              <h3 style=" color: #C4C4C4;" class="font-weight-bold text-center">De <span style="text-decoration: line-through; color: #C4C4C4;">{{ subtotal | currency}} MXN</span> a</h3>
              <h2  class="font-weight-bold text-center">{{ sale_subtotal | currency}} MXN</h2>
            </div>
          </div>

          <div class="col-12 px-0 row mx-0 justify-content-md-center justify-content-start">
            <button
                    class="btn btn-secondary col-12 col-md-3 my-5 text-white w-100" style="border-radius: 24px !important; "
                    @click="processForm()"
            >
              Guardar datos
            </button>
          </div>

        </div>
      </div>

    </div>

    <modal-alert />
    <login/>
  </div>
</template>

<script>
  import {between, email, maxLength, minLength, numeric, required} from "vuelidate/lib/validators";
  import CustomerService from "../../services/customer";
  import AuthService from "../../services/auth";
  import PlanService from "../../services/plan";
  import AppService from "../../services/app";
  import SepomexService from "../../services/sepomex";
  import ModalService from "../../services/modals";
  import TrackingService from "../../services/tracking";
  import ModalAlert from "./../ModalAlert";
  import moment from "moment";
  import login from "./Login2";
  import {mapState} from "vuex";
  const Lockr = require("lockr");


  export default {
  name: "SignUp",

  components: {
    ModalAlert,
    login
  },

  data() {
    return {
      pack:[],
      appService: AppService,
      name: "",
      lastname: "",
      second_lastname: "",
      birthdate: "",
        ageAvailable: true,
      cellphone: "",
      birthdate_day: "",
      birthdate_month: "",
      birthdate_year: "",
        date: "",
        age: "",
      email: "",
      state: "",
      street: "",
      ext_number: "",
      int_number: "",
      cp: "",
      colony: "",
      colonies: [],
      town: "",
      months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      years: [],
      days: 31,
      cellphoneAlreadyRegistered: false,
      cellphoneInBeneficiaryForm: false
    };
  },

  watch: {
    cellphone(val) {
      if (val.length > 10) {
        this.cellphone = val.slice(0, -1);
        return 0;
      }
      if (!this.$v.cellphone.$invalid) {
        this.checkIfCellphoneAlreadyRegistered();
      }

      if (this.cellphoneInBeneficiaryForm && val.length < 10) {
        this.cellphoneInBeneficiaryForm = false;
      }
    },

    cp(val) {
      if (val.length > 5) {
        this.cp = val.slice(0, -1);
        return 0;
      }
    }
  },

  validations: {
    name: {
      required
    },
    lastname: {
      required
    },
    second_lastname: {
      required
    },
    cellphone: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10)
    },
      date: {required},
      age: {
          required,
          between: between(18, 73),
    },
    email: {
      required,
      email
    },
    street: {
      required
    },
    state: {
      required
    },
    ext_number: {
      required
    },
    int_number: {},
    cp: {
      required,
      numeric,
      minLength: minLength(5),
      maxLength: maxLength(5)
    },
    colony: {
      required
    },
    town: {
      required
    },
    trackingService: ""
  },

  computed: {
    ...mapState(["subtotal", "sale_subtotal"]),
    customerToSave() {
      const birthdate = new Date(this.date)
      return {
        name: this.name,
        maternalLastname: this.second_lastname,
        paternalLastname: this.lastname,
        email: this.email,
        cellphone: this.cellphone,
        birthdate: birthdate,
        address: {
          street: this.street,
          state: this.state,
          ext_number: this.ext_number,
          int_number: this.int_number,
          cp: this.cp,
          colony: this.colony,
          town: this.town
        }
      };
    }
  },

  mounted() {
    this.pack = Lockr.get("packages")
    this.trackingService = new TrackingService(this);
    for (let i = 2006; i >= 1951; i--) {
      this.years.push(i);
    }
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
    async checkIfCellphoneAlreadyRegistered() {
      this.$vs.loading();
      const [error] = await AuthService.checkIfCellphoneAlreadyRegistered(this.cellphone);
      this.cellphoneAlreadyRegistered = !!error;
      this.$vs.loading.close();
    },

    async getZipCodeInfo() {
      if (this.cp.length === 5) {
        this.$vs.loading();
        try {
          [this.colonies, this.state, this.town] = await SepomexService.getZipCodeInfo(this.cp);
          this.$vs.loading.close();
        } catch (error) {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Oops",
            text: "Parece ser que ingresaste un C.P. inválido",
            color: "danger"
          });
        }
      }
    },

    processForm() {
      this.$v.$touch();

      if (PlanService.checkUserType(this.customerToSave) === "repeating_phone") {
        this.cellphoneInBeneficiaryForm = true;
        return ModalService.showAlert({
          type: "alert",
          title: "Verifica tus datos",
          message: "Este número de celular ya lo usaste para el Beneficiario, es importante para nosotros mantener la comunicación separada.\n" +
            "Por favor actualiza tu número de celular."
        });
      }

      if (!this.$v.$invalid && !this.cellphoneAlreadyRegistered) {
        this.$vs.loading();
        setTimeout(() => {
          CustomerService.saveCustomerData(this.customerToSave);
          //this.trackingService.employerData(this.customerToSave);
          this.$vs.loading.close();
          this.$store.commit("SetAuth", true)
          this.$router.push({ path: '/arma-tu-plan/pago' });
        }, 800);
      }
    }
  }
};
</script>

<style scoped>
.SignUp {
  color: #123291;
    margin-top: 80px;
}

.red-color {
  color: #ff787d;
}

a {
  text-decoration: none;
  color: #123291;
}

.navy-background {
  border: none;
}



@media screen and (max-width: 992px) {
  img {
    display: none;
  }
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
</style>
