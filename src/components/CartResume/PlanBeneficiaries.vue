<template>
  <div>
    <div class="card my-5">
      <div class="card-body p-2">
        <custom-plan
          :index-package="indexPackage"
          :pack="pack"
        />
        <p class="font-weight-bold text-left mt-3 ml-3">
          Mis Beneficiarios
        </p>
        <div
          v-for="(beneficiary, indexBeneficiary) in pack.beneficiaries"
          :key="indexBeneficiary"
        >
          <beneficiary
            :pack="pack"
            :beneficiary="beneficiary"
            :index-beneficiary="indexBeneficiary"
            :index-package="indexPackage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Beneficiary from "./Beneficiary.vue";
  import CustomPlan from "./CustomPlan.vue";

  export default {
  components: { CustomPlan, Beneficiary },

  props: ["pack", "indexPackage"]

  };
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  background-color: #c3e4f7;
  border: 1px solid #c3e4f7;
  color: #123291;
}

a img {
  width: 20px;
  height: 20px;
}

.fa-chevron-circle-right {
  color: #123291;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.icon {
  width: 50px;
}

.navy-background {
  border: none;
}
</style>
