<template>
  <div class="card border-0 mt-5 text-justify px-3">
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card card_3 border-0">
          <div
            style="min-height: 400px"
            class="d-flex flex-column align-items-center px-8 py-5"
          >
            <div>
              <p class="mt-3 font-weight-bold font-size-xl">
                Beneficios de tener Orientación Médica Telefónica Gratis
              </p>
              <ul>
                <li class="mt-3">
                  Orientación por malestares y detección a tiempo de COVID-19.
                </li>
                <li class="mt-3">
                  Atención oportuna en caso de cualquier malestar o dolor como
                  dolor de estómago, cabeza, cuerpo, etc.
                </li>
                <li class="mt-3">
                  Atención desde cualquier lugar y hora. No importa donde estés,
                  te atenderemos 24/7.
                </li>
              </ul>
            </div>
          </div>

          <img
            alt="service"
            class="w-70"
            src="../../assets/img/Promo1.png"
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="card card_3 border-0 mb-4">
          <div
            style="min-height: 420px"
            class="d-flex flex-column justify-content-between align-items-center px-8 py-5"
          >
            <div>
              <p class="mt-3 font-weight-bold font-size-xl">
                Beneficios de tener un Asesor Bamba Gratis.
              </p>
              <ul>
                <li class="mt-3">
                  Atención y acompañamiento personalizado 24/7 para apoyo en
                  resolución de imprevistos de forma rápida y eficaz.
                </li>
                <li class="mt-3">
                  Agendar citas con médicos especialistas por video consulta o
                  presencial.
                </li>
                <li class="mt-3">
                  Buscar los mejores hospitales, clínicas para atender cualquier
                  padecimiento.
                </li>
                <li class="mt-3">
                  Búsqueda de precios en farmacias y laboratorios.
                </li>
              </ul>
            </div>
          </div>

          <img
            alt="Aliados"
            class="w-70"
            src="../../assets/img/Promo2.png"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card_1 {
  border: none;
  background-color: #dcf0fb;
}

.card_2 {
  border: none;
}

.w-70 {
  width: 60%;
}

.card_3 {
  border-radius: 25px;
  background-color: #ffe4e5;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.px-8 {
  padding-left: 5rem;
  padding-right: 5rem;
}

.font-size-xl {
  font-size: 1.2rem;
}

.semibold {
  font-weight: 600;
}

@media screen and (min-width: 768px) {
  .Alliance {
    margin-left: 150px;
    margin-right: 150px;
  }
}

@media screen and (max-width: 768px) {
  .px-8 {
    padding-left: 2.5rem;
    padding-right: 2rem;
  }
}
</style>
