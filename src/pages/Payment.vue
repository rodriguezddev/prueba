<template>
    <div class="row">
        <Payment class="col-12 col-md-4"/>
        <CartForm class="col-12 col-md-8 pt-md-5 mt-md-5"/>
    </div>
</template>
<script>
    import Payment from "../components/payment/ResumenPlan";
    import CartForm from "../components/payment/CartForm";

    export default {
        components: {CartForm, Payment}
    }
</script>