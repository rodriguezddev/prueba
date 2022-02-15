<template>
  <div class="card-body">
    <div class="line mb-4">
      <h4 class="font-weight-bold  mb-3 text-center">
        Resumen de compra
      </h4>
    </div>
    <div class="plans mx-4 px-2">
      <p class="mb-0 text-blue mb-2 text-left">
        Planes contratados:
      </p>
      <h5
        v-for="(pack, indexPackage) in packages"
        :key="indexPackage"
        class="text-left"
      >
        {{ pack.name }}
      </h5>
      <p class="text-blue mt-5 text-left">
        Código de promoción:
      </p>
      <div class="row mb-4">
        <div class="col-md-8">
          <input
            v-model.trim="$v.coupon.$model"
            class="form-control mt-1 bg-transparent"
            type="text"
            placeholder="+ Introduce el código"
            name="coupon"
            :class="{ 'is-invalid': $v.coupon.$error || couponError !== '' }"
          >
          <div
            v-if="$v.coupon.$error || couponError !== ''"
            class="invalid-feedback"
          >
            <span v-if="!couponError">{{ couponError }}</span>
          </div>
        </div>
        <div class="col-md-4">
          <p
            class="mt-2 font-weight-bold cursor-pointer text-blue text-right"
            data-test="coupon-button"
            @click="applyCoupon()"
          >
            Aplicar
          </p>
        </div>

        <div
          v-if="couponApplied"
          class="my-2"
        >
          <i class="fas fa-check-circle applied" />
          <span class="applied">Cupón aplicado</span>

          <p
            v-if="couponApplied"
            class="m-0 p-0 mt-3 ml-5"
            data-test="coupon-discount"
          >
            - Descuento de {{ discount | currency }}
          </p>
        </div>

        <div
          v-if="couponError"
          class="ml-5 my-2"
        >
          <i class="fas fa-check-circle not-applied" />
          <span class="not-applied">Cupón no válido</span>
        </div>
      </div>
    </div>
    <div class="total mx-4 px-2">
      <p class="mb-2 text-uppercase mt-3">
        Subtotal:
      </p>
      <div
        v-for="(pack, index) in packages"
        :key="index"
        class="row ml-0 pl-0 mb-2"
      >
        <div class="w-100 d-flex justify-content-between">
          <p class="mb-0">
            Plan {{ pack.name }}
          </p>
          <p
            v-if="pack.ourPlanType"
            class="mb-0"
          >
            {{ pack.originalPrice | currency }} x
            {{ pack.beneficiaries.length }}
          </p>
        </div>

        <div
          v-for="(addon, index) in getActiveAddons(pack)"
          v-show="pack.ourPlanType"
          :key="index"
          class="ml-1 w-100 d-flex justify-content-between"
        >
          <p
            v-if="addon.count > 0"
            class="mb-0"
          >
            + {{ addon.name }}
          </p>
          <p
            v-if="addon.count > 0"
            class="mb-0"
          >
            {{ addon.price | currency }} x {{ addon.count }}
          </p>
        </div>

        <div
          v-for="(plan, index) in pack.plans"
          v-show="!pack.ourPlanType"
          :key="index"
          class="ml-1 w-100 d-flex justify-content-between"
        >
          <p class="mb-0">
            + {{ plan.title }}
          </p>
          <p class="mb-0">
            {{ plan.cost | currency }} x {{ pack.beneficiaries.length }}
          </p>
        </div>
      </div>

      <div
        v-if="discounts > 0"
        class="row justify-content-between ml-0 pl-0 mb-1 mt-2"
      >
        <strong class="mb-0">Descuentos:</strong>
        <strong>-{{ discounts | currency }}</strong>
      </div>

      <div class="row justify-content-between ml-0 mt-5">
        <h4 class="font-weight-bold">
          Total de compra:
        </h4>
        <h4
          class="font-weight-bold"
          data-test="total"
        >
          {{ subtotal | currency }}
        </h4>
      </div>
    </div>
    <div class="row mt-4 mb-3 justify-content-center mx-3">
      <button
        type="button"
        data-test="pay-button"
        class="btn green-background btn-lg btn-block mb-4 text-white"
        @click="pay()"
      >
        $ Pagar
      </button>

      <div
        v-if="isPromoter && !purchaseLink"
        class="col-12 text-center"
      >
        <button
          type="button"
          class="btn navy-background btn-lg btn-block mb-4 text-white"
          @click="generateLink()"
        >
          Generar link de pago
        </button>
      </div>

      <div
        v-if="purchaseLink"
        class="col-12 my-3"
      >
        <input
          id="order-link"
          :value="purchaseLink"
          type="hidden"
        >
        <button
          type="button"
          class="btn navy-background btn-lg btn-block mb-4 text-white"
          @click="copyToClipboard()"
        >
          Copiar link
        </button>
      </div>

      <small
        style="text-align: justify"
      >Esta es una suscripción anual con renovación automática al término de
        la vigencia. Puedes desactivar la renovación automática en cualquier
        momento y hasta 1 mes antes del término de la vigencia llamando al 55
        3986 2354.</small>
    </div>
  </div>
</template>

<script>
import {paymentCartResume} from "../mixins/paymentCartResume";

export default {
  name: "PaymentCartResumeMobile",

  mixins: [paymentCartResume]
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  background-color: #dcf0fb;
  border: 1px solid #dcf0fb;
  color: #123291;
}

a img {
  width: 20px;
  height: 20px;
}

.fa-chevron-circle-right {
  color: #123291;
}

.icon {
  width: 50px;
}

.line,
.plans {
  border-bottom: 1px solid #50b3e6;
}

.text-blue {
  color: #50b3e6;
  font-weight: bold;
}

input {
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
}

input::-webkit-input-placeholder {
  color: #123291;
}

input:focus {
  color: #123291;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #50b3e6;
}

a:focus {
  border-bottom: 2px solid #50b3e6;
}

button {
  font-weight: bold;
  font-size: 16px;
}

li {
  list-style: none;
  margin-left: 15px;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.cursor-pointer {
  cursor: pointer;
}

.applied {
  color: #4cc72f;
}

.not-applied {
  color: #dc3545;
}

.green-background {
  background-color: #4cc72f;
  border: none;
  color: #123291;
  font-weight: bold;
}

@media (min-width: 767.98px) {
  .card-body {
    padding: 2rem;
  }
}

@media (max-width: 991px) {
  .card-body {
    padding: 1.2rem 0.3rem;
  }

  .px-2 {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  }
}
</style>
