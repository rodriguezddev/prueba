<template>
  <div>
    <!-- <promoter-banner class="banner" v-if="showPromoterBanner"/> -->
    <div class="Promotion container">
      <promo-header />
      <promotion-form />
      <activate />
      <benefits />
      <promo-footer />
    </div>
  </div>
</template>

<script>
import Activate from "./Activate.vue";
import Benefits from "./Benefits.vue";
import PromoFooter from "./PromoFooter.vue";
import PromoHeader from "./PromoHeader.vue";
import PromotionForm from "./PromotionForm.vue";

export default {
  components: {
    Benefits,
    PromoHeader,
    PromoFooter,
    Activate,
    PromotionForm
  },

  data() {
    return {
      showPromoterBanner: false
    };
  }
};
</script>

<style scoped>
.Promotion {
  margin-top: 100px;
}
</style>
