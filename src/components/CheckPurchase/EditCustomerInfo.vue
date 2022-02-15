<template>
  <div
    class="EditInfo px-1 mb-3"
    data-test="customer-info"
  >
    <div class="row mx-0">
      <div
        class="col-12 col-lg-6 offset-lg-1 text-left"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="200"
      >
        <h1 class="text-left font-weight-bold">
          Editar mis datos
        </h1>
        <router-link to="/arma-tu-plan/pago">
          <small class="font-weight-bold">
            <i class="fas fa-arrow-left mr-2 red-color" />Regresar
          </small>
        </router-link>
        <form @submit.prevent="processForm">
          <div class="form-row mt-4">
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="name"
                autocomplete="none"
                type="text"
                name="name"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.name.$error }"
                placeholder="Nombre:*"
              >
              <div
                v-if="$v.name.$error"
                class="invalid-feedback"
              >
                El campo nombre es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="lastname"
                autocomplete="none"
                type="text"
                name="lastname"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.lastname.$error }"
                placeholder="Apellido Paterno:*"
              >
              <div
                v-if="$v.lastname.$error"
                class="invalid-feedback"
              >
                El campo apellido paterno es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="second_lastname"
                autocomplete="none"
                type="text"
                name="second_lastname"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.second_lastname.$error }"
                placeholder="Apellido Materno:*"
              >
              <div
                v-if="$v.second_lastname.$error"
                class="invalid-feedback"
              >
                El campo apellido materno es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="email"
                autocomplete="none"
                type="email"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.email.$error }"
                placeholder="Correo Electrónico:*"
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
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="cellphone"
                autocomplete="none"
                type="tel"
                class="form-control form-control-lg input-group input-group-lg"
                placeholder="Celular:*"
                name="cellphone"
                :class="{'is-invalid': $v.cellphone.$error || cellphoneAlreadyRegistered || cellphoneInBeneficiaryForm }"
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

            <div class="col-4 col-md-2 mt-4">
              <select
                id="day"
                v-model.trim="$v.birthdate_day.$model"
                class="form-control form-control-lg"
                :class="{'is-invalid': $v.birthdate_day.$error }"
                placeholder="Día"
                name="birthdate_day"
                style="height:38px;"
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
              <small class="date form-text">Fecha de nacimiento*</small>
              <div
                v-if="$v.birthdate_day.$error"
                class="invalid-feedback"
              >
                Proporciona el día de nacimiento del beneficiario
              </div>
            </div>
            <div class="col-4 col-md-2 mt-4">
              <select
                id="month"
                v-model.trim="$v.birthdate_month.$model"
                class="form-control form-control-lg"
                :class="{'is-invalid': $v.birthdate_month.$error }"
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
                v-if="$v.birthdate_month.$error"
                class="invalid-feedback"
              >
                Proporciona el mes de nacimiento del beneficiario
              </div>
            </div>
            <div class="col-4 col-md-2 mt-4">
              <select
                id="year"
                v-model.trim="$v.birthdate_year.$model"
                class="form-control form-control-lg"
                :class="{'is-invalid': $v.birthdate_year.$error }"
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
                v-if="$v.birthdate_year.$error"
                class="invalid-feedback"
              >
                Proporciona el año de nacimiento del beneficiario
              </div>
            </div>
          </div>

          <div class="form-row mt-4">
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="street"
                autocomplete="none"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.street.$error }"
                placeholder="Calle:*"
                name="street"
              >
              <div
                v-if="$v.street.$error"
                class="invalid-feedback"
              >
                El campo calle es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-6 mt-3">
              <input
                v-model.trim="ext_number"
                autocomplete="none"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.ext_number.$error }"
                placeholder="Número exterior:*"
                name="ext_number"
              >
              <div
                v-if="$v.ext_number.$error"
                class="invalid-feedback"
              >
                El campo número exterior es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="int_number"
                autocomplete="none"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.int_number.$error }"
                placeholder="Número interior:"
                name="int_number"
              >
              <div
                v-if="$v.int_number.$error"
                class="invalid-feedback"
              >
                El campo número interior es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="cp"
                autocomplete="none"
                type="number"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.cp.$error }"
                placeholder="Código Postal:*"
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
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="state"
                autocomplete="none"
                type="tel"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.state.$error }"
                placeholder="Estado:*"
                name="state"
              >
              <div
                v-if="$v.state.$error"
                class="invalid-feedback"
              >
                El campo estado es obligatorio
              </div>
            </div>
            <div class="col-12 col-md-6 mt-4">
              <select
                id="colony"
                v-model.trim="colony"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.colony.$error }"
                placeholder="Colonia"
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
            <div class="col-12 col-md-6 mt-4">
              <input
                v-model.trim="town"
                autocomplete="none"
                type="text"
                class="form-control form-control-lg input-group input-group-lg"
                :class="{'is-invalid': $v.town.$error }"
                placeholder="Municipio:*"
              >
              <div
                v-if="$v.town.$error"
                class="invalid-feedback"
              >
                El campo municipio es obligatorio
              </div>
            </div>
            <div class="col-12 mt-2">
              <small
                class="red-color font-weight-bold"
              >*Datos Obligatorios</small>
            </div>
          </div>

          <button
            class="btn green-background my-4"
            data-test="save-button"
            @click="processForm()"
          >
            Guardar datos
          </button>
        </form>
      </div>
      <div
        class="col-12 col-lg-5 mt-3"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="200"
      >
        <img
          class="draw1"
          src="../../assets/img/draw1resumen.png"
          alt="draw1"
          style="width:100%;"
        >
      </div>
    </div>

    <modal-alert />
  </div>
</template>

<script>
import {email, maxLength, minLength, numeric, required} from "vuelidate/lib/validators";
import CustomerService from "./../../services/customer";
import SepomexService from "../../services/sepomex";
import AuthService from "../../services/auth";
import AppService from "../../services/app";
import Payment from "../../services/payment";
import EventBus from "../../events";
import PlanService from "../../services/plan";
import ModalService from "../../services/modals";
import ModalAlert from "./../ModalAlert";

const Lockr = require("lockr");

export default {
  name: "EditCustomerInfo",

  components: {
    ModalAlert
  },

  data() {
    return {
      routes: [],
      name: "",
      lastname: "",
      second_lastname: "",
      birthdate: "",
      cellphone: "",
      birthdate_day: "",
      birthdate_month: "",
      birthdate_year: "",
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
      cellphoneInBeneficiaryForm: false,
      isPromoter: false
    };
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
    birthdate_day: {
      required
    },
    birthdate_month: {
      required
    },
    birthdate_year: {
      required
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
    }
  },

  computed: {
    customerToSave() {
      return {
        name: this.name,
        maternalLastname: this.second_lastname,
        paternalLastname: this.lastname,
        email: this.email,
        cellphone: this.cellphone,
        birthdate_day: this.birthdate_day,
        birthdate_month: this.birthdate_month,
        birthdate_year: this.birthdate_year,
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

  mounted() {
    for (let i = 2006; i >= 1951; i--) {
      this.years.push(i);
    }
    this.years.reverse();
    const customer = CustomerService.getCustomer();
    this.name = customer.name;
    this.lastname = customer.paternalLastname;
    this.second_lastname = customer.maternalLastname;
    this.email = customer.email;
    this.cellphone = customer.cellphone;
    this.birthdate_day = customer.birthdate_day;
    this.birthdate_month = customer.birthdate_month;
    this.birthdate_year = customer.birthdate_year;
    this.street = customer.address.street;
    this.state = customer.address.state;
    this.ext_number = customer.address.ext_number;
    this.int_number = customer.address.int_number;
    this.cp = customer.address.cp;
    this.colony = customer.address.colony;
    this.town = customer.address.town;
    this.getZipCodeInfo();
    this.isPromoter = AppService.getIsPromoter();
  },

  methods: {
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
          this.cp = "";
          this.$vs.notify({
            title: "Oops",
            text: "Parece ser que ingresaste un C.P. inválido",
            color: "danger"
          });
        }
      }
    },
    async processForm() {
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

      if (!this.$v.$invalid) {

        CustomerService.saveCustomerData(this.customerToSave);

        const orderId = Lockr.get("orderId");
        if (orderId) {
          this.$vs.loading();

          const [errorOrder] = await Payment.updateOrderCustomer(
            orderId,
            CustomerService.getFormatedCustomer()
          );

          if (errorOrder) {
            if (errorOrder) {
              window.$("#alert").modal("show");
              return EventBus.$emit("alertMessage", {
                message: "No se pudo actualizar la orden",
                title: "Error",
                type: "error"
              });
            }
          }
        }

        this.$vs.loading();

        setTimeout(() => {
          this.$vs.loading.close();
          this.$router.push({ path: '/arma-tu-plan/pago' })
        }, 300);
      }
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.green-background {
  background-color: #4CC72F;
  border: none;
  color: #123291;
  font-weight: bold;
}

.EditInfo {
  color: #123291;
  margin-top: 120px;
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

select,
input {
  background-color: transparent;
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
  font-size: 16px;
}

select,
label,
input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 16px;
}

select:focus,
input:focus {
  color: #123291;
  font-size: 16px;
  font-weight: bold;
}

@media screen and (max-width: 992px) {
  .draw1 {
    display: none;
  }
}

</style>
