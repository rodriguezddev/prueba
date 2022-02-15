<template>
  <div class="card text-center">
    <div class="card-body px-lg-0">
      <div class="row">
        <div class="col-lg-6 mt-5 ml-0 px-0 py-0">
          <img
            src="../../assets/img/BMB_Esc2-sf.png"
            alt="plan"
            class="img-flud w-100 pl-0"
          >
        </div>
        <div class="col-lg-6 text-left mt-5 mb-5 px-md-5 px-4 pl-lg-0">
          <h2>Planes Familiares</h2>

          <p class="mt-4 text-md-left text-justify">
            Sabemos lo importante que es proteger a la familia, por eso puedes
            añadir al Plan Alto y Plan Premium un complemento familiar.
          </p>

          <h2 class="mt-4">
            Plan Alto Familiar
          </h2>
          <p class="text-md-left text-justify">
            Este plan incluye los mismos beneficios que el Plan Alto y adicional
            los siguientes servicios:
          </p>
          <p class="text-md-left text-justify">
            <span
              class="font-weight-bold"
            >- 4 Consultas al año con médicos especialistas para hijos menores
              de 24 años. Puedes escoger entre consultas presenciales o
              videoconsultas.</span>
          </p>
          <p class="text-md-left text-justify">
            Precio anual:
            <span class="font-weight-bold">$2,095 pesos </span>(Plan Alto $1,659
            + Complemento Familiar $436)
          </p>

          <h5>Plan Premium Familiar</h5>
          <p class="text-md-left text-justify">
            Este plan incluye los mismos beneficios que el Plan Premium y
            adicional los siguientes servicios:
          </p>
          <p class="text-md-left text-justify">
            <span
              class="font-weight-bold "
            >- 8 Consultas al año con médicos especialistas para hijos menores
              de 24 años. Puedes escoger entre consultas presenciales o
              videoconsultas.</span>
          </p>
          <p class="text-md-left text-justify">
            Precio anual:
            <span class="font-weight-bold">$4,405 </span>(Plan Premium $3,680 +
            Complemento Familiar $725)
          </p>

          <!-- <p v-if="promotion && activePromotion">
            <strong>{{ promotion }}</strong>
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselCard1"
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: none;
  background-color: #ffe4e5;
  color: #123291;
}

@media screen and (min-width: 768px) {
  .card {
    margin-left: 150px;
    margin-right: 150px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
