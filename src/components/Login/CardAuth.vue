<template>
  <div class="card my-5 mx-3 ">
    <div class="card-body p-2 px-5 text-center">
      <h1 class="font-weight-bold mt-3">
        ¡Hola!
      </h1>
      <h4 class="font-weight-bold mt-4">
        ¿Ya eres cliente bamba?
      </h4>

        <button
                data-target="#myModal" data-toggle="modal" type="button"
        class="btn orange-background btn-lg btn-block mt-5 mr-3 text-white font-weight-bold "
      >
        Si, ya soy cliente
        </button>
      <router-link
        to="/sign-up"
        class="btn navy-background btn-lg btn-block mt-3 mr-3 mb-5 text-white font-weight-bold "
      >
        No, aún no soy cliente
      </router-link>
    </div>


  </div>
</template>

<script>

    import GoogleAnalyticsService from "../../services/GoogleAnalyticsService";

    export default {
  name: "CardAuth",

    data() {
    return {
      trackingService: ""
    };
  },
    mounted() {
    this.trackingService = new GoogleAnalyticsService(this);
    this.trackingService.sendHeartBeatEvent();
    },
        methods: {
            stateLogin() {
                var modalState = true
                this.$store.commit("SetLoginModal", modalState)
            }
        }
};
</script>

<style scoped>
.card {
  background-color: #ffe4e5;
  border-radius: 15px;
  border: none;
  -webkit-box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
}
.blue-background {
  background-color: #50b3e6;
  border: none;
}
.orange-background {
  background-color: #ff787d;
  border: none;
  border-radius: 10px;
  font-size: 16px;
}
.navy-background {
  border: none;
  border-radius: 10px;
  font-size: 16px;
}
ul {
  list-style: none;
  padding-left: 0;
}
.fa-check-circle {
  color: #7fc34b;
}
.NoCode {
  border-bottom: 2px solid #ff787d;
}
</style>
