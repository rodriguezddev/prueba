<template>
  <div class="accessCode px-3 pb-3 pt-4 text-center">
    <img
      alt="codigo"
      src="../../assets/img/codigo.png"

    >
    <h1 class="font-weight-bold mt-3 text-center font-size-medium">
      Ingresa tu código de seguridad
    </h1>
    <p class="mt-4 text-center px-3">
      Recibirás un código de seguridad en tu celular ********{{ cellphone }}
    </p>
    <p class="font-weight-bold mt-3 px-5 text-center">
      Escríbe tu código
    </p>
    <div class="row mt-3 px-lg-5 px-4">
      <div class="col-3 code-input">
        <input
                ref="code1"
                v-model="code1"
                type="text"
                class="input-bamba form-control-lg text-center"
                maxlength="1"
                name="code1"
                :class="{ 'is-invalid': errorPin }"
        >
      </div>
      <div class="col-3 code-input">
        <input
                ref="code2"
                v-model="code2"
                class="input-bamba form-control-lg"
                maxlength="1"
                name="code2"
                type="text"
                :class="{ 'is-invalid': errorPin }"
        >
      </div>
      <div class="col-3 code-input">
        <input
                ref="code3"
                v-model="code3"
                class="input-bamba form-control-lg"
                maxlength="1"
                name="code3"
                type="text"
                :class="{ 'is-invalid': errorPin }"
        >
      </div>
      <div class="col-3 code-input">
        <input
                ref="code4"
                v-model="code4"
                type="text"
                class="input-bamba form-control-lg mr-0"
                maxlength="1"
                name="code4"
                :class="{ 'is-invalid': errorPin }"
        >
      </div>
    </div>

    <div class="mt-2 invalid-feedback-div">
      {{ errorMessage }}
    </div>
    <!--
    <div class="row justify-content-center">
        <p class="NoCode mt-4 pb-2 text-center cursor-pointer">
            No recibí el código de seguridad
        </p>
    </div>
    -->
    <div>
      <p class="text-danger text-center" id="warning" style="display:none">Codigo invalido, intentalo de nuevo</p>
    </div>
    <p class="mt-5 px-3 text-center">
      Si no recibiste el código de seguridad y eres cliente, escribe al
      <a
        href="whatsapp://send?abid=phonenumber&text=Hola!"
      ><strong>5520853685</strong></a>
    </p>

    <div class="row align-items-center justify-content-between">
      <div class="col-12">
        <button
                :disabled="code.length !== 4"
                class="btn btn-secondary mt-3 mb-5 text-white w-100"
                style="border-radius: 24px !important; "
                @click="validateCode()"
        >
          Validar Código
          <div id="proces" style="display:none">
            <div class="loader"></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import EventBus from "../../events";
  import AuthService from "./../../services/auth";
  import CustomerService from "./../../services/customer";
  import PlanService from "./../../services/plan";
  import TrackingService from "./../../services/tracking";


  export default {
  name: "CardAuth3",

  data() {
    return {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      errorPin: false,
      errorMessage: "",
      cellphone: "",
      trackingService: "",

    };
  },

  computed: {
    code() {
      return `${this.code1}${this.code2}${this.code3}${this.code4}`;
    }
  },

  watch: {
    // handle auto-focus to next field
    // Note: since CVC can be 3 OR 4 digits we don't watch it
    code1: function(val) {
      if (val.length === 1) {
        this.$refs.code2.focus();
      }
    },
    code2: function(val) {
      if (val.length === 1) {
        this.$refs.code3.focus();
      }
      if (val.length === 0) {
        this.$refs.code1.focus();
      }
    },
    code3: function(val) {
      if (val.length === 1) {
        this.$refs.code4.focus();
      }
      if (val.length === 0) {
        this.$refs.code2.focus();
      }
    },
    code4: function (val) {
      if (val.length === 0) {
        this.$refs.code3.focus();
      }
    }
  },

  mounted() {
    this.cellphone = AuthService.getMobile();
    this.cellphone = this.cellphone.slice(-2);

    this.trackingService = new TrackingService(this);
  },

  methods: {
    returnToMobileLogin() {
      EventBus.$emit("returnToMobileLogin");
    },

    async validateCode() {
      EventBus.$emit("validateCode", this.code);
      document.getElementById("proces").style.display = "block"

      const [error, response] = await AuthService.loginWithPin(this.code);
      document.getElementById("proces").style.display = "none"
      if (error) {
        this.errorPin = true;
        this.errorMessage = error.response.data.pin
                ? error.response.data.pin[0]
                : "Oops, ocurrió un error, intenta más tarde";
        return 0;
      }
      CustomerService.setCustomerFromAuthUser(response.user);
      //this.trackingService.login(AuthService.getMobile());
      EventBus.$emit("login");
      this.getRedirectToUrl(response);

      $('#code').modal('hide');
      $('#sendcode').modal('hide');
    },
    getRedirectToUrl(response) {
      const packages = PlanService.getPackages();

      if (!packages.length) {
        return this.$router.push({ path: "/" });
      }

      if (response.user.is_promoter) {
        return this.$router.push({ path: "/sign-up" });
      }

      return this.$router.push({ path: "/arma-tu-plan/pago" });
    }
  }
};
</script>

<style scoped>
.navy-background {
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
  text-align: center;
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

.prev {
  color: #123291;
}

a {
  text-decoration: none;
}

.invalid-feedback-div {
  color: #fe9b9d;
}

.code-input {
  padding-left: 5px;
  padding-right: 5px;
}

.form-control.is-invalid,
.was-validated .form-control:invalid {
  background-image: none;
  padding-right: 0;
}

.modal-backdrop {
  opacity: 0 !important;
}

@media screen and (min-width: 768px) {
  .code-input {
    padding-left: 15px;
    padding-right: 15px;
  }

  .form-control.is-invalid,
  .was-validated .form-control:invalid {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    padding-right: calc(1.5em + 0.75rem);
  }
}


/* Preloder */

#proces {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  min-height: 80vh;
  background-color: rgba(253, 253, 253, 0.78);
  /*  background-color: #1086B5;
  background-image: url("lamp-icon.svg"); */
  align-items: center;
  text-align: center;
}

.loader {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  border-radius: 60px;
  animation: loader 0.8s linear infinite;
  -webkit-animation: loader 0.6s linear infinite;
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    border: 3px solid #123291;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    border: 3px solid rgba(18, 50, 145, 0.35);
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    border: 3px solid rgba(18, 51, 168, 0.31);
    border-left-color: transparent;
  }
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    border: 3px solid #123291;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    border: 3px solid rgba(18, 50, 145, 0.35);
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    border: 3px solid rgba(18, 51, 168, 0.31);
    border-left-color: transparent;
  }
}
</style>
