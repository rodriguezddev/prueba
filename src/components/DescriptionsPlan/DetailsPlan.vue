<template>  <div class="container-top">    <h3 class="font-weight-bold font-size-medium-lg-size">      {{ demo.name }}    </h3>    <div>      <h2 class="font-weight-bold">Agrega un beneficiario a tu plan</h2>      <p class="font-weight-bold">Beneficiarios</p>      <p>Añade los datos de quien hará uso del seguro.</p>        <formPlan :pack="packages"/>    </div>  </div></template><script>    import formPlan from "./FormPlans";    import PlanService from "../../services/plan";    const Lockr = require("lockr");    export default {  name: "DetailsPlan",  components: {    formPlan,  },        props: [            "demo",            "pack",            "beneficiary",            "indexBeneficiary",            "indexPackage"        ],        data() {            return {                subtotal: 0,                packages: [],                selected: false,                sale_subtotal:0            }        },        created() {          this.getPackages()        },        methods: {          getPackages() {              this.packages = PlanService.getPackages();              if (this.packages.length === 0) {                  this.$router.push({path: '/'});              }              this.subtotal = this.packages[0].originalPrice;              this.sale_subtotal = this.packages[0].price              this.$store.commit("SetSubTotal", this.subtotal)              this.$store.commit("SetPromotion", this.sale_subtotal)            for (let index = 0; index < this.packages[0].plans[0].addons.length; index++) {              this.packages[0].plans[0].addons[index].selected = this.selected            }                this.subtotal = PlanService.getSubtotalPrice();                this.sale_subtotal = PlanService.getSalePrice()          },            toggleAddon(addon) {              this.subtotal = Math.round(this.getPricePackage(addon))              this.sale_subtotal = Math.round(this.getPricePackageSale(addon))              this.$store.commit("SetSubTotal", this.subtotal)              this.$store.commit("SetPromotion", this.sale_subtotal)            },            getPricePackage(addon) {              if (!addon.selected) {                return  this.subtotal - addon.price;              } else {                 return  this.subtotal + addon.price;              }            },          getPricePackageSale(addon) {            if (!addon.selected) {              return this.sale_subtotal - addon.price;            } else {              return this.sale_subtotal + addon.price;            }          }        }    };</script>