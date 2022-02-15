<template>
  <div>
    <div
      class="myplan "
      data-test="my-plan"
    >
      <div class="card text-center">
        <div class=" px-3">
          <p class="text-center mt-5 font-weight-bold text-blue">
            Instrucciones
          </p>

          <p class="text-center text-blue mt-4">
            Escoge uno o más productos de nuestras categorías y arma tu plan.
          </p>

          <div class="mt-5 ">
            <ul
              class="  px-0 ml-0"
              data-test=" product-list "
            >
              <li
                v-for="(plan, index) of plans"
                :key="index"
                class="text-blue mb-3"
              >
                <span class="text-red">&#x2713;</span> {{ plan.title }}
              </li>
            </ul>
          </div>

          <div class="my-5">
            <p class="m-0 font-weight-bold text-blue text-center">
              PLAN ANUAL
            </p>
            <h3
              class="m-0 text-blue text-center"
              data-test="price"
            >
              {{ price | currency }}
            </h3>
            <p
              v-if="numberMSI"
              class="m-0 font-weight-bold text-blue text-center"
            >
              Disponible a {{ numberMSI }} MSI
            </p>
          </div>

          <button
            v-if="plans.length"
            type="button"
            data-test="add-plan-to-cart-button"
            class="btn text-white blue-background text-white"
            @click="openResumePlan({ addToCart: true })"
          >
            Añadir plan al carrito
          </button>

          <p
            v-if="plans.length"
            class="mt-3 cursor-pointer text-blue see-plan text-center"
            @click="openDetailsCustomPlan()"
          >
            Ver resumen de mi plan
          </p>
        </div>
      </div>

      <button
        v-if="plans.length"
        type="button"
        class="btn blue-background btn-block text-white mt-5"
        @click="createOtherPlan()"
      >
        Crear otro plan
      </button>
    </div>
  </div>
</template>

<script>
import EventBus from "../events";
import PlanService from "./../services/plan";
import ModalService from "./../services/modals";
import TrackingService from "../services/tracking";

export default {
  name: "MyPlan",

  props: {
    title: String,
    type: String,
    cost: Number,
    url: URL,
    mobile: Boolean
  },

  data() {
    return {
      plans: [],
      numberMSI: 0,
      price: 0,
      originalPrice: 0,
      planname: "",
      planNameAdded: false,
      options: {
        fill: {
          colors: ["#23358d"]
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "75%"
            },
            track: {
              background: "#A09BC5",
              margin: 0
            },
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: 30,
                show: true,
                color: "#123291",
                fontSize: "10px"
              },
              value: {
                color: "#123291",
                fontSize: "45px",
                offsetY: -10,
                show: true
              }
            }
          }
        },

        stroke: {
          lineCap: "round"
        },
        labels: ["DE PROTECCIÓN"]
      },
      series: [0],
      trackingService: ""
    };
  },

  watch: {
    planname: function (val) {
      if (val.length > 15) {
        this.planname = val.slice(0, -1);
        return 0;
      }
    }
  },

  mounted() {
    EventBus.$on("addPlan", plan => this.addPlan(plan));
    EventBus.$on("removePlan", plan => this.removePlan(plan));
    EventBus.$on("removeActivePackage", () => this.setDataIfExists());
    EventBus.$on("addPackageToCartFromMobile", data =>
        this.addPackageToCartFromMobile(data)
    );
    EventBus.$on("addPlanToCartMobile", config => {
      if (this.mobile) {
        this.openResumePlan(config);
      }
    });

    this.trackingService = new TrackingService(this);
    this.setDataIfExists();
  },

  methods: {
    setDataIfExists() {
      [
        this.plans,
        this.price,
        this.planname,
        this.series,
        this.originalPrice
      ] = PlanService.getDataStored();
      this.numberMSI = PlanService.getInstallments(this.price);
      this.planNameAdded = this.planname !== "";
    },

    addPlan(plan) {
      this.plans.push(plan);
      this.originalPrice = Number(this.originalPrice) + Number(plan.cost);
      if (plan.has_promotion) {
        this.price = Number(this.price) + Number(plan.sale_cost);
      } else {
        this.price = Number(this.price) + Number(plan.cost);
      }
      PlanService.setPlans(this.plans, this.price);
      let score = 0;
      this.plans.map(plan => {
        score = plan.score + score;
      });
      this.series = [score];
      this.numberMSI = PlanService.getInstallments(this.price);

      setTimeout(() => {
        ModalService.showItemAddedToShoppingCart({
          eventName: "itemAddedToShoppingCart",
          data: {
            mobile: this.mobile,
            addToCart: false
          }
        });
      }, 200);
    },

    removePlan(plan) {
      const index = this.plans.findIndex(
        planFromArray => planFromArray.title === plan.title
      );
      this.plans.splice(index, 1);

      this.originalPrice = Number(this.originalPrice) - Number(plan.cost);

      if (plan.has_promotion) {
        this.price = Number(this.price) - Number(plan.sale_cost);
      } else {
        this.price = Number(this.price) - Number(plan.cost);
      }
      this.price = this.price < 0 ? 0 : this.price;
      PlanService.setPlans(this.plans, this.price, this.originalPrice);
      this.series = [this.series[0] - plan.score];
      this.numberMSI = PlanService.getInstallments(this.price);
    },

    addPlanName() {
      if (this.planname === "") {
        this.$vs.notify({
          title: "Oops",
          text: "Agrega un nombre a tu plan",
          color: "danger"
        });
        return 0;
      }
      PlanService.setPackageName(this.planname);
      this.planNameAdded = true;
      this.$vs.notify({
        title: "Nombre guardado",
        text: `${this.planname} ha sido guardado`,
        color: "success"
      });
    },

    addPackageToCartFromMobile(config) {
      if (!this.mobile) { return 0; }
      PlanService.addPackage({
        plans: this.plans,
        price: this.price,
        planName: this.planname,
        originalPrice: this.originalPrice
      });

      /*
      this.trackingService.addToCart(
        { products: this.plans, price: this.price, planName: this.planname },
        "Arma tu plan"
      );
      */

      PlanService.removeActivePackage();
      EventBus.$emit("removeActivePackage");
      EventBus.$emit("packagesUpdated");

      window.$("#AddPlan").modal("hide");

      if (config.goToPayment) {
        this.$router.push({ path: "/arma-tu-plan/beneficiarios" });
      }
    },

    openResumePlan(config = {}) {
      this.$vs.loading();
      setTimeout(() => {
        const numberOfItems = PlanService.getNumberOfItemsInShoppingCart();

        if (numberOfItems >= 10) {
          this.$vs.loading.close();

          return ModalService.showAlert({
            type: "error",
            title: "No puedes agregar más de 10 items a tu carrito",
            message: ""
          });
        }

        if (PlanService.checkIfNameIsAlreadyTaken(this.planname)) {
          this.$vs.loading.close();
          return ModalService.showAlert({
            type: "error",
            title:
              "El nombre de tu plan ya ha sido agregado previamente, elige otro nombre para avanzar",
            message: ""
          });
        }

        PlanService.addPackage({
          plans: this.plans,
          price: this.price,
          planName: this.planname,
          originalPrice: this.originalPrice
        });

        /*
        this.trackingService.addToCart(
          { products: this.plans, price: this.price, planName: this.planname },
          "Arma tu plan"
        );
        */

        PlanService.removeActivePackage();

        EventBus.$emit("removeActivePackage");
        EventBus.$emit("packagesUpdated");

        ModalService.showItemAddedToShoppingCart({
          eventName: "itemAddedToShoppingCart",
          data: {
            mobile: this.mobile,
            fromCustomPlan: true,
            addToCart: config && config.addToCart
          }
        });
        this.$vs.loading.close();
      }, 800);
      this.trackCrearPlan()
    },

    openDetailsCustomPlan() {
      ModalService.openDetailsCustomPlan({
        options: { ...this.options },
        series: this.series
      });
    },

    createOtherPlan() {
      EventBus.$emit("setPackages", {
        plans: this.plans,
        price: this.price,
        planname: this.planname,
        originalPrice: this.originalPrice
      });
      window.$("#AddOtherPlan").modal("show");
      this.trackCrearNuevoPlan()
    }
  }
};
</script>

<style lang="scss" scoped>
.card-body {
  padding: 0 !important;
}

.form-name {
  padding: 1.25rem;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.card {
  background-color: #ffe4e5;
  color: white;
}

.text-blue {
  color: #123291;
}

.text-red {
  color: #ff7575;
}

input {
  border-color: #123291;
  background-color: #ffe4e5;
  color: #123291;
  height: 50px;
}

input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
}

input:focus {
  color: #123291;
  background-color: #ffe4e5;
}

.basket {
  width: 50%;
}

a {
  text-decoration: none;
  color: white;
}

a:focus {
  border-bottom: 2px solid #50b3e6;
}

ul {
  text-align: left;
  list-style: none; /* Quitamos los marcadores */
  padding: 0; /* Quitamos el padding por defecto de la lista */
  margin-left: 50px; /* Separamos la lista de la izquierda */
}

.blue-background {
  background-color: #123291;
  border: none;
}

.cursor-pointer {
  cursor: pointer;
}

.see-plan {
  &:hover {
    text-decoration: underline;
  }
}

.invalid-feedback {
  color: #fe9b9d;
}

.is-invalid {
  border-color: #fe9b9d;
}

.edit-name {
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.separator {
  width: 30%;
  border-bottom: 1px solid #00b4ea;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card-for-name {
  min-height: 124px;
}

@media (min-width: 991px) {
  .myplan {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem !important;
    margin-top: 0.5rem !important;
  }
}
</style>
