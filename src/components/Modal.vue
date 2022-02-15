<template>
  <div
    id="myModal"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <img
            alt="star"
            class="icon mt-4"
            src="../assets/star.png"
          >
          <h5 class="modal-title mt-3 font-weight-bold">
            ¡El <span class="text-color">plan IMSS</span> solo está disponible
            para trabajadoras del hogar!
          </h5>
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
            ¿Deseas agregarlo a tu plan?
          </p>
          <div class="row mt-5 mb-5 mx-4 justify-content-center">
            <div class="col-12 col-md-6 mt-3">
              <button
                type="button"
                class="btn text-blue blue-background btn-lg btn-block"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
            <div class="col-12 col-md-6 mt-3">
              <button
                type="button"
                class="btn text-blue green-background btn-lg btn-block"
              >
                Agregar
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
  name: "Modal"
};
</script>

<style scoped>
.modal-content {
  border-radius: 15px;
  color: #123291;
  background-color: #ffffff;
}
.modal {
  background-color: #ffffff;
}
.icon {
  width: 5rem;
}

/* .btn {
  width: 8rem;
} */
.green-background {
  background-color: #7fc34a;
  border: none;
}

.text-blue {
  color: #123291;
}
.blue-background {
  background-color: #50b3e6;
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
</style>
