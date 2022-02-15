import EventBus from "../events";
import PlanService from "./../services/plan";
import CouponService from "./../services/coupon";
import AppService from "./../services/app";
import PaymentService from "./../services/payment";
import {required} from "vuelidate/lib/validators";

const _ = require("lodash");
const Lockr = require("lockr");

export const paymentCartResume = {
  data() {
    return {
      discounts: 0,
      coupon: "",
      couponError: "",
      discount: 0,
      couponApplied: false,
      packages: [],
      isPromoter: false,
      purchaseLink: "",
      subtotal:0,
      sale_subtotal:0,
      customer:null
    };
  },

  validations: {
    coupon: {
      required
    }
  },

  mounted() {
    this.getPackages();
    this.getTypeUser();
    this.subtotal = Lockr.get("subtotalplan")
    this.sale_subtotal = Lockr.get("sale_subtotal")
    if (this.packages.length === 0) {
      this.$router.push("/")
    }
  },

  methods: {
    getTypeUser() {
      this.isPromoter = AppService.getIsPromoter();
    },
    getPackages() {
      this.packages = PlanService.getPackages();
      this.customer = Lockr.get("customer")
      this.subtotal = PlanService.getSubtotalPrice();
      this.discounts = PlanService.getDiscounts();

    },
    getActiveAddons(pack) {
      return PlanService.getSavedAddons(pack);
    },
    pay() {
      EventBus.$emit("checkout");
    },
    async generateLink() {
      const [error, data] = await PaymentService.generateLink();
      if (error) {
        this.$vs.notify({
          title: "",
          text: "Error al generar link"
        });
        return;
      }
      this.purchaseLink = data.data.link;
    },
    copyToClipboard() {
      let orderLink = document.querySelector("#order-link");
      orderLink.setAttribute("type", "text");
      orderLink.select();

      document.execCommand("copy");
      this.$vs.notify({
        title: "",
        text: "Link copiado a portapapeles"
      });

      orderLink.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    async applyCoupon() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        //Error form
        this.$store.commit("SetSubTotal", this.subtotal)
        this.$store.commit("SetPromotion", this.sale_subtotal)
      } else {
        this.$vs.loading();
        const items = this.getItems();
        let [error, data] = await CouponService.applyCoupon(this.coupon, items);
        if (error) {
          this.couponApplied = false;
          this.couponError = "El cupón no es válido";
          this.subtotal = PlanService.getSubtotalPrice();
          this.sale_subtotal = PlanService.getSalePrice();
          this.$store.commit("SetSubTotal", this.subtotal)
          this.$store.commit("SetPromotion", this.sale_subtotal)
          PaymentService.setCoupon("");
          setTimeout(() => this.$vs.loading.close(), 800);
          return 0;
        }
        const orderId = Lockr.get("orderId");

        if (orderId) {
          const coupon = this.coupon;
          let [error] = await PaymentService.updateOrderCoupon(orderId, coupon);

          if (error) {
            this.couponApplied = false;
            this.couponError = "El cupón no es válido";
            this.subtotal = PlanService.getSubtotalPrice();
            this.sale_subtotal = PlanService.getSalePrice();
            this.$store.commit("SetSubTotal", this.subtotal)
            this.$store.commit("SetPromotion", this.sale_subtotal)
            PaymentService.setCoupon("");
            setTimeout(() => this.$vs.loading.close(), 800);
            return 0;
          }
        }

        setTimeout(() => {
          this.couponError = "";
          this.couponApplied = true;
          this.discount = data.data.total_discount;
          this.subtotal = PlanService.getSubtotalPrice();
          this.subtotal = this.subtotal - data.data.total_discount;
          this.$store.commit("SetSubTotal", this.subtotal)

          this.sale_subtotal = PlanService.getSalePrice();
          this.sale_subtotal = this.sale_subtotal - data.data.total_discount;
          this.$store.commit("SetPromotion", this.sale_subtotal)
          PaymentService.setCoupon(this.coupon, data.data.total_discount);
          this.$vs.loading.close();
        }, 800);
      }
    },
    getItems() {
      let itemsF = [];
      const items = [];
      const packages = PlanService.getPackages();
      packages.map(pack => pack.plans.map(plan => itemsF.push(plan.id)));
      itemsF = _.countBy(itemsF);
      for (let i in itemsF) {
        items.push({
          product: {
            id: i
          },
          quantity: itemsF[i]
        });
      }
      return items;
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
          this.$router.push("/")
        }

        this.$vs.loading.close();
      }, 800);
    },
  }
};
