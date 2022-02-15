<template>
  <div
    id="PlanDeleted"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-center">
        <div class="modal-body">
          <img
            alt="star"
            class="icon mt-4"
            src="../../assets/basura.svg"
          >
          <h4 class="modal-title mt-3 font-weight-bold">
            El plan de protección ha sido eliminado
          </h4>
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
          <div class="row mt-5 mb-5 mx-2">
            <div class="col-md-6 mt-3 text-center">
              <button
                type="button"
                class="btn blue-background btn-block text-blue font-weight-bold"
                data-dismiss="modal"
              >
                Ir al inicio
              </button>
            </div>
            <div class="col-md-6 mt-3 text-center">
              <button
                type="button"
                class="btn green-background btn-block text-blue font-weight-bold"
              >
                Volver a Beneficios
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
  name: "PlanDeleted"
};
</script>

<style scoped>
.modal-content {
  border-radius: 15px;
  color: #123291;
  background-color: #dcf0fb;
}
.modal {
  background-color: rgba(9, 17, 40, 0);
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
.text-color {
  color: #50b3e6;
}

.text-blue {
  color: #123291;
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
