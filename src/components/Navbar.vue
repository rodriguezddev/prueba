<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-custom
      bg-custom
      navy-background
      fixed-top
    "
  >
    <div class="container-fluid">
      <div class="padding-menu">
          <router-link
                  class="navbar-brand"
                  to="/"
        >
          <img
            src="../assets/logo-mobile.svg"
            alt=""
            class="img-fluid"
            style="width: 135px"
          >
          </router-link>
      </div>

      <div class="d-flex align-items-center">
          <div class="mr-3 just-mobile ">
              <button @click="openShoppingCart()" class="btn ml-3" v-if="showShoppingCart">
                  <i class="fas fa-shopping-bag  cursor-pointer shopping-card-mobile"
                  />
              </button>
          <div
            ref="badge"
            class="animate__animated animate__bounceIn"
          >
              <div
                      v-if="packages.length && showShoppingCart"
                      class="badge-mobile cursor-pointer btn"
                      @click="openShoppingCart()"
            >
              {{ packages.length }}
              </div>
          </div>
        </div>
        <button
                @click="toggleMenu()"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-dark navbar-toggler order-1 justify-content-center"
                data-target="#navbar"
                data-toggle="collapse"
                type="button"
        >
          <svg
            v-show="!menuOpened"
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="#123291"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            v-show="menuOpened"
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="#123291"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>

      <div
        class="account-menu order-2 order-lg-last d-flex align-content-center"
        style="position: relative"
      >
        <p
          v-if="auth"
          class="text-center mt-3 font-weight-bold cursor-pointer"
          style="color: #123291"
          @click="logout()"
        >
          Cerrar sesión
        </p>

        <p
          class="text-center mt-3 ml-4 font-weight-bold"
          style="color: #123291"
        >
          <i
            class="far fa-user mr-2 cursor-pointer"
            @click="login()"
          />
          <span
            v-if="!auth"
            class="cursor-pointer"
            @click="login()"
          >Iniciar sesión</span>
          <span
            v-if="showShoppingCart"
            @click="openShoppingCart()"
          >
            <i class="fas fa-shopping-bag ml-3 cursor-pointer" />
          </span>
        </p>

        <div
          ref="badge"
          class="animate__animated animate__bounceIn"
        >
          <div
            v-if="packages.length && showShoppingCart"
            class="badge cursor-pointer"
            @click="openShoppingCart()"
          >
            {{ packages.length }}
          </div>
        </div>
      </div>
      <div
        id="navbar"
        class="collapse navbar-collapse order-3"
      >
        <ul class="navbar-nav ml-auto mr-auto font-weight-bold just-desktop">
          <li class="nav-item mt-4 mt-md-0 ml-4 ml-md-0 dropdown_1">
            <router-link
              id="navbarDropdown"
              to="/"
              aria-expanded="false"
              aria-haspopup="true"
              class="nav-link dropdown-toggle just-mobile"
              data-toggle="dropdown"
              role="button"
            >
              Planes y productos
            </router-link>
            <router-link
              class="nav-link mx-2 account-menu"
              to="/"
            >
              Planes y productos
            </router-link>

            <div class="dropdown-content hide account-menu">
              <div class="row justify-content-center align-items-center">
                <li class="nav-item col-3">
                  <router-link
                          class="mx-2 text-center"
                          :to="{ name: 'inicio', hash: '#planes' }"
                  >
                    <img
                      src="../assets/BMB_corazon.png"
                      alt="star"
                      class="mb-1"
                      style="min-width: 40px; max-width: 40px"
                    ><br>
                    Nuestros Planes
                  </router-link>
                </li>
                <li class="nav-item col-3">
                  <router-link
                          class="mx-2 text-center"
                          to="/arma-tu-plan"
                  >
                    <img
                      src="../assets/star.png"
                      alt="star"
                      class="mb-1"
                      style="min-width: 45px; max-width: 45px"
                    ><br>
                    Arma tu Plan
                  </router-link>
                </li>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link mx-2"
              to="/sobre-nosotros"
            >
              Sobre nosotros
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link mx-2"
              to="/servicios-gratuitos"
            >
              Productos para todos
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link mx-2"
              href="https://blog.vivebamba.com/"
            >
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link mx-2"
              href="https://comunidad4uno.zendesk.com/"
            >
              Preguntas Frecuentes
            </a>
          </li>
          <li class="nav-item">
            <router-link
                    class="nav-link mx-2"
                    to="/empresas"
            >
              Empresas
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link mx-2"
              to="/contacto"
            >
              Contacto
            </router-link>
          </li>
          <li class="nav-item just-mobile cursor-pointer">
            <router-link
              class="nav-link"
              to=""
            >
              Iniciar Sesión
            </router-link>
          </li>
        </ul>
    <mobile-menu @collapseMenu="toggleMenu()"/>
      </div>
    </div>
  </nav>
</template>

<script>
  import PlanService from "./../services/plan";
  import ModalService from "./../services/modals";
  import AppService from "./../services/app";
  import AuthService from "./../services/auth";
  import EventBus from "../events";
  import MobileMenu from "./MobileMenu.vue";
  import {mapState} from "vuex";

  const Lockr = require("lockr");

  export default {
  name: "Navbar",

  components: { MobileMenu },

  data() {
    return {
      routes: {},
      packages: [],
      showShoppingCart: false,
      showBambaMenu: false,
      menuOpened: false,
    };
  },

  watch: {
    $route() {
      this.evaluateRoute();
    },
  },
    computed: {
      ...mapState(["auth"])
  },
  mounted() {
    this.isLoggedIn = AppService.isUserIsLoggedIn();
    let forEach = function (t, o, r) {
      if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
          Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
      else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
    };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener(
          "click",
          function () {
            this.classList.toggle("is-active");
          },
          false
        );
      });
    }
    this.getPackages();
    this.evaluateRoute();

    EventBus.$on("packagesUpdated", () => this.getPackages());
    if(Lockr.get("customer") === undefined){
      this.$store.commit("SetAuth", false)
    } else {
      this.$store.commit("SetAuth", true)
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    },
    evaluateRoute() {
      const url = window.location.href;
      this.showShoppingCart =
        !url.includes("pago") &&
        !url.includes("eres-cliente-bamba");
    },
    async logout() {
      await AuthService.logout();
      this.$store.commit("SetAuth", false)
      EventBus.$emit("logout");
    },

    login() {
      this.$router.push({ path: "/sign-up" });
    },

    openShoppingCart() {
      if (this.packages.length === 0) {
        return this.$vs.notify({
          title: "",
          text: "No tienes productos en tu carrito",
          color: "primary",
        });
      }

      ModalService.showShoppingCart();
    },

    getPackages() {

        this.$refs["badge"].classList.remove("animate__bounceIn");

      setTimeout(() => {
        this.packages = PlanService.getPackages();
        this.$refs["badge"].classList.add("animate__bounceIn");
      }, 100);
    },
  },
};
</script>

<style scoped lang="scss">
.badge {
  position: absolute;
  bottom: 1.5rem;
  width: 23px;
  background: red;
  height: 23px;
  right: -20px;
  border-radius: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
}

.badge-mobile {
  position: absolute;
  bottom: 0.8rem;
  width: 20px;
  background: red;
  height: 20px;
  right: -20px;
  border-radius: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
}

.cursor-pointer {
  cursor: pointer;
}
.navy-background {
  background-color: #fff;
}
/* change the brand and text color */
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  color: #123291;
  align-items: center;
}
/* change the link color */
.navbar-custom .navbar-nav .nav-link {
  color: #123291;
  align-items: center;
}
/* change the color of active or hovered links */
.navbar-custom .nav-item.active .nav-link,
.navbar-custom .nav-item:focus .nav-link,
.navbar-custom .nav-item:hover .nav-link {
  color: #f67779;
}
.separator {
  border-bottom: solid 2px rgb(4, 4, 4);
}
p,
li {
  font-size: 15px;
}

/* * Hamburger */
.hamburger {
  padding: 10px 10px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #fff;
}

.hamburger-box {
  width: 25px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 25px;
  height: 3px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}
/*
   * Collapse
   */
.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--collapse .hamburger-inner::after {
  top: -20px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    opacity 0.1s linear;
}
.hamburger--collapse .hamburger-inner::before {
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse.is-active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--collapse.is-active .hamburger-inner::after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    opacity 0.1s 0.22s linear;
}
.hamburger--collapse.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(-90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.zoom:hover {
  transform: scale(1.1) !important;
}
/* The container <div> - needed to position the dropdown content */
.dropdown_1 {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: fixed;
  background-color: white;
  width: 100vw;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  left: 0;
  padding-left: 250px;
  padding-right: 240px;
  padding-top: 10px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: #123291;
  font-weight: bold;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: white;
}

/* Show the dropdown menu on hover */
.dropdown_1:hover .dropdown-content {
  display: block;
}

.just-mobile {
  display: none;
}

.just-desktop {
  display: flex;
}

.shopping-card-mobile {
  color: #123291;
}

.dropdown-menu {
  background: #123291;
  border: #123291;

  .dropdown-item {
    color: white;
  }

  .dropdown-item:focus,
  .dropdown-item:hover {
    background-color: #123291;
  }
}

@media (max-width: 576px) {
  .account1 {
    display: none;
  }
}
@media (min-width: 577px) {
  .account,
  .border-bottom {
    display: none;
  }
}
@media (max-width: 991px) {
  .dropdown-content,
  .dropdown-content a {
    display: none;
  }
  .account-menu {
    display: none !important;
  }

  .just-mobile {
    display: block;
  }

  .just-desktop {
    display: none;
  }

  nav {
    padding: 0.5rem 0rem 0rem 0rem;
  }

  .padding-menu {
    padding: 0rem 1rem 0.5rem;
  }
}
@media screen and (min-width: 992px) {
  .nav-link:focus {
    border-bottom: 3px solid #f67779;
    transition: 0.5s;
  }
}
@media (max-width: 1100px) {
  .dropdown-content {
    padding-left: 250px;
    padding-right: 320px;
  }
}

.menu-item-mobile {
  border-bottom: 1px solid #464646;
  text-align: left;
  margin-left: 3rem;
  margin-right: 3rem;
}

.bamba-profiles {
  background: white;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
}

.active-bamba-profile {
  display: flex;
}

.arrow-menu {
  color: white;

  &:hover {
    color: #f67779;
  }
}

.profile-link {
  &:hover {
    color: #f67779;
  }
}

.close-menu {
  color: white;
  font-size: 1.5rem;
  margin-left: 0.35rem;
  margin-right: 0.5rem;
}
</style>
