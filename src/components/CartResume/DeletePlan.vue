<template>
  <div
    id="DeletePlan"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-center">
        <div class="modal-body text-center">
          <img
            alt="star"
            class="icon mt-4"
            src="../../assets/img/basura.svg"
          >
          <h4
            v-if="!deletePackage"
            class="modal-title mt-3 font-weight-bold"
          >
            ¿Quieres eliminar el plan de protección de
            <span class="text-color">{{ beneficiary.name }}</span>?
          </h4>
          <h4
            v-else
            class="modal-title mt-3 font-weight-bold"
          >
            ¿Quieres eliminar el plan
            <span class="text-color">{{ pack.name }}</span>?
          </h4>
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
          <div class="row mt-5 mb-5 mx-2">
            <div class="col-6 text-center">
              <button
                type="button"
                class="btn red-background btn-block text-white font-weight-bold"
                @click="deleteData()"
              >
                Eliminar Plan
              </button>
            </div>
            <div class="col-6 text-center">
              <button
                type="button"
                class="btn blue-background btn-block text-white font-weight-bold"
                data-dismiss="modal"
              >
                Conservar plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../events";
import PlanService from "../../services/plan";

const Lockr = require("lockr");

export default {
  name: "DeletePlan",

  data() {
    return {
      deletePackage: false,
      pack: "",
      beneficiary: "",
      indexBeneficiary: "",
      indexPackage: ""
    };
  },

  mounted() {
    this.getData();

    EventBus.$on("deleteBen", data => {
      (this.deletePackage = false),
          (this.pack = data.pack),
          (this.beneficiary = data.beneficiary),
          (this.indexBeneficiary = data.indexBeneficiary),
          (this.indexPackage = data.indexPackage);
    });

    EventBus.$on("deletePackage", data => {
      this.deletePackage = true;
      (this.pack = data.pack), (this.indexPackage = data.indexPackage);
    });
  },

  methods: {
    deleteData() {
      this.$vs.loading();

      setTimeout(() => {
        if (this.deletePackage) {
          Lockr.set("lastPackageRemoved", this.pack);
          if (this.pack.ourPlanType) {
            // Nuestros planes package
            PlanService.removeProductFromOurPlans(this.pack.plans[0]);
            EventBus.$emit("removeFromOurPlans", { plan: this.pack });
          } else {
            PlanService.deletePackage(this.indexPackage);
          }

          window.$("#DeletePlan").modal("hide");
          EventBus.$emit("packagesUpdated");
          EventBus.$emit("packageDeleted");
          this.$vs.loading.close();
        } else {
          PlanService.deleteBeneficiary(
            this.indexPackage,
            this.indexBeneficiary
          );
          window.$("#DeletePlan").modal("hide");
          EventBus.$emit("benDeleted", {
            indexPackage: this.indexPackage,
            indexBeneficiary: this.indexBeneficiary
          });
          this.$vs.loading.close();
        }
      }, 800);
    },
    getData() {
      [this.plans, this.cost, this.planName] = PlanService.getDataStored();
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 20px;
}
.modal-content {
  border-radius: 15px;
  color: #123291;
  background-color: #dcf0fb;
}

.icon {
  width: 5rem;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.red-background {
  background-color: #ff787d;
  border: none;
}

.text-color {
  color: #50b3e6;
}

.navy-background {
  border: none;
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
</style>
