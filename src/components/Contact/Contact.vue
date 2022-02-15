<template>
  <div>
    <div
      class="Contact px-1 mb-3"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1 class="mx-5">
            Elige quién eres y te brindaremos la información que necesites
          </h1>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div id="contact-form" />
          </div>
        </div>
      </div>
    </div>

    <shopping-cart />
  </div>
</template>

<script>
import ShoppingCart from "../ShoppingCart.vue";
import GoogleAnalyticsService from "../../services/GoogleAnalyticsService";

export default {
  name: "Contact",
  components: {ShoppingCart},

  data() {
    return {
      trackingService: ""
    };
  },

  mounted() {
    this.$vs.loading();
    this.trackingService = new GoogleAnalyticsService(this);
    this.trackingService.sendHeartBeatEvent();


    setTimeout(() => {
      window.hbspt.forms.create({
        target: "#contact-form",
        portalId: "8710915",
        formId: "0a438674-3f66-4e8e-978b-aab5c0afa03d"
      });
      this.$vs.loading.close();
    }, 300);
  }
};
</script>

<style scoped>
.Contact {
  color: #123291;
  margin-top: 120px;
}

@media screen and (max-width: 992px) {
  .hola {
    display: none;
  }
}
</style>
