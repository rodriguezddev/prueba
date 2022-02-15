<template>
  <div>
    <headerHome />
    <div id="planes" class="mt-5 mb-5  container-xl" >
      <div class="col-md-6">
        <h2 class="font-weight-bold">
          Nuestros Planes
        </h2>
      </div>

      <div class="row mx-0">
        <div
          class="col-12 col-md-6 px-md-3 px-0"
          v-for="(item, index) in plans"
          :key="index"
        >
          <DescriptionPlans class=" w-100" :plans_decription="item" />
        </div>
      </div>
    </div>

    <help :phone="'55 4585 0371'" />

    <modal-plan />
    <shopping-cart />
  </div>
</template>

<script>
import headerHome from "../components/Home/headerHome.vue";
import DescriptionPlans from "../components/HomePages/DescriptionPlans.vue";
import PlanService from "../services/plan";
import ShoppingCart from "../components/ShoppingCart";

export default {
  name: "Name",

  components: {
    headerHome,
    DescriptionPlans,
    ShoppingCart,
  },
  props: ["showFamiliarPlans"],

  data() {
    return {
      routes: [],
      trackingService: "",
      phone: "55 4585 0371",
      plans: [],
      promotion: {},
      services_decription: [
        {
          name:
            '<h3 class="font-weight-bold text-left mb-4 medium-size">Seguro por accidentes</h3>',
          description:
            '<p class="text-left">En caso de algún accidente, puedes acudir al hospital privado de tu preferencia, tu pagas la emergencia y  <strong class="font-weight-bold">nosotros te reembolsamos hasta $100,000 MXN.</strong></p>',
          routers: "/descripcion/seguro-por-accidentes",
          id: "DetalleH-Accidentes",
        },
        {
          name:
            '<h3 class="font-weight-bold text-left mb-4 medium-size">Seguro por enfermedad grave</h3>',
          description:
            '<p class="text-left">Si requieres alguna cirugía por enfermedad, presentas quemaduras graves, diagnóstico de cáncer o infarto agudo al miocardio, obtienes una indemnización. Este se le pagará directamente al beneficiario y es un pago único.</p>',
          routers: "/descripcion/seguro-por-enfermedad-grave",
          id: "DetalleH-Enfermedad",
        },
      ],
      services_madical_decription: [
        {
          name:
            '<h3 class="font-weight-bold text-left mb-4 font-size-medium-lg-size">Orientación telefónica 24x7</h3>',
          description:
            '<p class="text-left">No importa si es de día o de noche, puedes llamar y recibirás al momento atención de un médico general para obtener un diagnóstico de tu malestar</p>',
          routers: "/descripcion/orientacion-telefonica",
          id: "DetalleH-Atención",
        },
        {
          name:
            '<h3 class="font-weight-bold text-left mb-4 font-size-medium-lg-size">Consultas con médicos especialista</h3>',
          description:
            '<p class="text-left">En caso de que requieras atención de un médico especialista como dermatólogo, cardiólogo, etc, puedes agendar una consulta presencial o videollamada de manera rápida y sencilla</p>',
          routers: "/descripcion/consultas-con-medicos-especialistas",
          id: "DetalleH-Consultas",
        },
      ],
      services_Benefits_decription: [
        {
          name:
            '<h3 class="font-weight-bold text-left mb-4 font-size-medium-lg-size">Tarjeta para recibir depósitos</h3>',
          description:
            '<p class="text-left">La persona que trabaja para ti obtiene una tarjeta de débito y nosotros nos encargamos de depositarle la nómina.</p>',
          routers: "descripcion/tarjeta-para-depositos",
          id: "DetalleH-Tarjeta",
        },
        {
          name:
            '<h3 class="font-weight-bold text-left mb-4 font-size-medium-lg-size">Tarjeta débito + IMSS</h3>',
          description:
            '<p class="text-left">Como empleador de una personas trabajadora del hogar, te ayudamos para afiliarla al IMSS y gestionar sus pagos mensuales.</p>',
          routers: "/descripcion/depositos-mas-imss",
          id: "DetalleH-IMSS",
        },
      ],
      client: [
        {
          img: require("../assets/img/testimonials/amanda.png"),
          testimony:
            "Después de contratar Bamba me sentí mucho más tranquila porque Lupita podía trabajar sin miedo a que algo le pasara",
          author:
            "Amanda Rosa, 48 años, Empleadora de Lupita (trabajadora del hogar)",
        },
        {
          img: require("../assets/img/testimonials/carlos.png"),
          testimony:
            "El que las aliadas tuvieran un asesor Bamba que las apoyara ante cualquier imprevisto, las hizo sentir más confiadas y respaldadas de su trabajo. Bamba es imprescindible para continuar mejorando sus condiciones laborales",
          author: "Carlos Maya, CEO de Aliada.",
        },
        {
          img: require("../assets/img/testimonials/laura.png"),
          testimony:
            '"Contar con Bamba me da tranquilidad, ahora me siento segura en el trabajo"',
          author: "Ana, 55 años, trabajadora del Hogar.",
        },
      ],
    };
  },

  mounted() {
    this.trackingService = new GoogleAnalyticsService(this);
    this.trackingService.sendHeartBeatEvent();
  },
  created() {
    this.getPlans();

    if (
      window.location.pathname === "/confirmacion-de-compra" ||
      window.location.pathname === "/servicios-gratuitos" ||
      window.location.pathname === "/"
    ) {
      document.getElementById("content").classList.remove("container-xl");
    } else {
      document.getElementById("content").classList.add("container-xl");
    }
  },
  methods: {
    async getPlans() {
      this.$vs.loading();
      const [error, plans] = await PlanService.getProductsFromApi();
      if (error) return;
      this.plans = plans;

      setTimeout(() => this.$vs.loading.close(), 800);
    },
  },
};
</script>

<style scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}
.About {
  margin-top: 150px;
}
.video {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
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
  z-index: 2;
  background: #474b4e;
  padding: 15px;
  text-align: center;
}

.icon-box button {
  color: white;
  font-size: 30px;
  position: relative;
  top: -10px;
  left: calc(50% - 3px);
}

@media (max-width: 576px) {
  .dif1,
  .swiper {
    display: none;
  }
  .About {
    margin-top: 60px;
  }
}

@media (min-width: 577px) {
  .dif2,
  .swiper-contact {
    display: none;
  }
}
.carousel-margin {
  margin-top: 8rem;
}

@media (max-width: 576px) {
  .swipe {
    display: none;
  }
}
@media (min-width: 577px) {
  .swiper-plan {
    display: none;
  }
}
</style>
