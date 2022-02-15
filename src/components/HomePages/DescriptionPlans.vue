<template>
  <div class="bg-primary-30 p-3 rounded col-12 my-3 shadow-bamba">
    <div>
      <div>
        <div class="pt-2 col-12 px-0 row mx-0 justify-content-between">
          <div>
            <h4 class="font-weight-bold text-left mb-2 text-primary" style="font-size: 20px">
              {{ plans_decription.name }}
            </h4>

            <h3  class="font-weight-bold text-left text-primary">
              ${{ plans_decription.price }} MXN.
            </h3>
          </div>

          <div class="  px-0 row align-items-start mx-0" v-if="plans_decription.sku == value">
            <button
                    @click="deleteStorage()"
                    class="font-size-small px-0 px-md-1 my-0 mx-1 text-white btn btn-dark d-flex align-items-center "
            >
              <svg class="show-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" fill="currentColor"/></svg>
              <strong class="mt-1 d-none d-md-block ml-2">
                Eliminar
              </strong>
            </button>
            <button
                    @click="buyPlan(plans_decription)"
                    class="font-size-small px-0 px-md-1 m-0 text-white btn btn-primary d-flex align-items-center "
            >
              <svg class="show-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <g fill="currentColor">
                  <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7z"/><circle cx="7.5" cy="19.5" r="1.5"/>
                  <circle cx="17.5" cy="19.5" r="1.5"/>
                </g>
              </svg>
              <strong class="mt-1 d-none d-md-block ml-2">
                Ir a comprar
              </strong></button>
          </div>
          <div class="row align-items-start mx-0 " v-if="value == null">
            <button
                    @click="buyPlan(plans_decription)"
                    class="font-size-small px-0 px-md-1 m-0 text-white btn btn-primary d-flex align-items-center "
            >
              <svg class="show-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <g fill="currentColor">
                  <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7z"/><circle cx="7.5" cy="19.5" r="1.5"/>
                  <circle cx="17.5" cy="19.5" r="1.5"/>
                </g>
              </svg>
              <strong class="mt-1 d-none d-md-block ml-2">
                Ir a comprar
              </strong></button>
          </div>

        </div>

      </div>
      <ul class="mx-3">
        <li>{{ plans_decription.description[0].body[0] }}</li>
      </ul>
      <div class="row mx-0">

        <div class="row justify-content-start align-items-center mx-1 mt-2 ">
          <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
          >
            <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                    class="show-fill"
            />
          </svg>
          <button
                  @click="setPlan(plans_decription)"
                  :id="plans_decription.sku"
                  class="ml-2 text-decoration font-size-small  p-0 m-0 text-primary"
          ><strong>
            Ver detalle
          </strong></button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import PlanService from "../../services/plan";
  import EventBus from "../../events";

  const Lockr = require("lockr");
  export default {
    name: "DescriptionPlans",
    props: {
      plans_decription: Object
    },
    data(){
      return {
        plan:null,
        btn_state:null,
        value:null
      }
    },
    created(){

      if (Lockr.get("pack")) {
        this.value = Lockr.get("pack").sku
      }
    },
    methods: {
      deleteStorage(){
        Lockr.flush ()
        if (!Lockr.get("pack")) {
          this.value = null
        }
        location.reload()
      },
      setPlan(item){
        this.plan = item;
        this.$store.commit('setPreviewPlan', this.plan);

        this.$router.push('descripcion/'+this.plans_decription.slug)
      },
      buyPlan(item){
        var cuantityPack = Lockr.get("packages")

        if (cuantityPack) {

          if (cuantityPack.length >= 1){
              this.$router.push('beneficiarios/'+item.slug)
          }  else {
            this.$store.commit("StateSbPurchaseButton", false);
            Lockr.set("pack", item)
            PlanService.addProductFromOurPlans(item);
            EventBus.$emit("packagesUpdated");
            this.$router.push('beneficiarios/'+item.slug)
            var value = {
              sku : item.sku
            }
            Lockr.set("sku", value)
          }

        } else {
          this.$store.commit("StateSbPurchaseButton", false);
          Lockr.set("pack", item)
          PlanService.addProductFromOurPlans(item);
          EventBus.$emit("packagesUpdated");
          this.$router.push('beneficiarios/'+item.slug)
          var value = {
            sku : item.sku
          }
          Lockr.set("sku", value)
        }
      }
    }
  }
</script>
<style>
  .shadow-bamba{
   box-shadow:  0 0.2rem 0.8rem rgb(0 0 0 / 18%) !important;
  }
</style>