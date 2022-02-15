<template>
  <div
    id="ModalDetails"
    class="modal pr-0"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div
        class="modal-content"
        style="height:500px;"
      >
        <div class="modal-header">
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
        </div>
        <div class="modal-body">
          <div class="row">
            <div
              class="col-12 col-lg-5 sticky"
              style="height:400px;"
            >
              <p class="font-weight-bold">
                Planes Bamba®
              </p>
              <h3 class="font-weight-bold">
                Básico
              </h3>
              <p class="font-weight-bold text-uppercase">
                Plan anual
              </p>
              <p class="font-weight-bold">
                $32.00
              </p>
              <p>Disponible a 3 MSI*</p>
              <div class="row mb-3">
                <div class="col mt-2 text-right">
                  <p>Cantidad:</p>
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control form-control-lg text-center"
                    value="1"
                    style="width:65px"
                  >
                </div>
              </div>
              <button
                type="button"
                class="btn text-blue green-background btn-md mb-4 font-weight-bold hide"
              >
                Reactivar Plan
              </button>
              <button
                type="button"
                class="btn text-blue red-background btn-md mb-4 font-weight-bold hide"
              >
                <i class="far fa-trash-alt mr-2" />Eliminar Plan
              </button>
            </div>
            <div class="col-12 col-lg-7 mt-2 text-left text">
              <p>*Plan solo disponible para trabajadoras del hogar</p>
              <p class="font-weight-bold text-left">
                Qué incluye
              </p>
              <li
                v-for="(feature, index) in features"
                :key="index"
              >
                <i class="fas fa-check mr-2" /> {{ feature }}
              </li>
              <p class="font-weight-bold text-left mt-3">
                Qué no incluye
              </p>
              <li
                v-for="(feature, index) in notIncluded"
                :key="index"
              >
                <i class="fas fa-times mr-2" /> {{ feature }}
              </li>
              <p class="font-weight-bold text-left mt-3">
                Beneficios empleador
              </p>
              <li
                v-for="(benefit, index) in benefits"
                :key="index"
              >
                <i class="fas fa-star mr-2" /> {{ benefit }}
              </li>
            </div>
          </div>
        </div>
        <div class="modal-header" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDetails",

  data() {
    return {
      features: ["hola", "hola"],
      notIncluded: ["mundo", "mundo"],
      benefits: ["Beneficio 1", "Beneficio 2", "Beneficio 3"]
    };
  }
};
</script>

<style scoped>
.modal-content {
  border-radius: 15px;
  background-color: #edf6fd;
  color: #123291;
}
.modal {
  background-color: rgba(9, 17, 40, 0.7);
}

.icon {
  width: 4rem;
}

.btn {
  width: 12rem;
}
.fa-check {
  color: #7fc34a;
}
.fa-times {
  color: #ff7678;
}
.fa-star {
  color: #faad19;
}
.red-background {
  background-color: #ff7678;
  border: none;
}
.green-background {
  background-color: #7fc34a;
  border: none;
}
.text-blue {
  color: #123291;
}

.modal-header {
  border-bottom: none;
  position: relative;
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
input {
  background-color: transparent;
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}
input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 12px;
}
input:focus {
  background-color: transparent;
  color: #123291;
  font-size: 14px;
  font-weight: bold;
}
li {
  list-style: none;
}
.modal-body {
  overflow: auto;
}
@media screen and (min-width: 992px) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
}
</style>
