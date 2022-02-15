<template>
    <div>
        <h2 class="font-size-medium font-weight-bold pt-4">Pago</h2>
        <div v-if="isNewOrExistingCardControlsEnabled">
            <div class="row mx-0">
                <div class="col pl-0">
                    <p>¿Quieres pagar con una tarjeta guardada o nueva?</p>
                </div>
            </div>
            <div class="row mx-0 align-items-center">
                <div class="row my-4 mx-0">
                    <div class="col-12 px-0 row mx-0 justify-content-start">
                        <label class="row mx-0 justify-content-start">
                            <input
                                    class="option-input radio px-0 mx-0"
                                    v-model="payWithNewCard"
                                    name="new_or_saved_card"
                                    type="radio"
                                    :value="false"
                            >
                            <span class="col-10 text-left">
                            Pagar con la última tarjeta utilizada.
                        </span>
                        </label>
                    </div>
                </div>
                <div class="row mx-0 justify-content-start">
                    <div class="col-12 px-0 row mx-0 justify-content-start">
                        <label class="row mx-0 justify-content-start">
                            <input
                                    class="option-input radio px-0 mx-0 "
                                    v-model="payWithNewCard"
                                    name="new_or_saved_card"
                                    type="radio"
                                    :value="true"
                            >
                            <span class="col-10 text-left">
                            Pagar con nueva tarjeta.
                        </span>

                        </label>
                    </div>
                </div>
            </div>

        </div>


        <div >
            <p v-if="payWithNewCard">Selecciona la forma de pago</p>

            <div v-if="payWithNewCard">
                <div class="row text-center mt-4 mx-0 mb-4">
                    <div class="col-6">
                        <input
                                class="box-type"
                                id="exampleRadios1"
                                name="debit"
                                type="radio"
                                v-model="cardType"
                                value="1"
                        >
                        <label
                                class="form-check-label cursor-pointer typecard mb-2"
                                for="exampleRadios1"
                        >
                            Tarjeta de<br/> Débito
                        </label>
                    </div>
                    <div class="col-6">
                        <input
                                class=" box-type"
                                id="exampleRadios2"
                                name="credit"
                                type="radio"
                                v-model="cardType"
                                value="2"
                        >
                        <label
                                class="form-check-label cursor-pointer typecard mb-2"
                                for="exampleRadios2"
                        >
                            Tarjeta de<br/> Crédito
                        </label>
                    </div>
                </div>
            </div>
            <form @submit.prevent="pay()">
                <div class="row" v-if="payWithNewCard">
                    <div class="col-12 col-md-6 row justify-content-start mx-0 mt-3">
                        <label class="font-weight-bold text-left">Nombre del titular</label>
                        <input
                                :class="{ 'is-invalid': $v.cardName.$error }"
                                class="input-bamba"
                                name="name"
                                type="text"
                                v-model.trim="$v.cardName.$model"
                        >
                        <div
                                class="invalid-feedback"
                                v-if="$v.cardName.$error"
                        >
                            Proporciona el nombre del beneficiario
                        </div>
                    </div>

                    <div class="col-12 col-md-6 mt-3  row mx-0 justify-content-start">
                        <label class="font-weight-bold text-left">Número de tarjeta</label>
                        <input
                                :class="{ 'is-invalid': !!cardErrors.cardNumber }"
                                class="input-bamba"
                                name="number"
                                ref="cardNumInput"
                                type="text"
                                v-model="cardNumber"
                                v-cardformat:formatCardNumber
                        >
                        <div
                                class="invalid-feedback"
                                v-if="cardErrors.cardNumber"
                        >
                            <small>{{ cardErrors.cardNumber }}</small>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-3 row mx-0 justify-content-start">
                        <label class="font-weight-bold text-left">Fecha de vencimiento</label>
                        <input
                                :class="{ 'is-invalid': !!cardErrors.cardExpiry }"
                                :data-error="!!cardErrors.cardExpiry"
                                :maxlength="5"
                                class="input-bamba"
                                id="card-exp"
                                name="expiry"
                                ref="cardExpInput"
                                type="text"
                                v-cardformat:formatCardExpiry
                                v-model="cardExpiry"
                        >
                        <div
                                class="invalid-feedback"
                                v-if="cardErrors.cardExpiry"
                        >
                            <small>{{ cardErrors.cardExpiry }}</small>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-3 row mx-0 justify-content-start">
                        <label class="font-weight-bold text-left">CVV</label>
                        <input
                                :class="{ 'is-invalid': !!cardErrors.cardCvc }"
                                :data-error="!!cardErrors.cardCvc"
                                class="input-bamba"
                                name="cvc"
                                ref="cardCvcInput"
                                type="text"
                                v-cardformat:formatCardCVC
                                v-model="cardCvc"
                        >
                        <div
                                class="invalid-feedback"
                                v-if="cardErrors.cardCvc"
                        >
                            <small>{{ cardErrors.cardCvc }}</small>
                        </div>
                    </div>

                    <div class="row mt-3 px-3">
                        <div
                                class="col-12 col-md-6 mb-2"
                                v-show="cardType === 2 || cardType === '2'"
                        >
                            <payment-installments :total="order.total"/>
                            <div
                                    class="invalid-feedback"
                                    v-if="$v.msiOption.$error"
                            >
                                Proporciona tu forma de pago
                            </div>
                        </div>
                        <div class="row mx-0 align-items-center mt-3 col-12 mt-3 row mx-0">
                            <input
                                    class="option-input radio"
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    v-model="terms"
                                    value="option1"
                            >
                            <label
                                    class="form-check-label text-left col-10 px-0"
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
                                class="terms-invalid ml-3"
                                v-if="!terms && $v.$dirty"
                        >
                            Acepta los Términos y Condiciones y Aviso de Privacidad
                        </div>
                    </div>
                </div>
                <div
                        class="row flex-column m-0 align-items-center py-5">
                    <div v-if="subtotal === sale_subtotal">
                        <p class="font-weight-bold text-center">Total</p>
                        <h2 class="font-weight-bold text-center">{{ subtotal | currency}} MXN</h2>
                    </div>
                    <div v-else>
                        <p class="font-weight-bold text-center">Total</p>
                        <h3 style=" color: #C4C4C4;" class="font-weight-bold text-center">De <span style="text-decoration: line-through; color: #C4C4C4;">{{ subtotal | currency}} MXN</span> a</h3>
                        <h2  class="font-weight-bold text-center">{{ sale_subtotal | currency}} MXN</h2>
                    </div>
                    <button
                            class="btn btn-secondary font-weight-bold col-12 col-md-6 mt-3 mb-4"
                            style="border-radius: 24px !important; "
                            type="submit"
                    >
                        continuar
                    </button>
                    <a
                            class="
          btn btn-outline-secondary
          font-weight-bold
          px-5
          mt-1
          mb-1
          col-12 col-md-6
          p-0
          py-2
        "
                            href="/"
                            style="border-radius: 24px !important; font-size: 15px; top: auto"
                    >
                        Regresar
                    </a>
                </div>
            </form>

            <modal-alert />
        </div>
    </div>
</template>


<script>
    import Vue from "vue";
    import {required} from "vuelidate/lib/validators";
    import EventBus from "../../events";
    import PaymentService from "../../services/payment";
    import ModalService from "../../services/modals";
    import AppService from "../../services/app";
    import TrackingService from "../../services/tracking";
    import PaymentInstallments from "../PaymentInstallments";
    import Config from "../../services/config";
    import ModalAlert from "../ModalAlert.vue";
    import {mapState} from "vuex";
    const Card = require("card");
    const OpenPay = window.OpenPay;
    const Lockr = require("lockr");
    export default {
        name: "CartForm",
        components: {PaymentInstallments, ModalAlert},
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
                trackingService: "",
                deviceId: null
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
            cardExpiry: function (val) {
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
            cardType: function () {
                this.msiOption = 0;
            },
            cardCvc: function (val) {
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
        computed: {
            ...mapState([ "subtotal", "sale_subtotal"]),
        },
        mounted() {
            const total = Lockr.get("subtotalplan")
            this.$store.commit("SetSubTotal", total)

            const saletotal = Lockr.get("sale_subtotal")
            this.$store.commit("SetPromotion", saletotal)

            this.trackingService = new TrackingService(this);
            this.isUserLogged = AppService.isUserIsLoggedIn();
            this.userCard = AppService.getUserCards();
            this.$refs.cardNumInput.focus();
            this.isNewOrExistingCardControlsEnabled = this.isUserLogged && this.userCard !== null;
            this.payWithNewCard = !this.isNewOrExistingCardControlsEnabled;
            EventBus.$on("installmentsChanged", installment => {
                this.msiOption = installment;
            });
            this.initPaymentServices();
        },
        methods: {
            pay() {
                if (this.payWithNewCard) {
                    this.validate();
                    return;
                }
                this.processPayment({id: this.userCard.token});
            },
            async initPaymentServices() {
                OpenPay.setId(Config.OPEN_PAY_ID);
                OpenPay.setApiKey(Config.OPEN_PAY_PUBLIC_KEY);
                if (!Config.OPEN_PAY_PROD) {
                    OpenPay.setSandboxMode(true);
                }
                this.deviceId = await OpenPay.deviceData.setup();
            },
            validate: function () {
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
                this.$store.commit("setTokenId", token.id)
                this.$vs.loading();
                const chargeData = {
                    mediaTypeKey:"TOKEN",
                    mediaTypeValue: token.id,
                    mediaDeviceId: this.deviceId,
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
                this.$store.commit("SetOrderData", data)

                this.$ga.ecommerce.addTransaction({
                    id: data.orderData.id,
                    revenue: data.orderData.total,
                    currency: "MXN",
                    quantity: 1
                });
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
                this.$router.push({path: "/confirmacion-de-compra"});
                Lockr.flush ()
            },
            reset: function () {
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
<style>
    .box-type {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
        position: relative;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: all 0.15s ease-out 0s;
        cursor: pointer;
        display: inline-block;
        outline: none;
        position: absolute;
        z-index: -1;

        padding: 2rem !important;
    }

    .box-type:checked + .typecard {
        color: #ffffff;
    }
</style>