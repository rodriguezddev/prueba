<template>
  <div
    :id="'collapseExample' + indexPackage + indexBeneficiary"
    class="collapse px-3 animate__animated animate__fadeIn"
    data-test="beneficiary-form"
  >
    <form>
      <div class="form-row mt-4">
        <div class="col-12 col-md-6 mt-2">
          <input
            v-model.trim="$v.name.$model"
            type="text"
            autocomplete="none"
            name="name"
            class="form-control form-control-lg input-group input-group-lg"
            :class="{ 'is-invalid': $v.name.$error }"
            placeholder="Nombre:*"
          >
          <div
            v-if="$v.name.$error"
            class="invalid-feedback"
          >
            Proporciona el nombre del beneficiario
          </div>
        </div>

        <div class="col-12 col-md-6 mt-2">
          <input
            v-model.trim="$v.paternalLastname.$model"
            type="text"
            autocomplete="none"
            name="paternal_lastname"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': $v.paternalLastname.$error }"
            placeholder="Apellido paterno:*"
          >
          <div
            v-if="$v.paternalLastname.$error"
            class="invalid-feedback"
          >
            Proporciona el apellido paterno del beneficiario
          </div>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="col-12 col-md-6 mt-2">
          <input
            v-model.trim="$v.maternalLastname.$model"
            type="text"
            autocomplete="none"
            name="maternal_lastname"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': $v.maternalLastname.$error }"
            placeholder="Apellido materno:*"
          >
          <div
            v-if="$v.maternalLastname.$error"
            class="invalid-feedback"
          >
            Proporciona el apellido paterno del beneficiario
          </div>
        </div>

        <div class="col-12 col-md-6 mt-2">
          <input
            v-model.trim="$v.email.$model"
            type="email"
            autocomplete="none"
            name="email"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': $v.email.$error }"
            placeholder="Correo Electrónico:(opcional)"
          >
          <div
            v-if="$v.email.$error"
            class="invalid-feedback"
          >
            <span
              v-if="!$v.email.required"
            >Proporciona el email del beneficiario</span>
            <span v-if="!$v.email.email">Proporciona un email válido</span>
          </div>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="col-12 col-md-6 mt-2">
          <input
            v-model.trim="$v.mobile.$model"
            type="tel"
            autocomplete="none"
            name="mobile"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': $v.mobile.$error || mobileAlreadyAdded }"
            placeholder="Celular:*"
          >
          <div
            v-if="$v.mobile.$error || mobileAlreadyAdded === true"
            class="invalid-feedback"
          >
            <span
              v-if="!$v.mobile.required"
            >Proporciona el celular del beneficiario</span>
            <span
              v-if="!$v.mobile.numeric"
            >Este campo solo acepta números</span>
            <span
              v-if="
                $v.mobile.numeric &&
                  (!$v.mobile.maxLength || !$v.mobile.minLength)
              "
            >Este campo debe contener 10 dígitos</span>
            <span
              v-if="mobileAlreadyAdded"
            >Este celular ya ha sido registrado para otro beneficiario</span>
          </div>
        </div>

        <div class="col-4 col-md-2 mt-2">
          <select
            id="day"
            v-model.trim="$v.birthdate_day.$model"
            name="birthdate_day"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': $v.birthdate_day.$error }"
            placeholder="Día"
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
              {{
                day
              }}
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
        <div class="col-4 col-md-2 mt-2">
          <select
            id="month"
            v-model.trim="$v.birthdate_month.$model"
            name="birthdate_month"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': $v.birthdate_month.$error }"
            placeholder="Mes"
            style="height:38px;"
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
        <div class="col-4 col-md-2 mt-2">
          <select
            id="year"
            v-model.trim="$v.birthdate_year.$model"
            name="birthdate_year"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': $v.birthdate_year.$error }"
            placeholder="Año"
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
              {{
                year
              }}
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
      <div class="form-row mt-1">
        <div class="col-12 col-md-6 mt-2">
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
      </div>
      <div
        v-if="pack.ourPlanType"
        class="mt-4"
      >
        <div
          v-for="addon in addons"
          :key="addon.id"
          class="form-check text-left"
        >
          <input
            :id="
              'radio' + indexPackage + '_' + indexBeneficiary + '_' + addon.id
            "
            v-model="addon.selected"
            class="form-check-input"
            type="checkbox"
            @click="toggleAddon(addon)"
          >
          <label
            :for="
              'radio' + indexPackage + '_' + indexBeneficiary + '_' + addon.id
            "
            class="form-check-label"
          >
            <span
              v-if="addon.sale_price"
            >Agregar {{ addon.name }} -
              {{ addon.sale_price | currency }}</span>
            <span
              v-else
            >Agregar {{ addon.name }} -
              {{ addon.sale_price | currency }}</span>
          </label>
        </div>
      </div>
    </form>
    <div class="resume mt-5 text-left">
      <div class="row justify-content-between mb-4 font-weight-bold">
        <div class="col-6 text-left">
          <h4>Total del plan:</h4>
        </div>
        <div class="col-6 text-right">
          <h4 data-test="plan-price">
            {{ pricePackage | currency }}
          </h4>
        </div>
      </div>
      <div class="row justify-content-between mb-3">
        <div class="col-md-6 mb-2">
          <small style="text-align: justify">
            Esta es una suscripción anual con renovación automática al término
            de la vigencia. Puedes desactivar la renovación automática en
            cualquier momento y hasta 1 mes antes del término de la vigencia
            llamando al 55 3986 2354.
          </small>
        </div>
        <div class="col-md-6">
          <button
            type="button"
            data-test="save-button"
            class="btn green-background text-white btn-block pl-5"
            @click="saveData()"
          >
            Guardar Datos
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {email, maxLength, minLength, numeric, required} from "vuelidate/lib/validators";
    import PlanService from "../../services/plan";
    import EventBus from "../../events";

    export default {
  name: "BeneficiaryForm",

  props: ["indexPackage", "indexBeneficiary", "beneficiary", "pack"],

  data() {
    return {
      addons: [
        {
          id: 1,
          name: "Pago de Nómina",
          price: 1000,
          selected: false
        },
        {
          id: 2,
          name: "Pago Seguro de Accidentes",
          price: 2000,
          selected: false
        },
        {
          id: 3,
          name: "Pago Consultas Telefónicas",
          price: 3000,
          selected: false
        }
      ],
      name: "",
      maternalLastname: "",
      paternalLastname: "",
      email: "",
      mobile: "",
      birthdate_day: "",
      birthdate_month: "",
      birthdate_year: "",
      gender: "",
      addPagoNomina: false,
      addSeguroAccidentes: false,
      addConsultasTelefonicas: false,
      pricePackage: 0,
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
      mobileAlreadyAdded: false,
      trackingService: ""
    };
  },

  computed: {
    beneficiaryToSave() {
      return {
        alias: this.alias,
        name: this.name,
        maternalLastname: this.maternalLastname,
        paternalLastname: this.paternalLastname,
        email: this.email,
        mobile: this.mobile,
        birthdate_day: this.birthdate_day,
        birthdate_month: this.birthdate_month,
        birthdate_year: this.birthdate_year,
        gender: this.gender,
        occupation: this.occupation,
        state: this.state,
        city: this.city,
        addPagoNomina: this.addPagoNomina,
        addSeguroAccidentes: this.addSeguroAccidentes,
        addConsultasTelefonicas: this.addConsultasTelefonicas
      };
    }
  },

  watch: {
    mobile: function (val) {
      this.mobileAlreadyAdded = PlanService.checkIfCellphoneIsAlreadyAdded(
          val,
          this.indexPackage,
          this.indexBeneficiary
      );

      if (val.length > 10) {
        this.mobile = val.slice(0, -1);
        return 0;
      }
    }
  },

  mounted() {

      for (let i = 2006; i >= 1951; i--) {
      this.years.push(i);
    }
    this.years.reverse();
    this.name = this.beneficiary.name;
    this.maternalLastname = this.beneficiary.maternalLastname;
    this.paternalLastname = this.beneficiary.paternalLastname;
    this.email = this.beneficiary.email;
    this.mobile = this.beneficiary.mobile;
    this.birthdate_day = this.beneficiary.birthdate_day;
    this.birthdate_month = this.beneficiary.birthdate_month;
    this.birthdate_year = this.beneficiary.birthdate_year;
    this.gender = this.beneficiary.gender;
    if (this.beneficiary.addons) {
      this.addons = this.beneficiary.addons;
    } else {
      this.addons = this.pack.ourPlanType
        ? this.pack.plans[0].addons.map(el => ({ ...el, selected: false }))
        : [];
    }
    this.pricePackage = PlanService.getSubtotalBeneficiary(
      this.indexPackage,
      this.indexBeneficiary
    );

    EventBus.$on("deleteBeneficiary", indexBeneficiary => {
      if (
        this.pack.beneficiaries.length - 1 >= this.indexBeneficiary + 1 &&
        indexBeneficiary <= this.indexBeneficiary
      ) {
        this.name = this.pack.beneficiaries[this.indexBeneficiary + 1].name;
        this.maternalLastname = this.pack.beneficiaries[
          this.indexBeneficiary + 1
        ].maternalLastname;
        this.paternalLastname = this.pack.beneficiaries[
          this.indexBeneficiary + 1
        ].paternalLastname;
        this.email = this.pack.beneficiaries[this.indexBeneficiary + 1].email;
        this.mobile = this.pack.beneficiaries[this.indexBeneficiary + 1].mobile;
        this.birthdate_day = this.pack.beneficiaries[
          this.indexBeneficiary + 1
        ].birthdate_day;
        this.birthdate_month = this.pack.beneficiaries[
          this.indexBeneficiary + 1
        ].birthdate_month;
        this.birthdate_year = this.pack.beneficiaries[
          this.indexBeneficiary + 1
        ].birthdate_year;
        this.gender = this.pack.beneficiaries[this.indexBeneficiary + 1].gender;
      }
    });
  },

  validations: {
    name: {
      required
    },
    maternalLastname: {
      required
    },
    paternalLastname: {
      required
    },
    email: {
      email
    },
    mobile: {
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
    gender: {
      required
    }
  },

  methods: {
    saveData() {
      this.$v.$touch();
      if (!this.$v.$invalid && this.mobileAlreadyAdded === false) {
        window
          .$("#collapseExample" + this.indexPackage + this.indexBeneficiary)
          .collapse("hide");
        PlanService.saveBeneficiariesData(
          this.indexPackage,
          this.indexBeneficiary,
          this.beneficiaryToSave
        );
        PlanService.saveAddons(
          this.indexPackage,
          this.indexBeneficiary,
          this.addons
        );
        EventBus.$emit("updateSubtotal");
        EventBus.$emit(
          "updateName",
          this.beneficiaryToSave,
          this.indexBeneficiary,
          this.indexPackage
        );
      }
    },

    toggleAddon(addon) {
      this.pricePackage = this.getPricePackage(addon);

      EventBus.$emit("updateSubtotalPricePackage", {
        price: this.pricePackage,
        indexPackage: this.indexPackage,
        indexBeneficiary: this.indexBeneficiary
      });
    },

    getPricePackage(addon) {
      if (addon.selected) {
        return this.pricePackage - addon.sale_price;
      }

      return this.pricePackage + addon.sale_price;
    }
  }
};
</script>

<style scoped>
input,
select {
  background-color: transparent;
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}

select,
label,
input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}

select:focus,
input:focus {
  background-color: transparent;
  color: #123291;
  font-size: 14px;
  font-weight: bold;
}

ul {
  list-style: none;
  padding: 0;
  margin-left: 10px;
  font-size: 14px;
}

.prices p {
  font-size: 14px;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.date {
  font-size: 10px;
}

.invalid-feedback {
  color: #fe9b9d;
}

.is-invalid {
  border-color: #fe9b9d;
}

.is-invalid:focus {
  border-color: #fe9b9d;
  box-shadow: 0 0 0 0.2rem rgba(254, 155, 157, 0.25);
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.green-background {
  background-color: #4cc72f;
  border: none;
  color: #123291;
  font-weight: bold;
}

@media (max-width: 991px) {
  .mt-3 {
    margin-top: 0rem !important;
  }
}
</style>
