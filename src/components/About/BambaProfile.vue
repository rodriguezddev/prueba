<template>
  <div style="margin-top: 150px">
    <h4 class="uppercase">
      <strong class="uppercase">{{ profiles[profile].name }}</strong>
    </h4>

    <div
      id="carouselBambaProfile"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(slider, index) in profiles[profile].sliders"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <div class="card text-center">
            <div class="card-body px-lg-0">
              <div>
                <h1 class="font-weight-bold">
                  {{ slider.title }}
                </h1>
                <div class="d-block mx-auto mt-4">
                  <h5>
                    {{ slider.content }}
                  </h5>
                </div>
              </div>
              <img
                :src="slider.image"
                alt="plan"
                class="card-image mb-5"
              >
            </div>
          </div>
        </div>
      </div>

      <ol
        v-if="profiles[profile].sliders.length > 1"
        class="carousel-indicators"
      >
        <li
          v-for="(slider, index) in profiles[profile].sliders"
          :key="index"
          data-target="#carouselBambaProfile"
          :data-slide-to="index + 1"
          class="indicator-carousel mr-3"
          :class="{ active: index === 0 }"
        />
      </ol>

      <a
        v-if="profiles[profile].sliders.length > 1"
        class="control carousel-control-prev"
        href="#carouselBambaProfile"
        role="button"
        data-slide="prev"
      >
        <span><i
          aria-hidden="true"
          class="fas fa-chevron-left"
        /></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        v-if="profiles[profile].sliders.length > 1"
        class="control carousel-control-next"
        href="#carouselBambaProfile"
        role="button"
        data-slide="next"
      >
        <span><i
          aria-hidden="true"
          class="fas fa-chevron-right"
        /></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div
      v-if="profile !== 'empresas'"
      class="mx-5 mt-5"
    >
      <div
        class="row align-items-center mx-0"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        <div class="col-lg-4 text-lg-left pl-md-5 pr-md-5">
          <h1
            class="pl-md-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            {{ profiles[profile].detail }}
          </h1>
          <p
            class="pl-md-5 mt-5"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1000"
            v-html="profiles[profile].content"
          />
        </div>
        <div
          class="col-lg-8 ml-0 px-5 mt-0"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img
            :src="profiles[profile].secondImage"
            alt="plan"
            class="img-second-section px-5"
          >
        </div>
      </div>
    </div>

    <div class="section-bamba mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1 class="text-align-left">
              Beneficios
            </h1>
            <h1 class="text-align-left">
              Bamba
            </h1>
          </div>

          <div class="col-md-8">
            <p
              v-for="(benefit, index) in profiles[profile].benefits"
              :key="index"
              class="text-align-left"
            >
              {{ benefit }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="profile === 'socio-bamba'"
      class="container my-5 py-5"
    >
      <h1 class="text-center font-weight-bold">
        Pasos para ser <span class="text-color">Socio Bamba</span>
      </h1>

      <div class="row my-3">
        <div class="col-md-6">
          <div class="container">
            <img
              class="img-fluid w-100"
              src="../../assets/img/info1.png"
              alt="info"
            >
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 d-flex flex-column justify-content-center ml-5">
            <h3>Acércate a nosotros y forma parte de la Comunidad Bamba</h3>

            <div class="mt-4">
              <ul>
                <li class="text-left">
                  <strong>Ingresa a
                    <a
                      target="_blank"
                      href="https://www.portal-embajadoras.vivebamba.com"
                    >https://www.portal-embajadoras.vivebamba.com</a>
                  </strong>
                </li>
                <li class="text-left">
                  <strong>Recuerda que puedes vender tanto a menudeo (personas) como
                    a mayoreo (empresas)</strong>
                </li>
                <li class="text-left">
                  <strong>Sigue las instrucciones que ahí detallamos</strong>
                </li>
                <li class="text-left">
                  <strong>Estás listo/a para vender y transformar México.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <carousel-success
      class="mt-5"
      :cards="profiles[profile].testimonials"
    />

    <div v-if="profile !== 'empresas' && profile !== 'socio-bamba'">
      <nuestros-planes :show-familiar-plans="false" />
    </div>

    <div class="container">
      <div class="card-faq">
        <div class="row">
          <div class="col-md-6">
            <img
              src="../../assets/img/sliders-workers/w-2.png"
              class="img-fluid mb-3"
            >
          </div>
          <div class="col-md-6">
            <div class="h-100 d-flex flex-column justify-content-center">
              <h1>¿Te quedaron dudas?</h1>
              <h1>Conoce más sobre nosotros.</h1>

              <div>
                <a
                  target="_blank"
                  href="https://comunidad4uno.zendesk.com/hc/es-419"
                >
                  <button
                    type="button"
                    class="btn navy-background text-white font-weight-bold mt-4"
                  >
                    Ir a preguntas frecuentes
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <subscribe
        :show-subscribe="false"
        :phone="profiles[profile].phone"
      />

      <h1 class="font-weight-bold mt-5">
        Suscríbete y descubre todos los beneficios<br>de vivir la vida "arriba
        y arriba"
      </h1>

      <div class="row my-5">
        <div class="col-md-6  offset-md-3">
          <div id="subscribe-form" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselSuccess from "./CarouselSuccess.vue";
import NuestrosPlanes from "./../NuestrosPlanes/NuestrosPlanes.vue";
import Subscribe from "./../../components/NuestrosPlanes/Subscribe.vue";
import TrackingService from "./../../services/tracking";

export default {
  components: {
    CarouselSuccess,
    NuestrosPlanes,
    Subscribe
  },

  data() {
    return {
      profile: "trabajadores",
      profiles: {
        trackingService: "",
        trabajadores: {
          name: "trabajadores",
          title: "¿Quién es Bamba®?",
          subtitle:
            "Bamba es quien te conecta con servicios de salud, financieros y laborales para protegerte ante imprevistos diarios y darte la tranquilidad y seguridad de que vas a estar bien",
          detail: "Trabajadores Bamba®",
          phone: "55 4585 0371",
          content:
            "Son quienes trabajan dentro de una casa o micronegocio, las personas sin las que nuestro día a día no sería el mismo.",
          benefits: [
            "Precios justos, planes personalizados, sin contratos forzosos. Con Bamba también puedes proteger a los que más quieres extendiendo tu plan para tus hijos o contratando planes para ellos."
          ],
          secondImage: require("../../assets/img/sliders-workers/w-2.png"),
          sliders: [
            {
              title: "¿Quién es Bamba®?",
              content:
                "Bamba es quien te conecta con servicios de salud, financieros y laborales para protegerte ante imprevistos diarios y darte la tranquilidad y seguridad de que vas a estar bien.",
              image: require("../../assets/img/sliders-workers/w-1.png")
            }
          ],
          testimonials: [
            {
              message:
                "Contar con Bamba me da tranquilidad, ahora me siento segura en el trabajo",
              author: "Laura Rosales",
              image: require("../../assets/img/testimonials/laura.png"),
              whois: "Trabajadora del Hogar"
            }
          ]
        },
        empresas: {
          name: "empresas",
          title: "Empresas Bamba®",
          subtitle:
            "Bamba es quien te conecta con servicios de salud, financieros y laborales para protegerte ante imprevistos diarios y darte la tranquilidad y seguridad de que vas a estar bien",
          detail: "Empresas Bamba®",
          phone: "55 18 30 62 76",
          content:
            "Bamba también es para las Start-Ups, PYMES. Outsourcings y Corporativos que se interesan en fortalecer las condiciones laborales, de salud y financieras de sus trabajadores.",
          benefits: [
            "Planes hechos a la medida de la necesidad de tus empleados. Aumenta la productividad de tu empresa o negocio A través de un test te ayudamos a conocer las necesidades no cubiertas de tus trabajadores y con base en ello, armamos un plan a tu medida con los mejores servicios."
          ],
          sliders: [
            {
              title: "Empresas Bamba®",
              content:
                "Bamba también es para las Start-Ups, PYMES. Outsourcings y Corporativos que se interesan en fortalecer las condiciones laborales, de salud y financieras de sus trabajadores.",
              image: require("../../assets/img/sliders-business/bu-1.png")
            }
          ],
          testimonials: [
            {
              message:
                "El que las aliadas tuvieran un Asesor Bamba que las apoyara ante cualquier imprevisto, las hizo sentir más confiadas y respaldadas en su trabajo.Bamba es imprescindible para continuar mejorando sus condiciones laborales",
              author: "Carlos Maya",
              image: require("../../assets/img/testimonials/carlos.png"),
              whois: "CEO de Aliada"
            }
          ]
        },
        freelance: {
          name: "freelance",
          title: "¿Quién es Bamba®?",
          subtitle:
            "Bamba es quien te conecta con servicios de salud, financieros y laborales para protegerte ante imprevistos diarios y darte la tranquilidad y seguridad de que vas a estar bien",
          detail: "¿Quiénes son los Freelance?",
          phone: "55 4585 0371",
          content:
            "Son quienes trabajan por cuenta propia y son sus propios jefes; esto los hace más vulnerable ante los imprevistos del día a día",
          benefits: [
            "Sin plazos forzosos, precios justos y planes personalizados. Al adquirir cualquier plan Bamba®, contarás con un Asesor Bamba® que te acompañará ante cualquier imprevisto, duda o por si quieres agendar alguna consulta."
          ],
          secondImage: require("../../assets/img/sliders-freelance/f-2.png"),
          sliders: [
            {
              title: "¿Quién es Bamba®?",
              content:
                "Bamba es quien te conecta con servicios de salud, financieros y laborales para protegerte ante imprevistos diarios y darte la tranquilidad y seguridad de que vas a estar bien.",
              image: require("../../assets/img/sliders-freelance/f-1.png")
            }
          ],
          testimonials: [
            {
              message:
                "Como freelance sé que cuento con Bamba ante cualquier imprevisto",
              author: "Miguel Estrada",
              image: require("../../assets/img/testimonials/miguel.png"),
              whois: "Diseñador Freelance"
            }
          ]
        },
        "socio-bamba": {
          name: "Socio Bamba",
          title: "¿Por qué ser Socio Bamba?",
          subtitle:
            "Genera ingresos adicionales e impacta positivamente la vida de los mexicanos de manera práctica, sencilla y con todas las herramientas necesarias.",
          detail: "¿Cómo ser Socio Bamba?",
          phone: "55 2085 36 85",
          content: `Convertirse en Socio Bamba es sencillo y rápido, puedes vender a personas o a empresas, si quieres saber más da clic <a target="_blank" href="https://www.portal-embajadoras.vivebamba.com">aquí</a>`,
          benefits: [
            "Desde donde estés, podrás promover y vender los planes Bamba, generarás un impacto social en trabajadores vulnerables mientras obtienes ingresos económicos extras."
          ],
          secondImage: require("../../assets/img/sliders-brokers/b-3.png"),
          sliders: [
            {
              title: "¿Por qué ser Socio Bamba?",
              content:
                "Somos la plataforma que te ayuda a fortalecer tu relación con tus trabajadores/as a través de soluciones laborales, de salud y financieras.",
              image: require("../../assets/img/socioBamba.png")
            },
            {
              title: "Te acompañamos en cada paso",
              content:
                "Adquiere los planes que necesites. Tenemos planes prearmados o puedes armar tu propio plan para que quede a tu medida.",
              image: require("../../assets/img/sliders-brokers/b-2.png")
            }
          ],
          testimonials: []
        },
        empleador: {
          name: "empleador",
          title: "¿Quién es Bamba®?",
          subtitle:
            "Somos la plataforma que te ayuda a fortalecer tu relación con tus trabajadores/as a través de soluciones laborales, de salud y financieras",
          detail: "Empleadores Bamba®",
          phone: "55 4585 0371",
          content:
            "Son quienes desarrollan e impulsan a la fuerza de México y que tienen una o varias  trabajadoras del hogar o uno o varios empleados en su negocio.",
          benefits: [
            "Con nuestras soluciones fortaleces tu relación con tu trabajador y tres pilares de desarrollo: laboral, médico y financiero. Compra el o los planes que se adapten a tus necesidades o arma un plan, puede ser para tí, tus trabajadores, algún familiar o amigo/a."
          ],
          secondImage: require("../../assets/img/sliders-employers/em-3.png"),
          sliders: [
            {
              title: "¿Quién es Bamba®?",
              content:
                "Somos la plataforma que te ayuda a fortalecer tu relación con tus trabajadores/as a través de soluciones laborales, de salud y financieras.",
              image: require("../../assets/img/sliders-employers/em-1.png")
            },
            {
              title: "Nuestros planes a tu medida",
              content:
                "Adquiere los planes que necesites. Tenemos planes prearmados o puedes armar tu propio plan para que quede a tu medida.",
              image: require("../../assets/img/sliders-employers/em-2.png")
            }
          ],
          testimonials: [
            {
              message:
                "Después de contratar Bamba me sentí mucho más tranquila porque Lupita podía trabajar sin miedo a que algo le pasara.",
              author: "Amanda Rosa",
              image: require("../../assets/img/testimonials/amanda.png"),
              whois: "Empleadora de Lupita (trabajadora del hogar)"
            }
          ]
        }
      }
    };
  },

  watch: {
    '$route.params.profile': function (profile) {
      this.profile = profile;
    }
  },

  mounted() {
    this.profile = this.$route.params.profile;
    this.trackingService = new TrackingService(this);
    //this.trackingService.visit(this.profile)
  }
};
</script>

<style lang="scss" scoped>
.section-bamba {
  background: #fee4e5;
  padding: 60px 0px;
}

.text-align-left {
  text-align: left;
}

.card {
  border-radius: 10px;
  border: none;
}

.card-image {
  width: 100%;
}

.img-second-section {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .card {
    margin-left: 150px;
    margin-right: 150px;
  }

  .card-image {
    width: 50%;
  }

  .img-second-section {
    width: 80%;
  }
}

@media screen and (max-width: 768px) {
  .card {
    margin-left: 20px;
    margin-right: 20px;
  }
}

.uppercase {
  text-transform: uppercase;
}

.control {
  color: #123291;
}

.card-faq {
  margin-top: 2rem;
  border-radius: 8px;
  border: none;
  -webkit-box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  box-shadow: -2px 3px 15px -4px rgba(0, 0, 0, 0.59);
  margin-bottom: 5rem;
  padding: 2rem;
}

.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

.fa-chevron-left,
.fa-chevron-right {
  color: #123291;
  font-size: 30px;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #50b3e6;
}

li.active {
  background-color: #123291;
}

input {
  border-color: #123291;
  color: #123291;
  height: 50px;
}

input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
}

input:focus {
  color: #123291;
  background-color: #ffe4e5;
}
</style>
