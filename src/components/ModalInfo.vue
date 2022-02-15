<template>
  <div
    id="ModalInfo"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div
        class="modal-content"
        style="height:500px;"
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
          v-if="plan"
          class="modal-body"
        >
          <div class="row">
            <div
              class="col-12 col-lg-5 sticky"
              style="height:400px;"
            >
              <h4 class="font-weight-bold">
                {{ plan.title }}
              </h4>
              <h6 class="card-subtitle mb-2">
                <span class="text-blue">Categoría:</span> {{ plan.category }}
              </h6>
              <img
                class="img-fluid icon mt-3 d-block mx-auto"
                :src="url"
                alt=""
                style="width:100px"
              >
              <div class="">
                <h1 class="m-0 text-center">
                  {{ plan.cost | currency }}
                </h1>
                <!-- <p class="m-0 font-weight-bold">Disponible a 12 MSI</p> -->
              </div>
              <div
                v-if="selected"
                class="row mt-5 mb-5 justify-content-center"
              >
                <div class="col-12">
                  <button
                    type="button"
                    class="btn btn-primary red-background btn-md text-navy font-weight-bold"
                  >
                    Eliminar del plan
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-7 mt-2 text-left text">
              <p>{{ plan.description }}</p>
              <p v-if="plan.description_notes">
                <strong>{{ plan.description_notes }}</strong>
              </p>
              <div>
                <p class="font-weight-bold text-left">
                  Qué incluye
                </p>
                <li
                  v-for="feature in plan.features"
                  :key="feature"
                >
                  <i class="fas fa-check mr-2" /> {{ feature }}
                </li>
              </div>
              <div class="mt-2">
                <p
                  v-for="feature in plan.features_notes"
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
                  v-for="feature in plan.notIncluded"
                  :key="feature"
                >
                  <i class="fas fa-times mr-2" /> {{ feature }}
                </li>
              </div>
              <div v-if="plan.coverages">
                <p class="font-weight-bold text-left mt-3">
                  Cobertura
                </p>
                <li
                  v-for="coverage in plan.coverages"
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
                  v-for="benefit in plan.beneficts"
                  :key="benefit"
                >
                  <i class="fas fa-star mr-2" /> {{ benefit }}
                </li>
              </div>

              <div
                v-if="plan.final_notes"
                class="mt-3"
              >
                <p
                  v-for="note in plan.final_notes"
                  :key="note"
                >
                  <strong>{{ note }}</strong>
                </p>
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
import EventBus from "../events";

export default {
  name: "ModalInfo",

  data() {
    return {
      plan: false,
      selected: false
    };
  },

  mounted() {
    EventBus.$on("openCardDetails", data => {
      const dataCloned = {...data};
      this.plan = dataCloned.plan;
      this.selected = dataCloned.selected;
    });
  },

  methods: {
    addPlan() {
      this.$vs.loading();
      setTimeout(() => {
        this.selected = !this.selected;
        EventBus.$emit("addPlan", this.plan);
        this.$vs.loading.close();
      }, 800);
    },

    removePlan() {
      this.$vs.loading();
      setTimeout(() => {
        this.selected = !this.selected;
        EventBus.$emit("removePlan", this.plan);
        this.$vs.loading.close();
      }, 800);
    },

    getImage() {
      const url = require("../assets/img/plans_icons/" + this.plan.image);
      return url;
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

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.red-background {
  background-color: #ff7678;
  border: none;
}

.text-navy {
  color: #123291;
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

@media screen and (min-width: 992px) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
}

li {
  list-style: none;
}

.modal-body {
  overflow: auto;
}
</style>
