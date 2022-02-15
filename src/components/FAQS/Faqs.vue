<template>
  <div class="MyInfo px-1 mb-5 text-left">
    <h1 class="text-center font-weight-bold">
      Preguntas <span class="text-color">frecuentes</span>
    </h1>

    <div class="row mt-4 mb-5 mx-0">
      <div class="col-md-4 col-lg-2 text-center">
        <a href="">Vigencia</a>
      </div>
      <div class="col-md-4 col-lg-2 text-center">
        <a href="">Pagos</a>
      </div>
      <div class="col-md-4 col-lg-2 text-center">
        <a href="">Renovaciones</a>
      </div>
      <div class="col-md-4 col-lg-2 text-center">
        <a href="">Modificaciones a paquetes</a>
      </div>
      <div class="col-md-4 col-lg-2 text-center">
        <a href="">Beneficiarios</a>
      </div>
      <div class="col-md-4 col-lg-2 text-center">
        <a href="">Canceaciones</a>
      </div>
    </div>
    <div class="row mx-0">
      <div class="col-lg-6 mt-5">
        <div class="container">
          <collapse-faqs
            v-for="faq of faqs"
            :key="faq.id"
            :faq="faq"
          />
        </div>
      </div>
      <div class="col-6 px-5 order-first">
        <img
          alt="info"
          class="img-fluid w-100"
          src="../../assets/info1.png"
        >
      </div>
    </div>
  </div>
</template>

<script>
import CollapseFaqs from "./CollapseFaqs.vue";

export default {
  name: "Faqs",
  components: {CollapseFaqs},

  data() {
    return {
      faqs: [
        {
          id: 1,
          Question: "¿Es posible dar de alta el mismo paquete1?",
          Response:
              "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem, id ut tempore repellendus modi ad minima aperiam quisquam,"
        },
        {
          id: 2,
          Question: "¿Es posible dar de alta el mismo paquete2?",
          Response:
            "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem, id ut tempore repellendus modi ad minima aperiam quisquam,"
        },
        {
          id: 3,
          Question: "¿Es posible dar de alta el mismo paquete3?",
          Response:
            "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem, id ut tempore repellendus modi ad minima aperiam quisquam,"
        }
      ]
    };
  },

  methods: {
    processForm() {

    }
  }
};
</script>

<style scoped>
.MyInfo {
  color: #123291;
  margin-top: 120px;
}
.red-color {
  color: #ff787d;
}
a {
  color: #123291;
  text-decoration: none;
}
a:focus {
  border-bottom: 2px solid #123291;
}
.green-background {
  background-color: #7fc34a;
  border: none;
}

.text-blue {
  color: #123291;
}

.navy-background {
  border: none;
}
.text-color {
  color: #50b3e6;
}
button {
  margin-bottom: 30px;
}
@media screen and (max-width: 992px) {
  img {
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .MyInfo {
    height: 900px;
  }
}
</style>
