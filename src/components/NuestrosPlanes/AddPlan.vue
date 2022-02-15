<template>
  <div
    id="AddPlan"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-center">
        <div class="modal-body">
          <img
            alt="cart"
            class="icon mt-5"
            src="../../assets/cart.png"
          >
          <h4 class="modal-title mt-3 font-weight-bold">
            ¡Producto añadido al carrito!
          </h4>
          <p class="mx-4">
            ¿Qué deseas hacer ahora?
          </p>
          <!-- <div class="icon-box">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div> -->
          <div class="row mt-5 mb-5 mx-2">
            <div class="col-md-6 text-center mt-3">
              <button
                type="button"
                class="btn navy-background btn-block text-blue font-weight-bold"
              >
                Pagar
              </button>
            </div>
            <div class="col-md-6 text-center mt-3">
              <button
                type="button"
                class="btn blue-background btn-block text-blue font-weight-bold"
                data-dismiss="modal"
              >
                Explorar otro plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPlan"
};
</script>

<style scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
.modal-dialog {
  max-width: 600px;
}
.modal-content {
  border-radius: 15px;
  color: #123291;
  background-color: #dcf0fb;
}
.modal {
  background-color: rgba(9, 17, 40, 0.7);
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
.text-blue {
  color: #123291;
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

.text-blue {
  color: #123291;
}
@media screen and (min-width: 768px) {
  .btn_continue {
    display: none;
  }
}
</style>
