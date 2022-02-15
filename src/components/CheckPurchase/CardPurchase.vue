<template>
  <div>
    <div class="card my-5 mx-md-3 ">
      <div class="card-body px-0 text-left">
        <div class="line mb-4">
          <h4 class="font-weight-bold  mb-3 text-center">
            Resumen de compra
          </h4>
        </div>
        <div class="plans mx-4 px-2">
          <p class="mb-0 text-blue">
            Planes contratados:
          </p>
          <h5 class="mb-5">
            Plan Personalizado 1
          </h5>
          <p class="text-blue">
            Código de promoción:
          </p>
          <div class="row">
            <div class="col-md-8">
              <input
                class="form-control mt-1 bg-transparent"
                type="text"
                placeholder="+ Introduce el código"
              >
            </div>
            <div class="col-md-4 text-right">
              <p class="mt-2 mb-5 font-weight-bold">
                <a href="">Aplicar</a>
              </p>
            </div>
          </div>
        </div>
        <div class="total mx-4 px-2">
          <p class="mb-2 text-uppercase mt-3">
            Subtotal:
          </p>
          <div class="row justify-content-between ml-0 pl-0 mb-0">
            <p class="mb-0">
              Plan Personalizado01
            </p>
            <p class="mb-0">
              $1450.00 x 1
            </p>
          </div>
          <div class="row justify-content-between ml-0">
            <li>+ Pago de Nómina</li>
            <li>$385.00 x 1</li>
          </div>
          <div class="row justify-content-between ml-0 mt-5">
            <h4 class="font-weight-bold">
              Total de compra:
            </h4>
            <h4 class="font-weight-bold">
              $1,745.00
            </h4>
          </div>
        </div>
        <div class="row mt-4 mb-3 justify-content-center mx-4 px-2">
          <div class="col-12 text-center">
            <button
              type="button"
              class="btn green-background btn-lg btn-block mb-4 text-blue"
            >
              $ Pagar
            </button>
          </div>
          <small
            class="text-center"
          >No olvides que las suscripciones son mensuales y con renovación
            automática al terminar la vigencia. Puedes desactivar la renovación
            automática en cualquier momento.</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPurchase"
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  background-color: #dcf0fb;
  color: #123291;
}

a img {
  width: 20px;
  height: 20px;
}
.fa-chevron-circle-right {
  color: #123291;
}

.icon {
  width: 50px;
}

.line,
.plans {
  border-bottom: 1px solid #50b3e6;
}
.green-background {
  background-color: #7fc34a;
  border: none;
}

.text-blue {
  color: #123291;
  font-weight: bold;
}

input {
  border-color: #50b3e6;
  color: #123291;
  font-weight: bold;
}
input::-webkit-input-placeholder {
  color: #123291;
}
input:focus {
  color: #123291;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #50b3e6;
}
a:focus {
  border-bottom: 2px solid #50b3e6;
}
button {
  font-weight: bold;
  font-size: 16px;
}
li {
  list-style: none;
  margin-left: 15px;
}

@media (min-width: 992px) {
  p,
  li,
  small,
  input {
    font-size: calc(0.2em + 1vw);
  }
  h4 {
    font-size: calc(0.7em + 1vw);
  }
}
@media (max-width: 992px) {
  p,
  li,
  small,
  input {
    font-size: calc(0.4em + 1.1vw);
  }
  h4 {
    font-size: calc(0.7em + 1vw);
  }
}
</style>
