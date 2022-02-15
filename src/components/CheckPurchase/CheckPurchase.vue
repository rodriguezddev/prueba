<template>
  <div class="SetUpPlan px-1">
    <div class="row mx-0">
      <div class="col-12 col-lg-6">
        <h1 class="text-center font-weight-bold">
          Revisa tu compra
        </h1>
        <img
          src="../../assets/Pasos2.png"
          alt=""
          class="img-fluid"
          style="width:250px"
        >
        <h4 class="text-center font-weight-bold mt-5">
          Resumen de compra
        </h4>
        <p>Revisa que tus datos y el resumen de tu compra sean correctos</p>
      </div>
    </div>
    <div class="row mx-0 mb-5">
      <div class="col-12 col-lg-6">
        <customer-info />
      </div>
      <div class="col- 12 col-lg-5">
        <card-purchase />
      </div>
    </div>
  </div>
</template>

<script>
import CardPurchase from "./CardPurchase.vue";
import CustomerInfo from "./CustomerInfo.vue";

export default {
  name: "CheckPurchase",
  components: { CustomerInfo, CardPurchase }
};
</script>

<style scoped>
.SetUpPlan {
  color: #123291;
  margin-top: 100px;
}
.blue-background {
  background-color: #50b3e6;
  border: none;
}
.navy-background {
  border: none;
}
.text-color {
  color: #50b3e6;
}
a {
  color: #123291;
  text-decoration: none;
}
a:focus {
  border-bottom: 2px solid #123291;
}

@media (max-width: 992px) {
  p {
    font-size: calc(0.5em + 1.1vw);
  }
}
</style>
