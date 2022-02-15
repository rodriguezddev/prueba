<template>
  <div class="hello">
    <div class="cont-barra row mx-0 justify-content-between w-100 align-items-center pt-3">
      <router-link
        class="col-3"
        to="/"
      >
        <img
          alt=""
          class=" img-log"
          src="../assets/BAM_Logo.png"
        >
      </router-link>
      <button
        class="btn col-3"
        @click="show = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          width="3em"
          height="2.5em"
          style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#C4C4C4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 12h18" />
            <path d="M3 6h18" />
            <path d="M3 18h18" />
          </g>
        </svg>
      </button>
      <div
        :class="{'show-menu' : show}"
        class="cont-menu-mobile"
      >
        <button
          class="btn hidden-menu"
          @click="show = false"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            viewBox="0 0 16 16"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g fill="#fff">
              <path
                d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8L1.293 2.707a1 1 0 0 1 0-1.414z"
              />
            </g>
          </svg>
        </button>
        <div>
          <router-link
            class="w-100 justify-content-center row mx-auto mt-5"
            to="/"
          >
            <img
              alt=""
              src="../assets/BAM_Logo.png"
              style="width:8rem;"
            >
          </router-link>
          <ul class="nav navmobile mt-5 col-12 row justify-content-between mx-0 px-4">
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <button
                class="btn font-weight-bold enlaces-nav m-0"
                @click="showD = !showD"
              >
                Bamba para todos
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height="1.5em"
                  preserveAspectRatio="xMidYMid meet"
                  style="-ms-transform: rotate(270deg); -webkit-transform: rotate(270deg); transform: rotate(270deg);"
                  viewBox="0 0 20 20"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0c.436.445.408 1.197 0 1.615c-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </li>
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <a
                :class="{'d-none' : showD}"
                class=" font-weight-bold enlaces-nav"
                href="/nuestros-planes"
              > Nuestros planes </a>
            </li>
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <a
                :class="{'d-none' : showD}"
                class=" font-weight-bold enlaces-nav"
                href="/arma-tu-plan"
              > Arma tu plan </a>
            </li>
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <a
                :class="{'d-none' : showD}"
                class=" font-weight-bold enlaces-nav"
                href="/sobre-nosotros"
              > Sobre nosotros </a>
            </li>
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <a
                :class="{'d-none' : showD}"
                class=" font-weight-bold enlaces-nav"
                href="/servicios-gratuitos"
              > Servicios gratuitos </a>
            </li>
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <a
                :class="{'d-none' : showD}"
                class=" font-weight-bold enlaces-nav"
                href="/preguntas-frecuentes"
              > Preguntas frecuentes </a>
            </li>
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <a
                :class="{'d-none' : showD}"
                class=" font-weight-bold enlaces-nav"
                href="/contacto"
              > Contacto </a>
            </li>
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <a
                :class="{'d-none' : showD}"
                class=" font-weight-bold enlaces-nav"
                href="/"
              > Blog </a>
            </li>
            <li class="col-12 py-3 mx-0 row justify-content-start">
              <a
                :class="{'d-none' : showD}"
                class=" font-weight-bold enlaces-nav"
                href="/"
                to="/"
              > Cerrar sesión </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        :class="{'show-menuD' : showD}"
        class="cont-menu-mobile shadow-lg"
      >
        <div class="d-flex justify-content-center flex-column align-items-center mr-3 mt-5">
          <a
            class="font-weight-bold text-center row mx-0 my-3 align-items-center"
            href="/conoce-bamba/empleador"
          ><img
            alt="star"
            class="zoom mr-2"
            src="../assets/star.png"
            style="max-width: 25px; min-width:25px;"
          ><span class="enlaces-nav">Empleador</span></a>
          <a
            class="font-weight-bold text-center row mx-0 my-3 align-items-center"
            href="/conoce-bamba/freelance"
          ><img
            alt="star"
            class="zoom mr-2"
            src="../assets/star.png"
            style="max-width: 25px; min-width:25px;"
          ><span class="enlaces-nav">Freelance</span> </a>
          <a
            class="font-weight-bold text-center row mx-0 my-3 align-items-center"
            href="/conoce-bamba/trabajadores"
          ><img
            alt="star"
            class="zoom mr-2"
            src="../assets/BMB_corazon.png"
            style="max-width: 25px; min-width:25px;"
          ><span class="enlaces-nav">Trabajadores</span></a>
          <a
            class="font-weight-bold text-center row mx-0 my-3 align-items-center"
            href="/conoce-bamba/empresas"
          ><img
            alt="star"
            class="zoom mr-2"
            src="../assets/star.png"
            style="max-width: 25px; min-width:25px;"
          > <span class="enlaces-nav">Empresas</span></a>
        </div>
        <div class="hidden-menu-d mt-4">
          <button
            class="btn "
            @click="showD = false"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              viewBox="0 0 24 24"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M16 13v-2H7V8l-5 4l5 4v-3z"
                fill="#113291"
              />
              <path
                d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"
                fill="#113291"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      show:false,
      showD:false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cont-menu-mobile{
    height: 100vh;
    width:100%;
    background: #113291;
    position: fixed;
    z-index: 99999999;
    top:0;
    transition: 0.5s ease all;
    transform: translateY(100%);
    overflow: auto;
  }
  .show-menu{
    transition: 0.5s ease all;
    transform: translateY(0%);
    animation: circle 0.5s 
  }
  .show-menuD{
    transition: 0.5s ease all;
    transform: translateY(25%);
    animation: circle 0.5s;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
  @keyframes circle {
    0%{
      border-top-left-radius: 10rem;
      border-top-right-radius: 10rem;
    }
    50%{
      border-top-left-radius: 5rem;
      border-top-right-radius: 5rem;
    }
    75%{
      border-top-left-radius: 0rem;
      border-top-right-radius: 0rem;
    }
    100%{
      border-top-left-radius: 0rem;
      border-top-right-radius: 0rem;
    }
  }
  .hidden-menu{
    position:absolute;
    right:1rem;
    top:1rem;
  }
  .hidden-menu-d{
    display:flex;
    justify-content:center;
  }
  .cont-barra{
      background: #113291;
      position:fixed;
      top:0;
      height:5rem;
      z-index:9999
  }
  .img-log{
    width: 130px;
    height: 19px;
  }
   .navmobile li a, button{
        color:#fff!important;
    }
    .navmobile li button:focus{
       box-shadow: none;
    }
    .btn {
        padding: 0 !important;
    }
    .enlaces-nav{
      color:#fff!important;
    }
</style>
