<template>
    <div class="About">
        <p class="font-size-small font-weight-bold">Pago y registro</p>
        <h2 class="font-size-medium font-weight-bold">Resumen de compra</h2>
        <div class="bg-primary row p-3 m-0 rounded">
            <div :key="indexPackage"
                 class=" row flex-column aling-items-start mx-0  w-100" v-for="(pack, indexPackage) in packages">
                <div>
                    <h3 class="text-white font-weight-bold">
                        {{ pack.name }}
                    </h3>
                    <h2 v-if="subtotal === sale_subtotal" class="text-white font-weight-bold">
                        {{ subtotal| currency}} MXN
                    </h2>
                    <div v-else class="d-flex">
                        <div class="">
                            <h3 style="text-decoration: line-through;"  class="text-white font-weight-bold">
                                {{ subtotal| currency}} MXN
                            </h3>
                            <h2 class="text-white font-weight-bold">
                                {{ sale_subtotal| currency}} MXN
                            </h2>
                        </div>
                    </div>
                    <P class="text-white font-weight-bold">
                        al año <span class="badge bg-light font-weight-bold text-primary" v-if="subtotal !== sale_subtotal">PROMO</span>
                    </P>

                </div>
                <div class="row mx-0 justify-content-start"
                     >
                    <div class="row mx-0 justify-content-between w-100">
                        <p class="text-white font-weight-bold">Beneficiario:</p>
                        <p class="text-white font-weight-bold">{{customer.name}} {{customer.lastName}}</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="row mx-0 align-items-center py-3">
            <div class="col-7 px-0">
                <input
                        :class="{
                  'is-invalid': $v.coupon.$error || couponError !== ''
                }"
                        class="input-bamba mt-1 bg-transparent"
                        name="coupon"
                        type="text"
                        v-model.trim="$v.coupon.$model"
                >
                <div
                        class="invalid-feedback"
                        v-if="$v.coupon.$error || couponError !== ''"
                >
                    <span v-if="!couponError">{{ couponError }}</span>
                </div>
            </div>
            <div class="col-5 pr-0">
                <button
                        @click="applyCoupon()" class="text-left  mb-0 p-2 btn btn-secondary text-center w-100 font-apply"
                        data-test="coupon-button"

                >
                    Aplicar Código
                </button>
            </div>

            <div
                    class="my-2 w-100 row mx-0 flex-column align-items-start"
                    v-if="couponApplied"
            >
                <div>
                    <i class="fas fa-check-circle applied mr-2"/>
                    <span class="applied">Cupón aplicado</span>
                </div>


                <p
                        class="m-0 p-0 mt-3 text-center font-weight-bold w-100"
                        data-test="coupon-discount"
                        v-if="couponApplied"
                >
                    - Descuento de {{ discount | currency }}
                </p>
            </div>

            <div
                    class="ml-3 my-2"
                    v-if="couponError"
            >
                <i class="fas fa-check-circle not-applied"/>
                <span class="not-applied text-danger ml-2">Cupón no válido</span>
            </div>
        </div>

    </div>

</template>
<script>
    import {paymentCartResume} from "../../mixins/paymentCartResume";

    export default {
        name: "Payment",
        mixins: [paymentCartResume],


    }
</script>

<style lang="scss">
    $breakpoint-tablet: 768px;
    .About {
        margin-top: 80px;
    }
    .font-apply{
        font-size: 15px;
    }
    @media (max-width: $breakpoint-tablet) {
        .font-apply{
            font-size: 11px;
        }
    }
</style>
