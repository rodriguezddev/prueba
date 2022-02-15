<template>
  <div class="Alliance">
    <img
      alt="Logo"
      src="../../assets/BAM_Logo.png"
    >
    <div class="card card_1 text-left mt-5">
      <div class="card-body px-lg-0 ml-2">
        <h4>¿Por qué estoy aquí?</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          consequatur non reprehenderit quae iste, earum aut optio, sit
          necessitatibus quaerat, itaque iure officia fugiat ea ex vel minus!
          Eveniet, delectus.
        </p>
      </div>
    </div>
    <div class="card card_2 text-left mt-3">
      <div class="ml-2">
        <h4>Beneficios de la alianza</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          consequatur non reprehenderit quae iste, earum aut optio, sit
          necessitatibus quaerat, itaque iure officia fugiat ea ex vel minus!
          Eveniet, delectus.
        </p>
      </div>
    </div>
    <div class="card border-0 mt-3 text-left">
      <div class="row">
        <div class="col-md-6">
          <div class="card card_3 border-0 mx-2">
            <div class="row mb-3">
              <div class="col-2" />
              <div class="col-10">
                <h5 class="mt-3">
                  Asesor Bamba gratis para que tengas atención y acompañamiento
                  personalizado 24/7 para apoyo en resolución de imprevistos de
                  forma rápida y eficaz.
                </h5>
                <ul>
                  <li class="mt-3">
                    Busqueda de precios en farmacias y laboratorios
                  </li>
                  <li class="mt-3">
                    Agendar citas con médicos especialistas por video consulta o
                    presencial
                  </li>
                  <li class="mt-3">
                    Buscar los mejores hospitales, clínicas para atender
                    cualquier padecimiento
                  </li>
                  <li class="mt-3">
                    Entre otros
                  </li>
                </ul>
              </div>
              <img
                alt="service"
                class="w-50"
                src="../../assets/service.png"
              >
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card_3 border-0 mx-2">
            <div class="row mb-5">
              <div class="col-2" />
              <div class="col-10">
                <h5 class="mt-3">
                  Soluciones de protección (de primer nivel) a la medida:
                </h5>
                <ul>
                  <li class="mt-3">
                    Planes pre-diseñados o modulares en donde puedes combinar
                    seguros de accidentes y consultas con especialistas
                  </li>
                  <li class="mt-3">
                    Cobertura flexible (anual/mensual)
                  </li>
                  <li class="mt-3">
                    Precios justos y accesibles para todos
                  </li>
                </ul>
              </div>
              <img
                src="../../assets/Aliados.png"
                alt="Aliados"
                class="w-50 mb-5"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn navy-background text-white font-weight-bold px-5 mt-5 mb-5"
    >
      Activar tu asesor Bamba gratis
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeCard1"
};
</script>

<style scoped>
.Alliance {
  margin-top: 100px;
}
.card_1 {
  border-radius: 10px;
  border: none;
  background-color: #dcf0fb;
}
.card_2 {
  border: none;
}
.card_3 {
  background-color: #ffe4e5;
}
button {
  border-radius: 25px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width: 768px) {
  .Alliance {
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
