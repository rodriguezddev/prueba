<template>
  <div>
    <div class="just-desktop">
      <div
        class="row mr-0 ml-0 mt-3 text-left"
        data-test="custom-plan"
      >
        <div class="col-6 col-md-1 borrar01">
          <div
            class="circle mt-1 mr-2 cursor-pointer"
            data-toggle="tooltip"
            data-placement="top"
            title="Este botón sirve para eliminar el plan."
            @click="deletePackage()"
          >
            <i class="far fa-trash-alt borrar" />
          </div>
        </div>
        <div class="col-6 col-md-3">
          <small>Plan</small>
          <p
            class="mt-1 font-weight-bolder"
            data-test="plan-name"
          >
            {{ pack.name }}
          </p>
        </div>
        <!-- <div class="col-6 col-md-2">
                    <small>Protección</small>
                    <p class="mt-1 font-weight-bolder" data-test="plan-protection-level">{{ getScore(pack) }}%</p>
                </div> -->
        <div class="col-6 col-md-2">
          <small>Duración</small>
          <p class="mt-1 font-weight-bolder">
            Anual
          </p>
        </div>
        <div class="col-6 col-md-2">
          <small>Precio</small>
          <p
            class="mt-1 font-weight-bolder"
            data-test="plan-price"
          >
            {{ pack.price | currency }}
          </p>
        </div>
        <div class="col-6 col-md-2">
          <small>Cant.</small>
          <div class="d-flex align-items-center mt-1">
            <p
              class="font-weight-bold mx-3 cursor-pointer button-beneffiary"
              @click="removeBeneffiary()"
            >
              -
            </p>
            <p data-test="plan-beneficiaries-number">
              {{ pack.beneficiaries.length }}
            </p>
            <p
              class="font-weight-bold mx-3 cursor-pointer button-beneffiary"
              data-test="add-beneficiary-button"
              @click="addBeneffiary()"
            >
              +
            </p>
          </div>
        </div>
        <div class="col-12 text-right mb-2" />
      </div>
    </div>

    <div class="just-mobile">
      <custom-plan-mobile
        :pack="pack"
        :index-package="indexPackage"
      />
    </div>
  </div>
</template>

<script>
import {customPlan} from "../../mixins/customPlan";
import CustomPlanMobile from "./CustomPlanMobile.vue";

export default {
  name: "CustomPlan",

  components: {
    CustomPlanMobile
  },

  mixins: [customPlan],

  props: ["pack", "indexPackage"]
};
</script>

<style scoped>
.hidden {
  visibility: hidden;
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

.fa-chevron-circle-right {
  color: white;
}

.row-border {
  border-bottom: 1px solid #50b3e6;
}

a {
  color: #50b3e6;
  text-decoration: none;
  font-family: Silka SemiBold;
}

.cursor-pointer {
  cursor: pointer;
}

.button-beneffiary {
  font-weight: bolder;
  font-size: 1rem;
}
</style>
