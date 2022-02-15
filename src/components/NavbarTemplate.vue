<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-custom
      bg-custom
      navy-background
      fixed-top
      dropdown
    "
  >
    <div class="container-fluid">
      <router-link
        class="navbar-brand"
        to="/"
      >
        <img
          src="../assets/BAM_Logo.png"
          alt=""
          class="img-fluid"
          style="width: 135px"
        >
      </router-link>
      <div
        class="
          d-flex
          justify-content-end
          ml-auto
          text-lg-center text-right text-white
          mt-3
          font-weight-bold
          order-1 order-lg-last
        "
      >
        <p>
          <span
            class="account1"
          ><i class="far fa-user mr-2" />Mi cuenta</span>
          <i class="fas fa-shopping-bag ml-3" />
        </p>
      </div>
      <button
        class="navbar-dark navbar-toggler order-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <button
          class="hamburger hamburger--collapse"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </button>
      </button>
      <div
        id="navbar"
        class="collapse navbar-collapse order-3"
      >
        <ul class="navbar-nav ml-auto mr-auto font-weight-bold text-left">
          <li class="account nav-item mt-4 mt-md-0 ml-4 ml-md-0">
            <a
              class="nav-link"
              href="#preguntas-frecuentes"
            >
              <i class="far fa-user mr-3" />Mi cuenta
            </a>
          </li>
          <div class="border-bottom mx-4" />
          <li class="nav-item mt-4 mt-md-0 ml-4 ml-md-0 dropdown">
            <router-link
              class="nav-link"
              data-toggle="dropdown"
              to="/"
            >
              Bamba para todos
            </router-link>
            <ul class="dropdown-menu">
              <ul class="d-flex mr-5">
                <li>
                  <a
                    class="dropdown-item font-weight-bold text-center"
                    href="#"
                  ><img
                    alt="star"
                    class="mb-1"
                    src="../assets/star.png"
                    style="width: 45px"
                  ><br>Empleador</a>
                </li>
                <li>
                  <a
                    class="dropdown-item font-weight-bold ml-2 text-center"
                    href="#"
                  ><img
                    alt="star"
                    class="mb-1"
                    src="../assets/star.png"
                    style="width: 45px"
                  ><br>Freelance</a>
                </li>
                <li>
                  <a
                    class="dropdown-item font-weight-bold ml-2 text-center"
                    href="#"
                  ><img
                    alt="star"
                    class="mb-1"
                    src="../assets/star.png"
                    style="width: 45px"
                  ><br>Trabajadores</a>
                </li>
                <li>
                  <a
                    class="dropdown-item font-weight-bold ml-2 text-center"
                    href="#"
                  ><img
                    alt="star"
                    class="mb-1"
                    src="../assets/star.png"
                    style="width: 45px"
                  ><br>Empresas</a>
                </li>
                <li>
                  <a
                    class="dropdown-item font-weight-bold ml-2 text-center mr-4"
                    href="#"
                  ><img
                    alt="star"
                    class="mb-1"
                    src="../assets/star.png"
                    style="width: 45px"
                  ><br>Embajador</a>
                </li>
              </ul>
            </ul>
          </li>
          <div class="border-bottom mx-4" />
          <li class="nav-item mt-4 mt-md-0 ml-4 ml-md-0">
            <router-link
              class="nav-link"
              to="/nuestros-planes"
            >
              Nuestros Planes
            </router-link>
          </li>
          <div class="border-bottom mx-4" />
          <li class="nav-item mt-4 mt-md-0 ml-4 ml-md-0">
            <router-link
              class="nav-link"
              to="/arma-tu-plan"
            >
              Arma tu Plan
            </router-link>
          </li>
          <div class="border-bottom mx-4" />
          <li class="nav-item mt-4 mt-md-0 ml-4 ml-md-0">
            <router-link
              class="nav-link"
              to="/sobre-nosotros"
            >
              Sobre nosotros
            </router-link>
          </li>
          <div class="border-bottom mx-4" />
          <li class="nav-item mt-4 mt-md-0 ml-4 ml-md-0">
            <a
              class="nav-link"
              href="#blog"
            > Blog </a>
          </li>
          <div class="border-bottom mx-4" />
          <li class="nav-item mt-4 mt-md-0 ml-4 ml-md-0">
            <a
              class="nav-link"
              href="https://comunidad4uno.zendesk.com/"
            >
              Preguntas Frecuentes
            </a>
          </li>
          <div class="border-bottom mx-4" />
          <li class="nav-item mt-4 mt-md-0 ml-4 ml-md-0">
            <router-link
              class="nav-link"
              to="/contacto"
            >
              Contacto
            </router-link>
          </li>
          <div class="border-bottom mb-3 mx-4" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  mounted() {
    var forEach = function (t, o, r) {
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
  },
};
</script>

<style scoped>

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

ul {
  list-style: none;
}
.dropdown-item {
  font-size: 18px;
  color: #123291;
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

@media screen and (min-width: 992px) {
  .nav-link:focus {
    border-bottom: 3px solid #f67779;
    transition: 0.5s;
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

@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }
  .navbar .nav-item:hover .nav-link {
    color: #fff;
  }
  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }
  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
</style>
