<template>
  <div class="Promotion container">
    <div class="row align-items-center px-3 mx-0">
      <div class="col-lg-8 text-left text-bold">
        <h2>
          ¡Gracias por registrarte!
        </h2>
        <h5 class="mb-5">
          Ahora cuentas con un asesor Bamba GRATIS.
        </h5>
        <div class="card card_3 border-0 p-4">
          <strong class="sms">
            Recibirás un SMS con la liga para acceder a tu Asesor Bamba®
            gratuito y desde ahí podrás activar tu orientación médica telefónica
            GRATUITA.<br>
            Úsala cuando lo necesites.
          </strong>
        </div>
      </div>
      <div class="col-4">
        <img
          alt="plan"
          class="BAM img-flud w-70"
          src="../../assets/img/promo-thanks.png"
        >
      </div>
    </div>
    <div class="row mt-md-5 mt-4 text-center">
      <div class="col-md-6">
        <router-link to="/nuestros-planes">
          <button
            type="submit"
            class="btn navy-background text-white font-weight-bold mt-2 mt-md-4 mb-md-5 px-5"
          >
            Conoce nuestros planes
          </button>
        </router-link>
      </div>
      <div class="col-md-6">
        <router-link to="/arma-tu-plan">
          <button
            type="submit"
            class="btn navy-background text-white font-weight-bold mt-3 mt-md-4 mb-md-5 px-5"
          >
            Arma tu plan
          </button>
        </router-link>
      </div>
    </div>
    <div class="text-center mt-3 mb-5">
      <h2>¿Quiéres comprar en línea y tienes dudas?</h2>
      <h4 class="mt-4">
        Llama o escribe al:
        <img
          alt="whatsapp"
          class="mr-2"
          src="../../assets/img/whats_01.png"
        >
        <a
          href="https://api.whatsapp.com/send?phone=525545850371&amp;text=¡Hola!"
          target="_blank"
        >
          55-45-85-03-71
        </a>
      </h4>
    </div>
  </div>
</template>

<script>
const Lockr = require("lockr");
import FreemiumService from "../../services/freemium";

export default {
  name: "PromoSuccess",

  data() {
    return {
      plan: FreemiumService.getPhoneAssistanceBambaFreemiumPlan(),
      routes: {}
    };
  },

  mounted() {
    if (Lockr.get("freemiumActivated")) {
      Lockr.rm("freemiumActivated");
      return 0;
    }

    return this.$router.push({ path: "/" });
  }
};
</script>

<style scoped>
.Promotion {
  margin-top: 100px;
}

.w-70 {
  width: 60%;
}

.card_3 {
  border-radius: 10px;
  background-color: #dcf0fb;
}

.px-8 {
  padding-left: 5rem;
  padding-right: 5rem;
}

.font-size-xl {
  font-size: 1.2rem;
}

.semibold {
  font-weight: 600;
}

input,
select,
textarea {
  background-color: #dcf0fb;
  color: #123291;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 10px;
}

textarea::-webkit-input-placeholder,
input::-webkit-input-placeholder,
select::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 16px;
  background-color: #dcf0fb;
}

textarea:focus,
input:focus,
select:focus {
  color: #123291;
  font-size: 16px;
  font-weight: bold;
  background-color: #dcf0fb;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

@media screen and (max-width: 768px) {
  .px-8 {
    padding-left: 2.5rem;
    padding-right: 2rem;
  }
}

@media screen and (max-width: 992px) {
  .BAM {
    display: none;
  }
}

.coupon {
  font-size: 1.2rem;
}

.sms {
  font-size: 1.2rem;
}

.promo {
  font-size: 1.6rem;
}
</style>
