<template>
  <div class="customerinfo mt-5 px-3 pl-md-5 text-left">
    <div v-if="isNewOrExistingCardControlsEnabled">
      <div class="row">
        <div class="col pl-0">
          <h3>¿Quieres pagar con una tarjeta guardada o nueva?</h3>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <label>
            <input
              v-model="payWithNewCard"
              name="new_or_saved_card"
              type="radio"
              :value="false"
            >
            Pagar con la última tarjeta utilizada.
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>
            <input
              v-model="payWithNewCard"
              name="new_or_saved_card"
              type="radio"
              :value="true"
            >
            Pagar con nueva tarjeta.
          </label>
        </div>
      </div>
    </div>

    <div
      v-if="!payWithNewCard"
      data-test="saved-card"
    >
      <div class="row mt-5">
        <div class="col-12 col-lg-8 pl-0">
          <h3>Tarjeta guardada</h3>
          <p
            v-if="!payWithNewCard && userCard"
            class="mt-4"
          >
            <span v-if="userCard.isCredit">
              (Crédito)
            </span>
            <span v-if="!userCard.isCredit">
              (Débito)
            </span>
            {{ userCard.number }} - {{ userCard.bankName }} -
            {{ userCard.holder }}
          </p>
        </div>
      </div>
      <div
        v-if="userCard.isCredit"
        class="row"
      >
        <div class="col">
          <payment-installments :total="order.total" />
        </div>
      </div>
    </div>

    <div
      v-if="payWithNewCard"
      class="row mt-5"
      data-test="card-payment-method-form"
    >
      <div class="col-12 col-lg-8 pl-0">
        <h3>Tipo de tarjeta:</h3>
        <div class="row text-center mt-4">
          <div class="col-6">
            <input
              id="exampleRadios1"
              v-model="cardType"
              class="form-check-input"
              name="debit"
              type="radio"
              value="1"
            >
            <label
              class="form-check-label cursor-pointer"
              for="exampleRadios1"
            >
              Tarjeta Débito
            </label>
          </div>
          <div class="col-6">
            <input
              id="exampleRadios2"
              v-model="cardType"
              class="form-check-input"
              name="credit"
              type="radio"
              value="2"
            >
            <label
              class="form-check-label cursor-pointer"
              for="exampleRadios2"
            >
              Tarjeta Crédito
            </label>
          </div>
        </div>

        <div class="card-wrapper mt-4" />
        <form class="mt-4">
          <div class="col-12">
            <input
              v-model.trim="$v.cardName.$model"
              :class="{ 'is-invalid': $v.cardName.$error }"
              class="form-control form-control-lg input-group input-group-lg"
              name="name"
              placeholder="Nombre como aparece en la tarjeta"
              type="text"
            >
            <div
              v-if="$v.cardName.$error"
              class="invalid-feedback"
            >
              Proporciona el nombre del beneficiario
            </div>
          </div>

          <div class="col-12 mt-3">
            <input
              ref="cardNumInput"
              v-model="cardNumber"
              :class="{ 'is-invalid': !!cardErrors.cardNumber }"
              class="form-control form-control-lg input-group input-group-lg"
              name="number"
              placeholder="Número de tarjeta"
              type="text"
            >
            <div
              v-if="cardErrors.cardNumber"
              class="invalid-feedback"
            >
              <small>{{ cardErrors.cardNumber }}</small>
            </div>
          </div>

          <div class="row mt-3 px-3">
            <div class="col-6">
              <input
                id="card-exp"
                ref="cardExpInput"
                v-model="cardExpiry"
                v-cardformat:formatCardExpiry
                :class="{ 'is-invalid': !!cardErrors.cardExpiry }"
                :data-error="!!cardErrors.cardExpiry"
                :maxlength="5"
                class="form-control form-control-lg input-group input-group-lg"
                name="expiry"
                placeholder="Fecha de expiración"
                type="text"
              >
              <div
                v-if="cardErrors.cardExpiry"
                class="invalid-feedback"
              >
                <small>{{ cardErrors.cardExpiry }}</small>
              </div>
            </div>

            <div class="col-6">
              <input
                ref="cardCvcInput"
                v-model="cardCvc"
                v-cardformat:formatCardCVC
                :class="{ 'is-invalid': !!cardErrors.cardCvc }"
                :data-error="!!cardErrors.cardCvc"
                class="form-control form-control-lg input-group input-group-lg"
                name="cvc"
                placeholder="CVV"
                type="text"
              >
              <div
                v-if="cardErrors.cardCvc"
                class="invalid-feedback"
              >
                <small>{{ cardErrors.cardCvc }}</small>
              </div>
            </div>
          </div>

          <div class="row mt-3 px-3">
            <div
              v-show="cardType === 2 || cardType === '2'"
              class="col-12 mb-2"
            >
              <payment-installments :total="order.total" />
              <div
                v-if="$v.msiOption.$error"
                class="invalid-feedback"
              >
                Proporciona tu forma de pago
              </div>
            </div>
            <small
              class="form-text ml-3"
            >Consulta las tarjetas participantes en la parte inferior de la
              página.</small>

            <div class="form-check mt-3 ml-3">
              <input
                id="terms"
                v-model="terms"
                class="form-check-input"
                name="terms"
                type="checkbox"
                value="option1"
              >
              <label
                class="form-check-label"
                style="font-size: 14px"
              >
                He leído y acepto
                <a
                  href="/terminos-condiciones"
                  target="_blank"
                >Términos y Condiciones y Aviso de Privacidad</a>
              </label>
            </div>
            <div
              v-if="!terms && $v.$dirty"
              class="terms-invalid ml-3"
            >
              Acepta los Términos y Condiciones y Aviso de Privacidad
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {required} from "vuelidate/lib/validators";
import EventBus from "../events";
import PaymentService from "./../services/payment";
import ModalService from "./../services/modals";
import AppService from "./../services/app";
import TrackingService from "./../services/tracking";
import PaymentInstallments from "./PaymentInstallments";
import Config from "./../services/config";

const Card = require("card");
const OpenPay = window.OpenPay;
const Lockr = require("lockr");

export default {
  name: "PaymentMethodCard",
  components: { PaymentInstallments },
  props: {
    order: {
      type: Object,
      default: () => {
        return {
          total: 0
        };
      }
    }
  },

  data() {
    return {
      routes: {},
      deviceIdHiddenFieldName: "",
      cardType: "1",
      cardName: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      cardPostal: null,
      cardErrors: {},
      // declaring card-brand in data{} enables card brand name/classes.
      cardBrand: "",
      // demo only
      $cardFormat: Vue.prototype.$cardFormat,
      msiOption: 0,
      terms: false,

      userCard: [],
      isNewOrExistingCardControlsEnabled: false,
      payWithNewCard: true,
      trackingService: ""
    };
  },
  watch: {
    // handle auto-focus to next field
    // Note: since CVC can be 3 OR 4 digits we don't watch it
    cardNumber: function (val) {
      if (this.$cardFormat.validateCardNumber(val)) {
        this.$refs.cardExpInput.focus();
      }

      this.cardBrand = OpenPay.card.cardType(val.replace(/ /g, ""));

      if (this.cardCvc === null) {
        return;
      }

      if (this.cardCvc.length === 4) {
        this.cardCvc = this.cardCvc.slice(0, -1);
      }
    },
    cardExpiry: function(val) {
      if (val.length > 7) {
        this.cardExpiry = val.slice(0, -1);
        this.$refs.cardCvcInput.focus();
        return 0;
      }
      if (val.length === 7 && this.$cardFormat.validateCardExpiry(val)) {
        this.$refs.cardCvcInput.focus();
        return 0;
      }
    },
    cardType: function() {
      this.msiOption = 0;
    },

    cardCvc: function(val) {
      if (this.cardBrand !== "American Express") {
        if (val.length > 3) {
          this.cardCvc = val.slice(0, -1);
        }
      }
    }
  },

  validations: {
    cardName: {
      required
    },
    msiOption: {
      required
    },
    terms: {
      required
    }
  },

  mounted() {
    this.trackingService = new TrackingService(this);
    this.isUserLogged = AppService.isUserIsLoggedIn();
    this.userCard = AppService.getUserCards();
    this.$refs.cardNumInput.focus();
    this.isNewOrExistingCardControlsEnabled =
      this.isUserLogged && this.userCard !== null;
    this.payWithNewCard = !this.isNewOrExistingCardControlsEnabled;

    EventBus.$on("checkout", () => {
      if (this.payWithNewCard) {
        this.validate();

        return;
      }

      this.processPayment({ id: this.userCard.token });
    });

    EventBus.$on("installmentsChanged", installment => {
      this.msiOption = installment;
    });

    this.initPaymentServices();
  },
  methods: {
    async initPaymentServices() {
      new Card({
        form: "form",
        container: ".card-wrapper",
        placeholders: {
          number: "1212 1212 1212 1212",
          name: "Juan Perez",
          expiry: "12/22",
          cvc: "111"
        }
      });
      OpenPay.setId(Config.OPEN_PAY_ID);
      OpenPay.setApiKey(Config.OPEN_PAY_PUBLIC_KEY);
      if (!Config.OPEN_PAY_PROD) {
        OpenPay.setSandboxMode(true);
      }
      this.deviceId = await OpenPay.deviceData.setup();
    },
    validate: function() {
      this.cardErrors = {};
      this.$v.$touch();

      // validate card number
      if (!this.$cardFormat.validateCardNumber(this.cardNumber)) {
        this.cardErrors.cardNumber = "Tarjeta de crédito/débito inválida.";
      }

      // validate card expiry
      if (!this.$cardFormat.validateCardExpiry(this.cardExpiry)) {
        this.cardErrors.cardExpiry = "Fecha de expiración inválida.";
      }

      // validate card CVC
      if (!this.$cardFormat.validateCardCVC(this.cardCvc)) {
        this.cardErrors.cardCvc = "CVC inválido";
      }
      // The card format validation pass with amex
      if (this.cardBrand === "amex" && this.cardCvc.length !== 3) {
        this.cardErrors.cardCvc = "CVC inválido";
      }

      const validate =
        this.$cardFormat.validateCardNumber(this.cardNumber) &&
        this.$cardFormat.validateCardExpiry(this.cardExpiry) &&
        this.$cardFormat.validateCardCVC(this.cardCvc) &&
        this.terms;

      if (!this.$v.$invalid && validate) {
        const paymentIntent = PaymentService.getPaymentIntent();
        if (paymentIntent >= 3) {
          return ModalService.showAlert({
            type: "alert",
            title: "Por favor comunícate con nosotros",
            message: ""
          });
        }
        this.getTokenFromOpenpay();
      }
    },

    getTokenFromOpenpay() {
      this.$vs.loading();
      const cardExpiry = this.cardExpiry.split("/");
      const month = cardExpiry[0].replace(" ", "");
      let year = cardExpiry[1].replace(" ", "");
      year = year.substr(year.length - 2);

      OpenPay.token.create(
        {
          card_number: this.cardNumber.replace(/ +/g, ""),
          holder_name: this.cardName,
          expiration_year: year,
          expiration_month: month,
          cvv2: this.cardCvc
        },
        async token => {
          PaymentService.setCardData(this.cardBrand, this.cardType);

          await this.processPayment(token.data);
        },
        () => {
          this.$vs.loading.close();

          return ModalService.showAlert({
            type: "error",
            title: "Error al procesar el pago",
            message: "Por favor, verifique los datos de su tarjeta"
          });
        }
      );
    },

    async processPayment(token) {
      this.$vs.loading();
      const chargeData = {
        token: token.id,
        deviceId: this.deviceId,
        installments: this.msiOption,
        isNewCard: this.payWithNewCard
      };

      if (Lockr.get("orderId")) {
        await PaymentService.payOnCheckoutExpress(chargeData)
          .then(response => {
            const data = response.data;
            this.goToSuccessfulPurchasePage({
              orderData: data,
              paymentData: data
            });
          })
          .catch(error => {
            this.showError(error);
          });

        return false;
      }

      const [error, data] = await PaymentService.pay(chargeData);

      if (error) {
        return this.showError(error);
      }

      this.addEcommerceTransaction(data);
      this.goToSuccessfulPurchasePage();
    },
    addEcommerceTransaction(data) {
      this.$ga.ecommerce.addTransaction({
        id: data.orderData.order.id,
        revenue: data.orderData.order.total,
        currency: "MXN",
        quantity: data.orderData.order.quantity
      });

      for (let i = 0; i < data.orderData.order.items.length; i++) {
        this.$ga.ecommerce.addItem({
          id: data.orderData.order.items[i].order_id, // Transaction ID. Required.
          name: data.orderData.order.items[i].description, // Product name. Required.
          sku: data.orderData.order.items[i].sku, // SKU/code.
          category: "Plans", // Category or variation.
          price: data.orderData.order.items[i].total, // Unit price.
          quantity: data.orderData.order.items[i].quantity // Quantity.
        });
      }
      this.$ga.ecommerce.send();
    },
    showError(error) {
      this.$vs.loading.close();
      let errorMessage = this.getErrorMessage(error);
      return ModalService.showAlert({
        type: "error",
        title: "Error al procesar el pago",
        message:
          errorMessage ||
          "Oops, ocurrió un error, verifica los datos e intenta nuevamente"
      });
    },

    goToSuccessfulPurchasePage() {
      this.$vs.loading.close();
      //this.trackingService.successfulPurchase(data);
      PaymentService.removeDataAfterSuceessPayment();
      EventBus.$emit("packagesUpdated");
      EventBus.$emit("login");
      this.$router.push({ path: "/confirmacion-de-compra" });
    },

    reset: function() {
      this.cardErrors = {};
      this.cardNumber = null;
      this.cardExpiry = null;
      this.cardCvc = null;
      this.cardPostal = null;
      this.$refs.cardNumInput.focus();
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
.customerinfo {
  color: #123291;
}

input,
select {
  background-color: transparent;
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}

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

.cursor-pointer {
  cursor: pointer;
}

.terms-invalid {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

</style>
