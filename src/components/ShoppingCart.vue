<template>
  <div
    id="ShoppingCart"
    class="modal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div
        class="modal-content animate__animated animate__slideInDown"
        :class="{
          'one-product': packages.length === 1,
          'two-product': packages.length === 2,
          'three-product': packages.length === 3,
          'four-product': packages.length === 4
        }"
      >
        <div class="icon-box">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body pt-0 pb-0">
          <div class="row ">
            <div class="col-12 col-lg-8 mt-3 text-left text">
              <div class="Cart mt-2 mb-0">
                <h3>Carrito de compras</h3>
                <p>Tu plan a la medida</p>
              </div>
              <div class="product mt-3 pl-0 mr-0">
                <div
                  v-for="(plan, index) in packages"
                  :key="plan.id"
                  class="row mr-0 ml-0 product-border py-2"
                >
                  <div class="col-2 col-md-2 borrar01">
                    <div
                      class="circle mx-auto d-block mt-1 mr-2 cursor-pointer"
                      @click="deletePackage(index)"
                    >
                      <i class="far fa-trash-alt borrar" />
                    </div>
                  </div>
                  <div class="col-5 col-md-4">
                    <small>Plan</small>
                    <h6>{{ plan.name }}</h6>
                  </div>
                  <div class="col-5 col-md-4 offset-md-0">
                    <small>Precio</small>
                    <h6>{{ plan.price | currency }}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-lg-4 sticky text-left"
              :class="{
                'one-product-right': packages.length === 1,
                'two-product-right': packages.length === 2,
                'three-product-right': packages.length === 3,
                'four-product-right': packages.length === 4
              }"
            >
              <div class="total">
                <div class="d-flex justify-content-between">
                  <p class="mb-2 text-muted pt-3">
                    <small> Subtotal ({{ packages.length }} productos):</small>
                  </p>
                  <p class="mb-2 text-muted mt-3">
                    <small>{{ subtotal | currency }}</small>
                  </p>
                </div>
                <div class="d-flex justify-content-between">
                  <h5 class="font-weight-bold">
                    Total:
                  </h5>
                  <h5 class="font-weight-bold">
                    {{ subtotal | currency }}
                  </h5>
                </div>
              </div>
              <div class="row mt-4 mb-3 justify-content-center">
                <div class="col-12 text-center">
                  <button
                    type="button"
                    style="width:235.33px; border-radius: 15px;"
                    class="btn btn-secondary text-white btn-md mb-4 font-weight-bold"

                    @click="goToBeneficiaries()"
                  >
                    Continuar
                  </button>
                </div>
                <div
                  class="cursor-pointer col-12 text-center"
                  @click="hideModal()"
                >
                  Seguir comprando
                </div>
                <br>
                <div
                  class="cursor-pointer col-12 text-center"
                  @click="hideModal()"
                >
                  Armar otro plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PlanService from "./../services/plan";
  import EventBus from "../events";
  import {mapState} from 'vuex';

  const Lockr = require("lockr");


  export default {
  name: "ShoppingCart",

  props: {
    title: String,
    type: String,
    cost: Number,
    url: URL
  },

  data() {
    return {
      packages: [],
      plans: [],
      price: 0,
      subtotal: 0,
      redirect: false
    };
  },
    computed: {
      ...mapState(['previewPlan'])
    },
  mounted() {
    this.getPackages();
    EventBus.$on("shoppingCartOpened", () => this.getPackages());
  },

  methods: {
    goToBeneficiaries() {
      this.hideModal();
      var router = Lockr.get("ruta")
      this.$router.push({path: router});
    },

    getPackages() {
      this.packages = PlanService.getPackages();
      this.subtotal = PlanService.getSubtotalPrice();

    },

    getScore(pack) {
      return PlanService.getScorePlan(pack);
    },

    hideModal() {
      window.$("#ShoppingCart").modal("hide");
    },

    deletePackage(indexPackage) {
      this.$vs.loading();

      setTimeout(() => {
        if (this.packages[indexPackage].ourPlanType) {
          // Nuestros planes package
          EventBus.$emit("removeFromOurPlans", {
            plan: this.packages[indexPackage]
          });
        }

        PlanService.deletePackage(indexPackage);
        EventBus.$emit("packageDeleted");
        EventBus.$emit("packagesUpdated");
        this.$store.commit("StateSbPurchaseButton", true);
        const url = window.location.href;
        const urlFind = url.indexOf("beneficiario");
        if (urlFind !== -1) {
          this.$router.push("/")
        }


        this.getPackages();
        if (this.packages.length === 0) {
          this.hideModal();
        }
        this.$vs.loading.close();
      }, 800);
    },
  }
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.green-background {
  background-color: #4cc72f;
  border: none;
  color: #123291;
  font-weight: bold;
}

.modal-content {
  border-radius: 15px;
  background-color: #edf6fd;
  color: #123291;
  height: 500px;
}

@media (min-width: 768px) {
  .one-product {
    height: 300px !important;
  }

  .two-product {
    height: 340px !important;
  }

  .three-product {
    height: 390px !important;
  }

  .four-product {
    height: 450px !important;
  }

  .one-product-right {
    height: 298px !important;
  }

  .two-product-right {
    height: 338px !important;
  }

  .three-product-right {
    height: 388px !important;
  }

  .four-product-right {
    height: 448px !important;
  }
}

input {
  border-color: #123291;
  color: #74b1e6;
  font-size: 16px;
}

input::-webkit-input-placeholder {
  color: #123291;
}

input:focus {
  color: #74b1e6;
  font-weight: bold;
}

.icon {
  width: 4rem;
}

.btn {
  width: 12rem;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.borrar01 {
  padding: 0;
}

.borrar {
  color: white;
  margin-top: 9px;
}

.circle {
  width: 35px;
  height: 35px;
  color: white;
  background-color: #123291;
  border-radius: 25px;
  display: inline-block;
  line-height: 25px;
  margin: auto 3px;
  font-size: 15px;
  text-align: center;
}

.icon-box {
  color: white;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 3;
  background: #ff7678;
  padding: 15px;
  text-align: center;
}

.icon-box button {
  color: white;
  font-size: 30px;
  position: relative;
  top: -11px;
  left: 1.8px;
}

li {
  list-style: none;
}

.product {
  z-index: 1;
}

.product-border {
  border-bottom: 1px solid #50b3e6;
}

.Cart {
  z-index: 2;
}

.cursor-pointer {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #123291;
}

a:focus {
  border-bottom: 2px solid #74b1e5;
}

@media screen and (max-width: 576px) {
  h6 {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 992px) {
  .modal-body {
    overflow-y: auto;
  }
}

@media screen and (min-width: 992px) {
  .sticky {
    height: 498px;
    background-color: white;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 50px;
  }

  .text {
    height: 320px;
  }

  .product {
    overflow: auto;
    max-height: 100%;
  }
}

h6 {
  font-size: 1rem;
}

h5 {
  font-size: 1.5rem;
}
</style>
