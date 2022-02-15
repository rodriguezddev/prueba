<template>
  <div>
      <router-link :to="'/beneficiarios/'+previewPlan.slug">
          <button
                  @click="addPlan()"
                  v-if="valuePurchaseButton"
                  class="
          btn btn-secondary
          font-weight-bold
          px-5
          mt-3
          mb-1
          col-12 col-md-6
          p-0
          py-2
        "
                  style="border-radius: 24px !important; font-size: 15px; top: auto"
          >
              Seleccionar plan
          </button>
      </router-link>

      <router-link
              :to="'/beneficiarios/'+previewPlan.slug"
              class="
          btn btn-secondary
          font-weight-bold
          px-5
          mt-3
          mb-1
          col-12 col-md-6
          p-0
          py-2
        "
              style="border-radius: 24px !important; font-size: 15px; top: auto"
              v-if="!valuePurchaseButton"
      >
          Continuar la compra
      </router-link>
  </div>
</template>

<script>
    import PlanService from "../../services/plan";
    import ChartService from "../../services/charts";
    import {mapState} from 'vuex';
    import EventBus from "../../events";

    const Lockr = require("lockr");

    export default {
    name: "SbPurchaseButton",
        computed: {
            ...mapState(['previewPlan', 'valuePurchaseButton'])
    },
        data() {
            return {
                selected: false,
                options: {},
                router:null
            }
        },
        mounted(){
            this.packages = PlanService.getPackages();
            this.router = Lockr.get("ruta")
            if (this.packages.length !== 0) {
                this.$store.commit("StateSbPurchaseButton", false);
            }
        },
        created() {
            this.getOurPlansAddedToCart();
            if (this.previewPlan == null) {
                this.$router.push("/")
            }
        },
    methods:{
      addPlan() {
          Lockr.set("pack", this.previewPlan)
          this.$store.commit("StateSbPurchaseButton", false);
          PlanService.addProductFromOurPlans(this.previewPlan);
          EventBus.$emit("packagesUpdated");
          Lockr.set("ruta", 'beneficiarios/'+this.previewPlan.slug)
          var value = {
              sku : this.previewPlan.sku
          }

          Lockr.set("sku", value)

      },
        getOurPlansAddedToCart() {
            const plansAddedToCart = PlanService.getOurPlansAddedToCart();
            this.selected = !!plansAddedToCart.length;
            this.options = this.selected
                ? ChartService.ourPlansSelectedChart
                : ChartService.ourPlansStartChart;
        },
    }
  }
</script>

<style scoped>

</style>
