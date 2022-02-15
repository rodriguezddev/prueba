<template>
  <div>
    <ul class="navbar-nav ml-auto mr-auto font-weight-bold just-mobile pb-5">
        <li @click="InconMenuState()" class="nav-item py-3 menu-item-mobile">
            <router-link
                    class="nav-link mx-2"
                    data-target="#navbar"
                    data-toggle="collapse"
                    to="/sobre-nosotros"
        >
          Sobre nosotros
            </router-link>
      </li>

      <li class="nav-item py-3 menu-item-mobile">
        <a
          class="nav-link mx-2"
          href="https://blog.vivebamba.com/"
        > Blog </a>
      </li>
      <li class="nav-item py-3 menu-item-mobile">
        <a
          class="nav-link mx-2"
          href="https://comunidad4uno.zendesk.com/hc/es-419"
        >
          Preguntas Frecuentes
        </a>
      </li>
      <li @click="InconMenuState()" class="nav-item py-3 menu-item-mobile">
        <router-link
                class="nav-link mx-2"
                data-target="#navbar"
                data-toggle="collapse"
                to="/empresas"
        >
          Empresas
        </router-link>
      </li>
        <li @click="InconMenuState()" class="nav-item py-3 menu-item-mobile">
            <router-link
                    class="nav-link mx-2"
                    data-target="#navbar"
                    data-toggle="collapse"
                    to="/contacto"
        >
          Contacto
            </router-link>
      </li>
    </ul>

    <div
      ref="bambaMenu"
      class="bamba-profiles just-mobile animate__animated justify-content-center"
    >
      <li
        class="
          just-mobile
          d-flex
          flex-column
          align-items-center
          cursor-pointer
          profile-link
        "
      >
          <div @click="InconMenuState()" class="row mx-0 justify-content-center"
               data-target="#navbar"
               data-toggle="collapse">
              <router-link
                      class="mx-2 text-center"
                      :to="{ name: 'inicio', hash: '#planes' }"

              >
                  <img
                          alt="star"
                          class="mb-1"
                          src="../assets/BMB_corazon.png"
                          style="min-width: 40px; max-width: 40px"
                  ><br>
                  Nuestros Planes
              </router-link>
          </div>
      </li>
      <li
              class="
          just-mobile
          d-flex
          flex-column
          align-items-center
          cursor-pointer
          profile-link
          my-5
        "
              @click="InconMenuState()"
      >
          <router-link
                  class="mx-2 text-center"
                  data-target="#navbar"
                  data-toggle="collapse"
                  to="/arma-tu-plan"
        >
          <img
            alt="star"
            class="mb-1"
            src="../assets/star.png"
            style="min-width: 45px; max-width: 45px"
          ><br>
          Arma tu Plan
          </router-link>
      </li>
    </div>
  </div>
</template>

<script>

export default {
  name: "MobileMenu",

  data() {
    return {
      packages: [],
      showShoppingCart: false,
      showBambaMenu: false,
    };
  },

  methods: {
      InconMenuState() {
          this.$emit('collapseMenu')

    },
    toggleBambaMenu() {
      this.showBambaMenu = !this.showBambaMenu;
      if (this.showBambaMenu) {
        this.$refs["bambaMenu"].classList.remove("animate__fadeOutRight");
        setTimeout(
          () => this.$refs["bambaMenu"].classList.add("animate__fadeInRight"),
          5
        );
        setTimeout(
          () => this.$refs["bambaMenu"].classList.add("active-bamba-profile"),
          5
        );
      } else {
        this.$refs["bambaMenu"].classList.remove("animate__fadeInRight");
        setTimeout(
          () => this.$refs["bambaMenu"].classList.add("animate__fadeOutRight"),
          100
        );
        setTimeout(
          () =>
            this.$refs["bambaMenu"].classList.remove("active-bamba-profile"),
          500
        );
      }
    }
  },
};
</script>

<style scoped lang="scss">
.cursor-pointer {
  cursor: pointer;
}



/* change the brand and text color */
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  color: rgba(255, 255, 255, 1);
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



.dropdown-menu {
  background: #123291;
  border: #123291;

  .dropdown-item {
    color: #123291;
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
  border-bottom: 1px solid #d7d7d7;
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
</style>
