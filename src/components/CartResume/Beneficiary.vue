<template>
  <div
    class="animate__animated animate__fadeInDown"
    data-test="beneficiary-data"
  >
    <div class="row mr-0 ml-0 my-4 text-left">
      <div class="col-8 col-md-3 just-mobile mb-3">
        <button
          type="button"
          class="btn blue-background btn-block text-blue"
          data-toggle="collapse"
          :data-target="'#collapseExample' + indexPackage + indexBeneficiary"
          aria-expanded="false"
          :aria-controls="'collapseExample' + indexPackage + indexBeneficiary"
          data-test="button-for-show-beneficiary-form"
        >
          <span v-if="beneficiary.name">
            Editar Datos
          </span>
          <span v-else>
            Añadir Datos
          </span>
        </button>
      </div>
      <div class="col-4 col-md-1 borrar01 just-mobile mb-3">
        <div
          data-test="remove-button"
          class="circle mt-1 mr-2 cursor-pointer"
          data-toggle="tooltip"
          title="Este botón sirve para eliminar el plan."
          @click="deleteBenefficary()"
        >
          <i class="far fa-trash-alt borrar" />
        </div>
      </div>
      <div
        :ref="indexBeneficiary + '_beneficiary'"
        class="col-6 col-md-2"
      >
        <small>Nombre</small>
        <p data-test="name">
          {{ beneficiary.name || "" }}
        </p>
      </div>
      <!-- <div class="col-4 col-md-2">
        <small>Protección</small>
        <h6>30%</h6>
      </div> -->
      <div class="col-6 col-md-2">
        <small>Duración</small>
        <p class="font-weight-bold">
          Anual
        </p>
      </div>
      <div class="col-6 col-md-3">
        <small>Precio</small>
        <p class="font-weight-bold">
          {{ pricePackage | currency }}
        </p>
      </div>
      <div class="col-6 col-md-4 just-desktop">
        <button
          type="button"
          class="btn blue-background btn-block text-blue"
          data-toggle="collapse"
          :data-target="'#collapseExample' + indexPackage + indexBeneficiary"
          aria-expanded="false"
          :aria-controls="'collapseExample' + indexPackage + indexBeneficiary"
          data-test="button-for-show-beneficiary-form"
        >
          <span v-if="beneficiary.name">
            Editar Datos
          </span>
          <span v-else>
            Añadir Datos
          </span>
        </button>
      </div>
      <div class="col-6 col-md-1 borrar01 just-desktop">
        <div
          data-test="remove-button"
          class="circle mt-1 mr-2 cursor-pointer"
          data-toggle="tooltip"
          data-placement="top"
          title="Este botón sirve para eliminar el plan."
          @click="deleteBenefficary()"
        >
          <i class="far fa-trash-alt borrar" />
        </div>
      </div>
    </div>
    <beneficiary-form
      :pack="pack"
      :index-beneficiary="indexBeneficiary"
      :index-package="indexPackage"
      :beneficiary="beneficiary"
    />
  </div>
</template>

<script>
import BeneficiaryForm from "./BeneficiaryForm.vue";
import PlanService from "../../services/plan";
import EventBus from "../../events";
import ModalService from "../../services/modals";

export default {

  name: "Beneficiary",
  components: {BeneficiaryForm},

  props: ["pack", "beneficiary", "indexPackage", "indexBeneficiary"],

  data() {
    return {
      score: 0,
      pricePackage: 0
    };
  },

  async mounted() {
    EventBus.$on("updateSubtotalPricePackage", data => {
      if (
        data.indexBeneficiary === this.indexBeneficiary &&
        data.indexPackage === this.indexPackage
      ) {
        this.pricePackage = data.price;
      }
    });

    EventBus.$on(
      "updateName",
      (beneficiary, indexBeneficiary, indexPackage) => {
        if (
          indexBeneficiary === this.indexBeneficiary &&
          indexPackage === this.indexPackage
        ) {
          this.beneficiary.name = beneficiary.name;
        }
      }
    );

    this.pricePackage = PlanService.getSubtotalBeneficiary(
      this.indexPackage,
      this.indexBeneficiary
    );
    this.getScore();
  },

  methods: {
    getScore() {
      this.score = PlanService.getScorePlan(this.pack);
    },

    deleteBenefficary() {
      if (this.pack.beneficiaries.length > 1) {
        this.$vs.loading();
        setTimeout(() => {
          EventBus.$emit("deleteBeneficiary", this.indexBeneficiary);
          this.pack.beneficiaries.splice(this.indexBeneficiary, 1);
          PlanService.deleteBeneficiary(
            this.indexPackage,
            this.indexBeneficiary
          );
          this.$vs.loading.close();
          EventBus.$emit("updateSubtotal");
        }, 500);
      } else {
        ModalService.showAlert({
          type: "alert",
          title: "No puedes eliminar el beneficiario",
          message: "Tu plan necesita al menos un beneficiario",
          buttonText: "Entendido"
        });
      }
    }
  }
};
</script>

<style scoped>
.borrar {
  color: white;
  margin-top: 9px;
}

.cursor-pointer {
  cursor: pointer;
}

.circle {
  width: 35px;
  height: 35px;
  color: white;
  background-color: #0e2e93;
  border-radius: 25px;
  display: inline-block;
  line-height: 25px;
  margin: auto 3px;
  font-size: 15px;
  text-align: center;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

h6 {
  color: #50b3e6;
  font-weight: bold;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
</style>
