<template>
  <div
    v-if="channel"
    class="row bg-salmon-resilience-light"
  >
    <div class="container p-2">
      <div class="col-md-6 text-lg-left">
        <div class="d-flex flex-row">
          <div class="d-flex flex-column h-100 align-self-center">
            <p class="m-l-4 mb-0 font-weight-bold">
              Tienda oficial del Socio Bamba
            </p>
            <p class="font-weight-bold">
              {{ channel.promoterName }}
              <span class="font-weight-light">|
                <a
                  :href="'https://api.whatsapp.com/send?phone=52' + channel.cellphone + '&amp;text=%C2%A1Hola!%20Vengo%20de%20su%20sitio%20web,%20me%20interesa%20saber%20m%C3%A1s%20sobre%20ustedes,%20%C2%BFme%20ayudas%20por%20favor?'"
                  target="_blank"
                >
                  {{ channel.cellphone }}
                </a>
              </span>
            </p>
          </div>
          <div class="d-flex flex-column h-100 ml-4">
            <img
              :src="channelLogo"
              alt=""
              class="promoter-photo rounded-circle img-fluid align-self-center"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppService from "./../../services/app";

export default {
    name: "PromoterBanner",
    data: function () {
        return {
            channelLogo: 'https://c4uno-promoters-production.s3-us-west-2.amazonaws.com/vendor/c4uno/store/img/bamba_logo.png',
            channel: AppService.getChannel(),
        }
    },
    beforeMount() {
        if (this.channel && this.channel.promoterPhoto !== null) {
            this.channelLogo = this.channel.promoterPhoto;
        }
    }
}
</script>

<style scoped>
.promoter-photo {
    width: 80px;
}
</style>
