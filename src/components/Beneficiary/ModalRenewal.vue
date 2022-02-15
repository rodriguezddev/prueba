<template>
  <div
    id="ModalRenewal"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content text-center">
        <div class="modal-body px-5">
          <h2 class="modal-title mt-5 font-weight-bold px-5">
            ¿Deseas renovar la vigencia de tu plan de protección actual?
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
          <div class="row justify-content-center">
            <div class="col-6">
              <button
                type="button"
                class="btn green-background btn-block btn-lg text-blue font-weight-bold mt-3"
                data-dismiss="modal"
              >
                Renovar Plan
              </button>
            </div>
          </div>
          <p class="mt-4 font-weight-bold">
            Explora otras opciones de protección:
          </p>
          <div class="row mt-5 mb-5 mx-2">
            <div class="col-md-6 text-center mt-2">
              <button
                type="button"
                class="btn blue-background btn-block btn-lg text-blue font-weight-bold"
                data-dismiss="modal"
              >
                Ver Planes
              </button>
            </div>
            <div class="col-md-6 text-center mt-2">
              <a
                type="button"
                class="btn blue-background btn-block btn-lg text-blue font-weight-bold"
              >
                Armar plan a la medida
              </a>
              <plan-deleted />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalRenewal"
};
</script>
PlanDeleted

<style scoped>
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
.green-background {
  background-color: #7fc34a;
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
</style>
