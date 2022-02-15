<template>
  <div
    id="ModalPlan"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div
        class="modal-content"
        style="height:580px;"
      >
        <div class="modal-header">
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
        </div>
        <div
          v-if="plan.meta"
          class="modal-body"
        >
          <div class="row">
            <div class="col-12 col-lg-5 sticky">
              <p class="font-weight-bold">
                Planes Bamba®
              </p>
              <h3 class="font-weight-bold">
                {{ plan.name }}
              </h3>
              <!-- <apexchart type="radialBar" :options="options" :series="[plan.resilience_score]"></apexchart> -->
              <p class="font-weight-bold text-uppercase">
                Plan anual
              </p>
              <p class="font-weight-bold">
                {{ plan.price | currency }}
              </p>
              <p>MSI:</p>
              <p>{{ msiOption }} meses de {{ getMSIPrice(plan, msiOption) }}</p>
              <button
                type="button"
                class="btn text-white blue-background btn-md mb-4 font-weight-bold"
              >
                Añadir al carrito
              </button>
            </div>
            <div class="col-12 col-lg-7 mt-2 text-left text">
              <p>{{ plan.meta.description }}</p>

              <div>
                <p class="font-weight-bold text-left">
                  Las soluciones del {{ plan.name }}
                </p>
                <li
                  v-for="(solution, index) in plan.meta.solutions"
                  :key="index"
                >
                  <i class="fas fa-star mr-2" /> {{ solution }}
                </li>
              </div>

              <div
                v-for="(product, index) in plan.meta.products"
                :key="index"
              >
                <!-- <hr></hr> -->
                <h4 class="my-3">
                  {{ product.name }}
                </h4>
                <div>
                  <p class="font-weight-bold text-left">
                    Qué incluye
                  </p>
                  <li
                    v-for="feature in product.features"
                    :key="feature"
                  >
                    <i class="fas fa-check mr-2" /> {{ feature }}
                  </li>
                </div>
                <div class="mt-2">
                  <p
                    v-for="feature in product.features_notes"
                    :key="feature"
                  >
                    <strong>{{ feature }}</strong>
                  </p>
                </div>
                <div>
                  <p class="font-weight-bold text-left mt-3">
                    Qué no incluye
                  </p>
                  <li
                    v-for="feature in product.notIncluded"
                    :key="feature"
                  >
                    <i class="fas fa-times mr-2" /> {{ feature }}
                  </li>
                </div>
                <div v-if="product.coverages">
                  <p class="font-weight-bold text-left mt-3">
                    Cobertura
                  </p>
                  <li
                    v-for="coverage in product.coverages"
                    :key="coverage"
                  >
                    <i class="fas fa-star mr-2" /> {{ coverage }}
                  </li>
                </div>
                <div>
                  <p class="font-weight-bold text-left mt-3">
                    Beneficios
                  </p>
                  <li
                    v-for="benefit in product.beneficts"
                    :key="benefit"
                  >
                    <i class="fas fa-star mr-2" /> {{ benefit }}
                  </li>
                </div>
                <div class="mt-2">
                  <p
                    v-for="feature in product.beneficts_notes"
                    :key="feature"
                  >
                    <strong>{{ feature }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-header" />
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../events";
import PlanService from "../../services/plan";
import ChartService from "../../services/charts";

export default {
  name: "ModalPlan",

  data() {
    return {
      plan: {},
      msiOption: 0,
      features: ["hola", "hola"],
      notIncluded: ["mundo", "mundo"],
      benefits: ["Beneficio 1", "Beneficio 2", "Beneficio 3"]
    };
  },

  mounted() {
    EventBus.$on("openModalDetailsPlan", plan => {
      this.plan = plan;
      this.options = ChartService.ourPlansStartChart;
      this.msiOption = PlanService.getInstallments(this.plan.price);
    });
  },

  methods: {
    getMSIPrice(plan, msi) {
      return (plan.price / msi).toFixed(2)
    }
  }
};
</script>

<style scoped>
.modal-content {
  border-radius: 15px;
  background-color: #edf6fd;
  color: #123291;
}
.modal {
  background-color: rgba(9, 17, 40, 0.7);
}

.icon {
  width: 4rem;
}

.btn {
  width: 12rem;
}
.fa-check {
  color: #7fc34a;
}
.fa-times {
  color: #ff7678;
}
.fa-star {
  color: #faad19;
}
.red-background {
  background-color: #ff7678;
  border: none;
}
.text-navy {
  color: #123291;
}
.blue-background {
  background-color: #50b3e6;
  border: none;
}
.text-blue {
  color: #50b3e6;
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
input {
  background-color: transparent;
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}
input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 12px;
}
input:focus {
  background-color: transparent;
  color: #123291;
  font-size: 14px;
  font-weight: bold;
}
li {
  list-style: none;
}
.modal-body {
  overflow: auto;
}
@media screen and (min-width: 992px) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
}
</style>
