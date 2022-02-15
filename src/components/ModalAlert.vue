<template>
  <div
    id="alert"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div
        ref="modal_alert"
        class="modal-content animate__animated animate__slideInDown"
      >
        <div class="modal-body text-center">
          <img
            v-if="type === 'info'"
            class="icon mt-4"
            src="../assets/img/info.png"
            alt="star"
          >
          <img
            v-if="type === 'error'"
            class="icon mt-4"
            src="../assets/img/error.png"
            alt="star"
          >
          <img
            v-if="type === 'success'"
            class="icon mt-4"
            src="../assets/img/success.png"
            alt="star"
          >
          <h3 class="modal-title mt-3 font-weight-bold">
            {{ title }}
          </h3>

          <h4 class="modal-title mt-3 font-weight-bold">
            {{ message }}
          </h4>
          <div class="icon-box">
            <button
              class="close"
              type="button"
              @click="close()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="row mt-3 mb-5 mx-2">
            <button
              type="button"
              class="btn btn-secondary btn-block text-white font-weight-bold"
              @click="close()"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../events";

export default {
  name: "Alert",

  data() {
    return {
      message: "",
      title: "",
      type: "info",
      buttonText: "Ok"
    };
  },

  mounted() {
    EventBus.$on("alertMessage", message => {
      this.message = message.message;
      this.title = message.title;
      this.type = message.type ? message.type : this.type;
      this.buttonText = message.buttonText
          ? message.buttonText
          : this.buttonText;
    });
  },

  methods: {
    close() {
      this.$refs["modal_alert"].classList.remove("animate__slideInDown");

      setTimeout(() => {
        this.$refs["modal_alert"].classList.add("animate__slideOutUp");
      }, 100);

      setTimeout(() => {
        window.$("#alert").modal("hide");
        this.$refs["modal_alert"].classList.remove("animate__slideOutUp");
        this.$refs["modal_alert"].classList.add("animate__slideInDown");
      }, 600);
    }
  }
};
</script>

<style scoped>
.modal-content {
  border-radius: 15px;
  color: #123291;
  background-color: #ffffff;
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

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
