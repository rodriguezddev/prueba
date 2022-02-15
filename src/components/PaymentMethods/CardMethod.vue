<template>
  <div class="card px-4 mt-2">
    <div class="row mt-1 mb-1">
      <div class="col-12 col-lg-5">
        <div class="row align-items-center pl-3">
          <img
            class="mr-3"
            src="../../assets/visa2.png"
            alt="user"
            style="width: 60px;"
          >
          <p class="mt-3">
            Visa que termina en:
          </p>
          <h6 class="ml-2 mt-2">
            4506
          </h6>
        </div>
      </div>
      <div class="col-10 col-lg-5">
        <div class="row align-items-center pl-3">
          <p class="mt-3">
            Expira:
          </p>
          <h6 class="ml-2 mt-2">
            12/2022
          </h6>
        </div>
      </div>
      <div class="col-2 col-lg-2 mt-3 text-right align-items-center">
        <a
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        ><i class="fas fa-angle-down mt-1" /></a>
      </div>
    </div>
    <div
      id="collapseExample"
      class="collapse"
    >
      <div class="separator mt-2" />
      <div class="row mt-1 mb-1">
        <div class="col-12 col-lg-4 pl-3">
          <p class="mt-3 mb-0">
            Nombre de la tarjeta:
          </p>
          <h6 class="mt-1">
            Carmen Valdez Acosta
          </h6>
        </div>
        <div class="col-10 col-lg-5 pl-3">
          <p class="mt-3 mb-0">
            Dirección de Facturación:
          </p>
          <h6>
            Ignacio Zaragoza, 3024, Zona Centro Monterrey, Nuevo León, C.p.
            16000, México
          </h6>
        </div>
        <div class="col-12 col-lg-3 mt-3 mb-4">
          <div class="row align-items-end">
            <div class="col-6">
              <a
                href="#AddCard"
                data-toggle="modal"
                class="btn red-background text-blue font-weight-bold mt-3 btn-block"
              >
                Eliminar
              </a>
            </div>
            <div class="col-6">
              <router-link
                to="/editar-datos-de-pago"
                class="btn navy-background text-white font-weight-bold mt-3 btn-block"
              >
                Editar
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
  name: "CardMethod"
};
</script>

<style scoped>
.card {
  background-color: #dcf0fb;
  border: none;
  border-radius: 10px;
}

.text-blue {
  color: #123291;
}
.navy-background {
  border: none;
}
.blue-background {
  background-color: #50b3e6;
  border: none;
}
.red-background {
  background-color: #ff787d;
  border: none;
}
.fa-angle-down {
  color: #123291;
  font-size: 25px;
}
.separator {
  border-bottom: 1px solid #50b3e6;
}
</style>
