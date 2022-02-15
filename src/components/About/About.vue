<template>
  <div class="About">
    <div class="row align-items-center justify-content-between px-3 mx-0 offset-lg-1">
      <div class="col-lg-4 text-left">
        <h1
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-offset="200"
          class="titl text-md-left text-center col-md-6"
        >
          Somos
          Bamba®
        </h1>
        <p
          class="mt-4 text-md-left text-justify"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          Bamba es la primera plataforma digital que conecta a empleadores,
          trabajadores vulnerables y freelance con soluciones personalizadas de
          protección laboral (Afiliación al IMSS), de salud (atención médica y
          seguros de gastos médicos menores) y financiera (pago de nómina) a
          precios justos.
        </p>
      </div>
      <div class="col-8 row justify-content-center">
        <img
          alt="plan"
          class="BAM "
          style="
    max-width: 55rem;
"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-offset="200"
          src="../../assets/img/BMB_Esc2-sf.png"
        >
      </div>
    </div>
    <div class="row mt-5 mb-5 justify-content-center mx-0">
      <div class="">
        <h3
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-offset="200"
          class="font-weight-bold text-center"
        >
          Qué hacemos
        </h3>
        <h3
          class="my-5 text-md-center text-justify  col-md-6"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          Te conectamos con servicios que fortalecen tu salud, trabajo y
          finanzas como empleador/a, freelance, trabajador/a del hogar o
          trabajador/a, a través de planes y soluciones que puedes personalizar.
        </h3>
      </div>
    </div>

    <carousel-about
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-offset="200"
    />

    <div class="row mt-5 mb-5 justify-content-center mx-0">
      <div class="col-md-6 mt-5">
        <img
          alt="aliados"
          src="../../assets/img/Aliados.png"
          style="height: 30px"
        >
        <h3 class="text-center">
          Nuestros Aliados
        </h3>
        <p class="mt-3 text-md-center text-justify col-12">
          Nuestros aliados nos permiten ofrecer las mejores soluciones en el
          ámbito laboral, médico y financiero para que aumentes tu nivel de
          fortaleza sin importar si eres empleador/a, trabajador/a o freelance.
        </p>
      </div>
    </div>

    <div class="ally mx-0">
      <div
        id="swiper-aliados"
        class="swiper-container mx-0"
        style="position: relative"
      >
        <div class="swiper-wrapper pb-5">
          <div class="swiper-slide px-2 px-md-0">
            <div class="px-5">
              <img
                alt="aliados"
                src="../../assets/img/Mapfre.png"
                style="height: 30px"
              >
              <p class="mt-3 text-md-center text-justify">
                Es un aliado que nos ayuda a proteger la salud y finanzas de
                nuestros clientes con seguro de accidentes para los
                beneficiarios.
              </p>
            </div>
          </div>

          <div class="swiper-slide px-2 px-md-0">
            <div class="swiper-slide px-2 px-md-0">
              <div class="px-5">
                <img
                  alt="aliados"
                  src="../../assets/img/bbva.png"
                  style="height: 30px"
                >
                <p class="mt-3 text-md-center text-justify">
                  Junto con ellos introducimos al mundo bancario a los
                  trabajadores a través del pago de su nómina electrónicamente.
                </p>
              </div>
            </div>
          </div>

          <div class="swiper-slide px-2 px-md-0">
            <div class="swiper-slide px-2 px-md-0">
              <div class="px-5">
                <img
                  alt="aliados"
                  src="../../assets/img/axa.png"
                  style="height: 30px"
                >
                <p class="mt-3 text-md-center text-justify">
                  Es la institución que nos apoya protegiendo a los
                  beneficiarios con pólizas de indemnización por accidentes.
                </p>
              </div>
            </div>
          </div>

          <div class="swiper-slide px-2 px-md-0">
            <div class="swiper-slide px-2 px-md-0">
              <div class="px-5">
                <img
                  alt="aliados"
                  src="../../assets/img/gentera.png"
                  style="height: 30px"
                >
                <p class="mt-3 text-md-center text-justify">
                  Inversionista que nos respalda en nuestra misión de proteger
                  la fuerza de México.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Add Pagination -->
        <div
          id="pagination-aliados"
          class="swiper-pagination"
        />
        <!-- Add Arrows -->
        <div class="next pl-5">
          <i class="fas fa-chevron-right" />
        </div>
        <div class="prev pr-5">
          <i class="fas fa-chevron-left" />
        </div>
      </div>
    </div>

    <carousel-success :cards="cards" />

    <div class="container">
      <subscribe :phone="'55 4585 0371'" />
    </div>

    <shopping-cart />
  </div>
</template>

<script>
import Subscribe from "../NuestrosPlanes/Subscribe.vue";
import CarouselAbout from "./CarouselAbout.vue";
import CarouselSuccess from "./CarouselSuccess.vue";
import ShoppingCart from "../ShoppingCart.vue";
import "swiper/swiper-bundle.css";
import GoogleAnalyticsService from "../../services/GoogleAnalyticsService";

export default {

  name: "Name",
  components: {CarouselAbout, Subscribe, CarouselSuccess, ShoppingCart},

  data() {
    return {
      cards: [
        {
          image: require("../../assets/img/testimonials/amanda.png"),
          message:
              "Después de contratar Bamba me sentí mucho más tranquila porque Lupita podía trabajar sin miedo a que algo le pasara",
          author: "Amanda Rosa",
          whois: "Empleadora de Lupita (trabajadora del hogar)"
        },
        {
          image: require("../../assets/img/testimonials/laura.png"),
          message:
            "Contar con Bamba me da tranquilidad, ahora me siento segura en el trabajo",
          author: "Laura Rosale",
          whois: "Trabajadora del Hogar"
        },
        {
          image: require("../../assets/img/testimonials/miguel.png"),
          message:
            "Como freelance sé que cuento con Bamba ante cualquier imprevisto",
          author: "Miguel Estrada",
          whois: "Diseñador Freelance"
        }
      ],
      trackingService: ""
    };
  },

  mounted() {
    this.trackingService = new GoogleAnalyticsService(this);
    this.trackingService.sendHeartBeatEvent();

    this.swiper = new window.Swiper("#swiper-aliados", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      pagination: {
        el: "#pagination-aliados",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 80
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev"
      }
    });
  }
};
</script>

<style scoped>
.About {
  margin-top: 100px;
}

@media screen and (max-width: 992px) {
  .BAM {
    display: none;
  }
}

.next {
  left: auto;
  right: 0px;
}

.prev {
  left: 0px;
  right: auto;
}

.next,
.prev {
  position: absolute;
  top: 50%;

  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fa-chevron-right,
.fa-chevron-left {
  font-size: 30px;
}

.ally {
  margin-left: 20px;
  margin-right: 20px;
}

@media screen and (min-width: 768px) {
  .ally {
    margin-left: 100px;
    margin-right: 100px;
  }
}
@media (max-width: 576px) {
  .titl{
    font-size:24px;
  }
}
</style>
