import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

window.Events = new Vue();

const routes = [
  {
    path: "/empresas",
    name: "empresas",
    component: () => import("../pages/HomeBusiness.vue")
  },
  {
    path: "/beneficiarios/:slug",
    name: "beneficiarios/:slug",
    component: () => import("../pages/viewBeneficiary.vue")
  },
  {
    path: "/descripcion/:slug",
    name: "descripcion/:slug",
    component: () => import("../components/DetailsPlans/PlansDetails")
  },
  {
    path: "/arma-tu-plan",
    name: "arma-tu-plan",
    component: () => import("../components/BuildYourPlan/BuildYourPlan.vue")
  },
  {
    path: "/arma-tu-plan/beneficiarios",
    name: "arma-tu-plan/beneficiarios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/CartResume/AddBeneficiaries.vue")
  },
  {
    path: "/",
    name: "inicio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Home.vue")
  },
  {
    path: "/contacto-freemium",
    name: "contacto-freemium",
    // route level code-splitting 
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/ContactFreemium.vue"
      )
  },
  {
    path: "/activado",
    name: "activado",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/ConfirmationFreemium.vue"
      )
  },
  {
    path: "/arma-tu-plan/pago",
    name: "arma-tu-plan/pago",
      component: () => import("../pages/Payment.vue")
  },
  {
    path: "/editar-mis-datos",
    name: "editar-mis-datoss",
    component: () => import("../components/CheckPurchase/EditCustomerInfo.vue")
  },
  {
    path: "/confirmacion-de-compra",
    name: "confirmacion-de-compra",
      component: () => import("../components/payment/ConfirmPayment")
  },
  {
    path: "/confirmacion-de-compra2",
    name: "confirmacion-de-compra",
    component: () => import("../components/Payment")
  },
  {
    path: "/revisa-tu-compra",
    name: "revisa-tu-compra",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(
            /* webpackChunkName: "about" */ "../components/CheckPurchase/CheckPurchase.vue"
            )
  },
  {
    path: "/editar-datos",
    name: "editar-datos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/CheckPurchase/EditCustomerInfo.vue"
      )
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login/Login.vue")
  },
  {
    path: "/login2",
    name: "login2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login/Login2.vue")
  },
  {
    path: "/ingresar-pin",
    name: "enter-pin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login/Login3.vue")
  },
  {
    path: "/sign-up",
    name: "sign-up",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login/SignUp.vue")
  },
  {
    path: "/explora",
    name: "explora",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Explora/Explora.vue"
      )
  },
  {
    path: "/beneficiarios",
    name: "beneficiarios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Beneficiary/Beneficiarios.vue"
      )
  },
  {
    path: "/mis-datos",
    name: "mis-datos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/MyInfo/MyInfo.vue")
  },
  {
    path: "/mis-datos-editar",
    name: "mis-datos-editar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/MyInfo/EditInfo.vue"
      )
  },
  {
    path: "/metodos-de-pago",
    name: "Metodos de pago",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/PaymentMethods/PaymentMethods.vue"
      )
  },
  {
    path: "/editar-datos-de-pago",
    name: "editar-datos-de-pago",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/PaymentMethods/EditMethod.vue"
      )
  },
  {
    path: "/alianza",
    name: "alianza",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Alliance/Alliance.vue"
      )
  },
  {
    path: "/activacion",
    name: "activacion",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Alliance/Success.vue"
      )
  },
  {
    path: "/asesor",
    name: "asesor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Alliance/Adviser.vue"
      )
  },
  {
    path: "/nuestros-planes",
    name: "nuestros-planes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/NuestrosPlanes/NuestrosPlanes.vue"
      )
  },
  {
    path: "/conoce-bamba/:profile",
    name: "conoce-bamba/:profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/About/BambaProfile.vue"
      )
  },
  {
    path: "/contacto",
    name: "contacto",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Contact/Contact.vue"
      )
  },
  {
    path: "/contacto/empleador",
    name: "contacto/empleador",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Contact/Employer.vue"
      )
  },
  {
    path: "/contacto/freelance",
    name: "contacto/freelance",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Contact/Freelance.vue"
      )
  },
  {
    path: "/contacto/trabajador",
    name: "contacto/trabajador",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Contact/Worker.vue")
  },
  {
    path: "/contacto/empresa",
    name: "contacto/empresa",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Contact/Enterprise.vue"
      )
  },
  {
    path: "/sobre-nosotros",
    name: "sobre-nosotros",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/About/About.vue")
  },
  {
    path: "/servicios-gratuitos",
    name: "servicios-gratuitos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/FreemiumView.vue"
      )
  },
  {
    path: "/preguntas-frecuentes",
    name: "faq",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/FAQS/Faqs.vue")
  },
  {
    path: "/eres-cliente-bamba",
    name: "eres-cliente-bamba",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Login/AreYouCustomer.vue"
      )
  },
  {
    path: "/aviso-de-privacidad",
    name: "aviso-de-privacidad",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/PrivacyNotice.vue")
  },
  {
    path: "/metodos-pago",
    name: "metodos-pago",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/PaymentMethodsFooter.vue"
      )
  },
  {
    path: "/terminos-condiciones",
    name: "terminos-condiciones",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/TerminosCondiciones.vue"
      )
  },
  {
    path: "/promocion/activo",
    name: "promotion-activated",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Promotion/PromoSucess"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    }
  }
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  next();
});

export default router;
