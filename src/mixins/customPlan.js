import EventBus from "../events";
import PlanService from "../services/plan";
import ModalService from "../services/modals";

export const customPlan = {
  props: ["pack", "indexPackage"],

  data() {
    return {
      numberPackages: []
    };
  },

  mounted() {
    const packages = PlanService.getPackages();
    this.numberPackages = packages.length;
  },

  methods: {
    addBeneffiary() {
      const beneficiary = {
        alias: "",
        name: "",
        maternalLastname: "",
        paternalLastname: "",
        email: "",
        mobile: "",
        birthdate_day: "",
        birthdate_month: "",
        birthdate_year: "",
        gender: "",
        occupation: "",
        state: "",
        city: "",
        addPagoNomina: false,
        addSeguroAccidentes: false,
        addConsultasTelefonicas: false
      };
      this.pack.beneficiaries.push(beneficiary);
      PlanService.saveBeneficiariesData(
        this.indexPackage,
        this.pack.beneficiaries.length - 1,
        beneficiary
      );
      EventBus.$emit("updateSubtotal");
    },

    removeBeneffiary() {
      if (this.pack.beneficiaries.length > 1) {
        this.pack.beneficiaries.pop();
        EventBus.$emit("updateSubtotal");
      } else {
        ModalService.showAlert({
          type: "alert",
          title: "No puedes eliminar el beneficiario",
          message: "Tu plan necesita al menos un beneficiario",
          buttonText: "Entendido"
        });
      }
    },

    deletePackage() {
      const packages = PlanService.getPackages();
      this.numberPackages = packages.length;

      ModalService.confirmDeletePlan({
        pack: this.pack,
        indexPackage: this.indexPackage
      });
    },

    getScore(pack) {
      return PlanService.getScorePlan(pack);
    }
  }
};
