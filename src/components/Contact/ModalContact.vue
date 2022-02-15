<template>
  <div
    id="ModalContact"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <img
            alt="star"
            class="icon mt-4"
            src="../../assets/star.png"
          >
          <h2 class="modal-title mt-3 px-3 font-weight-bold">
            ¡Gracias hemos recibido tus datos!
          </h2>
          <div class="icon-box">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <p class="mt-2">
            Nos contactaremos contigo a la brevedad posible
          </p>
          <div class="row mt-5 mb-5 justify-content-center">
            <div class="col-6 col-md-4">
              <router-link
                to="/"
                type="button"
                class="btn text-blue green-background"
                data-dismiss="modal"
              >
                Ir al Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalContact"
};
</script>

<style scoped>
.modal-content {
  border-radius: 15px;
  color: #123291;
}
.modal {
  background-color: rgba(9, 17, 40, 0.7);
}
.icon {
  width: 5rem;
}

.btn {
  width: 8rem;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}
.text-color {
  color: #50b3e6;
}
.green-background {
  background-color: #7fc34a;
  border: none;
}

.text-blue {
  color: #123291;
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

@media screen and (min-width: 992px) {
  .btn {
    width: 9rem;
  }
}
</style>
