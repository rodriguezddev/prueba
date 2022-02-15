<template>
  <div class="row mx-0 flex-column align-items-start">
    <label class="font-weight-bold text-left">Forma de pago</label>
    <select
            v-model.trim="$v.installment.$model"
            :class="{'is-invalid': $v.installment.$error }"
            class="input-bamba"
            name="installments"
            placeholder="Forma de pago"
            style="height:38px;"
    >
      <option
        :value="0"
        selected
      >
        Pago de contado
      </option>
      <option
        v-for="msi in installments"
        :key="msi"
        :value="msi"
      >
        {{ msi }} MSI
      </option>
    </select>
    <div
      v-if="$v.installment.$error"
      class="invalid-feedback"
    >
      Proporciona tu forma de pago
    </div>
  </div>
</template>

<script>
  import {required} from "vuelidate/lib/validators";
  import PlanService from "./../services/plan";
  import EventBus from "../events";

  export default {
  name: "PaymentInstallments",
  props: {
    total: {
      type: Number,
      default: null
    }
  },
  data() {
    const total = this.total !== 0 ? this.total : PlanService.getSubtotalPrice();

    return {
      installments: PlanService.getInstallmentOptions(total),
      installment: 0
    };
  },
  watch: {
    installment: (value) => {
      EventBus.$emit("installmentsChanged", value);
    }
  },

  validations: {
    installment: {
      required
    }
  }
};
</script>


