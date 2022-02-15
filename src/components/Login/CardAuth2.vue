<template>
    <div class="card ">
        <div class="card-body p-3 text-center">
      <img
              alt="celular"
              class="mt-3"
              src="../../assets/img/celular.png"
      >
            <h2 class="font-weight-bold mt-3 text-center">
        Ingresa tu celular
      </h2>
            <p class="text-center">Te enviaremos por SMS un PIN de cuatro dígitos.</p>
      <form
        ref="form"
        method="POST"
        action="/send-pin"
        @submit.prevent="validatePhone"
      >
        <div class="row mt-3">
          <div class="col-12">
            <input
                    id="cellphone"
                    v-model.trim="$v.mobile.$model"
                    type="tel"
                    name="cellphone"
                    class="form-control form-control-lg mt-5"
                    placeholder="Ingresa tu número telefónico"
                    :class="{ 'is-invalid': $v.mobile.$error || errorMobile }"
            >
            <div
              v-if="$v.mobile.$error || errorMobile"
              class="invalid-feedback"
            >
              <span v-if="errorMobile">{{ errorMobile }}</span>
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
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <!--
                    <p class="NoCode mt-4 pb-2 text-center cursor-pointer">
                        No recuerdo mi celular registrado
                    </p>
                    -->
        </div>
        <div class="mx-5">
          <button
                  class="btn btn-secondary mt-5 mb-5 text-white w-100"
                  type="submit"
                  style="border-radius: 24px !important; "
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
        <login3/>
  </div>
</template>

<script>
  import {maxLength, minLength, numeric, required} from "vuelidate/lib/validators";
  import AuthService from "../../services/auth";
  import login3 from "./Login3";
  /* import AppService from "./../../services/app"; */

export default {
  name: "CardAuth2",
    components: {
        login3
    },
  props: ["messages"],

  data() {
    return {
      showEnterCode: false,
      mobile: "",
      errorMobile: ""
    };
  },

  mounted() {
    /* if (AppService.isUserIsLoggedIn()) {
            window.location = AppService.getRoute('store2.storev2.home');
        } */
  },

  validations: {
    mobile: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(10)
    }
  },

  methods: {
    async validatePhone(/* e */) {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$vs.loading();

        const [error] = await AuthService.askForPin(this.mobile);

        setTimeout(() => {
          this.$vs.loading.close();
          if (error) {
            this.errorMobile = error.response.data.cellphone
              ? error.response.data.cellphone[0]
              : "Error, intenta más tarde";
            return 0;
          }
          AuthService.setMobile(this.mobile);
          $('#code').modal('show')
        }, 800);


      }
    }
  }
};
</script>

<style scoped>
.card {
    background-color: #ffffff;
  border-radius: 15px;
    border: none;
}

.orange-background {
  background-color: #ff787d;
  border: none;
  border-radius: 10px;
  font-size: 16px;
}

input {
  color: #123291;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid #123291;
  font-size: 16px;
  border-radius: 10px;
}

input::-webkit-input-placeholder {
  color: #123291;
}

input:focus {
  color: #123291;
  font-weight: bold;
  background-color: transparent;
}

.NoCode {
  border-bottom: 1px solid #123291;
}

.invalid-feedback {
  color: #fe9b9d;
}

.is-invalid {
  border-color: #fe9b9d;
}
</style>
