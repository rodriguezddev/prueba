<template>
  <div>
    <div
      id="Resume"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content animate__animated animate__slideInDown">
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
            <div class="row color_left">
              <div class="col-12 col-lg-8 mt-3 text-left text">
                <div class="Cart mt-2 mb-4">
                  <h2 class="m-0 ml-4">
                    Resumen del Plan
                  </h2>
                  <p class="m-0 mt-1 ml-4">
                    {{ planName || "Plan Personalizado" }}
                  </p>
                </div>
                <div
                  v-for="(plan, index) in plans"
                  :key="plan.id"
                  class="product pl-0"
                >
                  <div class="row mr-0 ml-0 product-border mt-3 mb-2">
                    <div class="col-2 borrar01">
                      <div
                        class="circle mx-auto d-block mt-1 mr-2 cursor-pointer"
                        @click="deletePlan(plan, index)"
                      >
                        <i class="far fa-trash-alt borrar" />
                      </div>
                    </div>
                    <div class="col-5">
                      <small class="mt-2">Producto</small>
                      <h6>{{ plan.title }}</h6>
                    </div>
                    <div class="col-5">
                      <small>Precio</small>
                      <h6>{{ plan.cost | currency }}</h6>
                    </div>
                    <div class="col-8 offset-2 mb-2" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 sticky text-left">
                <div class="total">
                  <div class="mt-3">
                    <!--                                        <apexchart type="radialBar" :options="options" :series="series"></apexchart>-->
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2 text-muted mt-3">
                      <small> Subtotal ({{ plans.length }} productos):</small>
                    </p>
                    <p class="mb-2 text-muted mt-3">
                      <small>{{ price | currency }}</small>
                    </p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="font-weight-bold">
                      Total:
                    </h5>
                    <h5 class="font-weight-bold">
                      {{ price | currency }}
                    </h5>
                  </div>
                </div>
                <div class="row mt-4 mb-3 justify-content-center">
                  <div class="col-12 text-center">
                    <button
                      type="button"
                      class="btn green-background text-white btn-md mb-4 font-weight-bold"
                      style="width:235.33px"
                      @click="openResumePlan()"
                    >
                      Añadir plan al carrito
                    </button>
                  </div>
                  <div
                    class="cursor-pointer"
                    @click="hideModal()"
                  >
                    Seguir comprando
                  </div>
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

export default {
  name: "ModalResume",

  data() {
    return {
      plans: [],
      price: 0,
      originalPrice: 0,
      planName: "",
      options: {},
      series: [],
      score: 0
    };
  },

  mounted() {
    EventBus.$on("resumeModal", ({ /* options, */ series }) => {
      this.setData();
      this.options = {
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "75%"
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: 22,
                show: true,
                color: "#123291",
                fontSize: "10px"
              },
              value: {
                color: "#123291",
                fontSize: "30px",
                offsetY: -13,
                show: true
              }
            }
          }
        },

        stroke: {
          lineCap: "round"
        },
        labels: ["DE PROTECCIÓN"]
      };
      this.series = series;
    });
  },

  methods: {
    setData() {
      [
        this.plans,
        this.price,
        this.planName,
        this.score,
        this.originalPrice
      ] = PlanService.getDataStored();
    },

    hideModal() {
      window.$("#Resume").modal("hide");
    },

    openResumePlan() {
      this.$vs.loading();

      setTimeout(() => {
        PlanService.addPackage({
          plans: this.plans,
          price: this.price,
          planName: this.planName,
          originalPrice: this.originalPrice
        });
        PlanService.removeActivePackage();
        EventBus.$emit("removeActivePackage");
        EventBus.$emit("packagesUpdated");
        EventBus.$emit("openResumeModal");
        window.$("#Resume").modal("hide");
        window.$("#AddPlan").modal("show");
        this.$vs.loading.close();
      }, 800);
    },

    deletePlan(plan, index) {
      EventBus.$emit("removePlan", plan);
      this.plans.splice(index, 1);
      this.setData();
    }
  }
};
</script>

<style scoped>
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

.cursor-pointer {
  cursor: pointer;
}

.background-white {
  background: white;
}

.modal-content {
  border-radius: 15px;
  background-color: #dcf0fb;
  color: #123291;
}

input {
  border-color: #123291;
  color: #50b3e6;
}

input::-webkit-input-placeholder {
  color: #123291;
}

input:focus {
  color: #50b3e6;
  font-weight: bold;
}

.fa-check {
  color: #50b3e6;
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

.borrar {
  color: white;
  margin-top: 9px;
}

.circle {
  width: 35px;
  height: 35px;
  color: white;
  background-color: #50b3e6;
  border-radius: 25px;
  display: inline-block;
  line-height: 25px;
  margin: auto 3px;
  font-size: 15px;
  text-align: center;
}

.modal-header {
  border-bottom: none;
  position: relative;
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

.save {
}

a {
  text-decoration: none;
  color: #123291;
}

a:focus {
  border-bottom: 2px solid #50b3e6;
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
    background-color: white;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .product {
    overflow: auto;
    max-height: 100%;
  }
}
</style>
