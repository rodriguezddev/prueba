<template>
  <div class="Employer px-1">
    <div class="row mx-0">
      <div class="mt-5 col-md-12 text-left px-3">
        <h2 class="text-center mb-5">
          Activa tu asesor Bamba gratis
        </h2>
        <form @submit.prevent="submit">
          <div class="card">
            <div class="row mx-2 mt-3">
              <div class="col-lg-4 col-md-12 mt-4">
                <input
                  v-model.trim="$v.name.$model"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Nombre*"
                  :class="{ 'is-invalid': $v.name.$error }"
                >
                <div
                  v-if="$v.name.$error"
                  class="invalid-feedback"
                >
                  Campo requerido
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-4">
                <input
                  v-model.trim="$v.lastname1.$model"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Apellido Paterno*"
                  :class="{ 'is-invalid': $v.lastname1.$error }"
                >
                <div
                  v-if="$v.lastname1.$error"
                  class="invalid-feedback"
                >
                  Campo requerido
                </div>
              </div>
              <div class="col-lg-4 col-md-12 mt-4">
                <input
                  v-model.trim="$v.lastname2.$model"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Apellido Materno*"
                  :class="{ 'is-invalid': $v.lastname2.$error }"
                >
                <div
                  v-if="$v.lastname2.$error"
                  class="invalid-feedback"
                >
                  Campo requerido
                </div>
              </div>
            </div>
            <div class="row mx-2 mb-3">
              <div class="col-lg-4 col-md-12 mt-4">
                <select
                  id="gender"
                  v-model.trim="$v.gender.$model"
                  name="gender"
                  class="form-control form-control-lg"
                  :class="{ 'is-invalid': $v.gender.$error }"
                  style="height:38px;"
                >
                  <option
                    selected
                    value=""
                  >
                    Género:*
                  </option>
                  <option value="F">
                    Femenino
                  </option>
                  <option value="M">
                    Masculino
                  </option>
                </select>
                <div
                  v-if="$v.gender.$error"
                  class="invalid-feedback"
                >
                  Proporciona el género del beneficiario
                </div>
              </div>

              <div class="col-lg-4 col-md-12 mt-4">
                <input
                  v-model.trim="phone"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Número celular*"
                  :class="{
                    'is-invalid': $v.phone.$error || cellphoneAlreadyRegistered
                  }"
                >
                <div
                  v-if="$v.phone.$error || cellphoneAlreadyRegistered === true"
                  class="invalid-feedback"
                >
                  <span
                    v-if="cellphoneAlreadyRegistered"
                  >Este celular ya está registrado</span>
                  <span v-if="!$v.phone.required">Proporciona tu celular</span>
                  <span
                    v-if="!$v.phone.numeric"
                  >Este campo solo acepta números</span>
                  <span
                    v-if="
                      $v.phone.numeric &&
                        (!$v.phone.maxLength || !$v.phone.minLength)
                    "
                  >Este campo debe contener 10 dígitos</span>
                </div>
              </div>

              <div class="col-lg-4 col-md-12 mt-4">
                <input
                  v-model.trim="$v.email.$model"
                  autocomplete="none"
                  type="email"
                  class="form-control form-control-lg"
                  placeholder="Correo Electrónico:*"
                  :class="{ 'is-invalid': $v.email.$error }"
                >
                <div
                  v-if="$v.email.$error"
                  class="invalid-feedback"
                >
                  <span
                    v-if="!$v.email.required"
                  >Proporciona el email del beneficiario</span>
                  <span
                    v-if="!$v.email.email"
                  >Proporciona un email válido</span>
                </div>
              </div>
            </div>

            <div class="row mx-2 mb-3">
              <div class="col-lg-4 col-md-12 mt-2">
                <small
                  class="date form-text mb-2 just-mobile"
                >Fecha de nacimiento*</small>
                <div class="row">
                  <div
                    class="col-md-4 col-md-2 mb-3"
                    style="padding-right: 5px; padding-left: 15px;"
                  >
                    <select
                      id="day"
                      v-model.trim="$v.birthdate_day.$model"
                      class="form-control form-control-lg"
                      :class="{
                        'is-invalid': $v.birthdate_day.$error || !ageAvailable
                      }"
                      placeholder="Día"
                      style="height:38px;"
                      name="birthdate_day"
                    >
                      <option
                        selected
                        value=""
                      >
                        Día
                      </option>
                      <option
                        v-for="day in days"
                        :key="day"
                        :value="day"
                      >
                        {{ day }}
                      </option>
                    </select>
                    <small
                      class="date form-text just-desktop"
                    >Fecha de nacimiento*</small>
                    <div
                      v-if="$v.birthdate_day.$error || !ageAvailable"
                      class="invalid-feedback"
                    >
                      <span v-if="!ageAvailable" />
                      <span v-else>Proporciona tu día de nacimiento</span>
                    </div>
                  </div>
                  <div
                    class="col-md-4 col-md-2 mb-3"
                    style="padding-right: 5px; padding-left: 15px;"
                  >
                    <select
                      id="month"
                      v-model.trim="$v.birthdate_month.$model"
                      class="form-control form-control-lg"
                      :class="{
                        'is-invalid': $v.birthdate_month.$error || !ageAvailable
                      }"
                      placeholder="Mes"
                      style="height:38px;"
                      name="birthdate_month"
                    >
                      <option
                        selected
                        value=""
                      >
                        Mes
                      </option>
                      <option
                        v-for="(month, index) in months"
                        :key="month"
                        :value="index"
                      >
                        {{ month }}
                      </option>
                    </select>

                    <div
                      v-if="$v.birthdate_month.$error || !ageAvailable"
                      class="invalid-feedback"
                    >
                      <span v-if="!ageAvailable" />
                      <span v-else>Proporciona tu mes de nacimiento</span>
                    </div>
                  </div>
                  <div
                    class="col-md-4 col-md-2"
                    style="padding-right: 5px; padding-left: 15px;"
                  >
                    <select
                      id="year"
                      v-model.trim="$v.birthdate_year.$model"
                      class="form-control form-control-lg"
                      :class="{
                        'is-invalid': $v.birthdate_year.$error || !ageAvailable
                      }"
                      placeholder="Año"
                      name="birthdate_year"
                      style="height:38px;"
                    >
                      <option
                        selected
                        value=""
                      >
                        Año
                      </option>
                      <option
                        v-for="year in years"
                        :key="year"
                        :value="year"
                      >
                        {{ year }}
                      </option>
                    </select>
                    <div
                      v-if="$v.birthdate_year.$error || !ageAvailable"
                      class="invalid-feedback"
                    >
                      <span v-if="!ageAvailable" />
                      <span v-else>Proporciona tu año de nacimiento</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-12 mt-2">
                <div class="form-check mt-3 ml-3">
                  <input
                    id="terms"
                    v-model="newsletter"
                    class="form-check-input"
                    name="terms"
                    type="checkbox"
                    value="option1"
                  >
                  <label
                    class="form-check-label"
                    style="font-size: 14px"
                  >
                    Acepto recibir otras comunicaciones de Bamba
                  </label>
                </div>

                <div class="form-check mt-3 ml-3">
                  <input
                    id="conditions"
                    v-model="conditions"
                    class="form-check-input"
                    name="conditions"
                    type="checkbox"
                    value="option1"
                  >
                  <label
                    class="form-check-label"
                    style="font-size: 14px"
                  >
                    He leído y acepto
                    <a
                      href=""
                      target="_blank"
                    >Términos y condiciones</a>
                  </label>
                </div>
                <div
                  v-if="!conditions && $v.$dirty"
                  class="terms-invalid ml-3"
                >
                  Acepta los Términos y Condiciones
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 offset-md-4">
            <button
              type="submit"
              class="btn navy-background text-white font-weight-bold mt-4 mb-5 px-5 btn-block"
              @click="trackActive()"
            >
              Activar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {email, maxLength, minLength, numeric, required} from "vuelidate/lib/validators";
import AuthService from "../../services/auth";
import TrackingService from "../../services/tracking";
import FreemiumService from "../../services/freemium";
import AppService from "../../services/app";
import moment from "moment";

const Lockr = require("lockr");

export default {
  name: "PromotionForm",

  data() {
    return {
      plan: {},
      name: "",
      email: "",
      lastname1: "",
      lastname2: "",
      phone: "",
      gender: "",
      birthdate_day: "",
      birthdate_month: "",
      birthdate_year: "",
      cellphoneAlreadyRegistered: false,
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      years: [],
      days: 31,
      trackingService: "",
      newsletter: false,
      conditions: false,
      ageAvailable: true
    };
  },

  computed: {
    contactToSave() {
      return {
        name: this.name,
        lastname: this.lastname1,
        second_lastname: this.lastname2,
        email: this.email,
        cellphone: this.phone,
        gender: this.gender,
        birthdate: new Date(
            this.birthdate_year,
            this.birthdate_month,
            this.birthdate_day
        ),
        address: this.plan.address
      };
    }
  },

  watch: {
    phone(val) {
      if (val.length > 10) {
        this.phone = val.slice(0, -1);
        return 0;
      }
      if (!this.$v.phone.$invalid) {
        this.checkIfCellphoneAlreadyRegistered();
      }
    }
  },

  mounted() {
    this.trackingService = new TrackingService(this);
    for (let i = 2006; i >= 1946; i--) {
      this.years.push(i);
    }

    //this.trackingService.visit('activate_freemium');
    this.plan = FreemiumService.getPhoneAssistanceBambaFreemiumPlan();
  },

  validations: {
    gender: {required},
    name: {required},
    lastname1: {required},
    lastname2: {required},
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10)
    },
    conditions: {
      required
    },
    birthdate_day: {
      required
    },
    birthdate_month: {
      required
    },
    birthdate_year: {
      required
    }
  },

  methods: {
    trackActive() {
      this.$ga.event("ContactoActive", "Click", "Envio Formulario");
    },

    async checkIfCellphoneAlreadyRegistered() {
      this.$vs.loading();
      const [error] = await AuthService.checkIfCellphoneAlreadyRegistered(
        this.phone
      );
      this.cellphoneAlreadyRegistered = !!error;
      this.$vs.loading.close();
    },

    async submit() {
      this.$v.$touch();

      const customerDate = this.contactToSave.birthdate;
      const diff = moment().diff(customerDate, "years", true);

      if (diff < 18 || diff > 74.9166) {
        this.ageAvailable = false;
        return this.$vs.notify({
          title: "Oops",
          color: "warning",
          text:
            "El asesor gratis solo está disponible para personas de entre 18 años y 74 años con 11 meses de edad"
        });
      }

      this.ageAvailable = true;

      if (
        !this.$v.$invalid &&
        !this.cellphoneAlreadyRegistered &&
        this.conditions
      ) {
        this.$vs.loading();
        const [error] = await FreemiumService.activateAdvisor(
          this.contactToSave,
          this.plan,
          this.newsletter
        );
        this.$vs.loading.close();
        if (error) {
          const errorMessage = this.getErrorMessage(error);

          return this.$vs.notify({
            title: "Oops",
            text: errorMessage
          });
        }
        /*
        this.trackingService.activateFreemiumPlan(
          this.contactToSave,
          this.plan
        );
        */
        Lockr.set("freemiumActivated", true);

        return this.$router.push({ path: '/promocion/activo' });
      }
    },

    getTermsConditionsUrl() {
      return AppService.getRoute("store2.storev2.terms-and-conditions");
    },

    getErrorMessage(error) {
      const errors = error.response.data.errors;
      for (const [, value] of Object.entries(errors)) {
        if (Object.keys(errors)[0]) {
          return Array.isArray(value) ? value[0] : value;
        }
      }
    }
  }
};
</script>

<style scoped>
.Employer {
  color: #123291;
}

.emp {
  margin-top: 120px;
  margin-bottom: 50px;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

a {
  color: #123291;
  text-decoration: none;
  font-weight: bold;
}

.card {
  background-color: #dcf0fb;
  border: none;
  border-radius: 10px;
  padding: 15px 10px;
}

input,
select {
  border-color: #a0d6f1;
}

input,
select,
textarea {
  background-color: transparent;
  color: #123291;
  font-weight: bold;
  font-size: 16px;
}

textarea::-webkit-input-placeholder,
input::-webkit-input-placeholder,
select::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 16px;
  background-color: transparent;
}

textarea:focus,
input:focus,
select:focus {
  color: #123291;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
}

.semibold {
  font-weight: 600;
}

@media screen and (max-width: 768px) {
  .emp {
    margin-top: 120px;
  }

  .btn {
    display: block;
    width: 100%;
  }
}

@media screen and (max-width: 992px) {
  .hola {
    display: none;
  }
}

.terms-invalid {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}
</style>
