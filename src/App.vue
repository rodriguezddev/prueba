<template>
  <div id="app">
    <NavBar/>
    <shopping-cart/>
    <div id="content" class="container-xl">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import NavBar from "./components/Navbar"
  import ShoppingCart from "./components/ShoppingCart";
  import Footer from "./components/Footer.vue";

  export default {
    components: { Footer, ShoppingCart, NavBar},
  };
</script>

<style lang="scss">
@import "assets/styles/variables";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
@import "assets/styles/bamba-theme";



h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Silka-Semibold";
}

@font-face {
  font-family: "Silka";
  src: local("Silka"), url(./assets/fonts/silka-light-webfont.ttf);
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Silka-Semibold";
  src: local("Silka-Semibold"), url(./assets/fonts/silka-semibold-webfont.ttf);
  font-weight: bold;
  font-style: normal;
}

.btn {
  transition: transform 0.3s !important;
}

.blue-background {
  background-color: #50b3e6;
  border: none;
}

.navy-background {
  border: none;
}
.red-background {
  background-color: #ff7678;
  border: none;
}
.text-blue {
  color: #50b3e6;
}
.pt-6 {
  padding-top: 3.5rem !important;
}

.bamba-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
}

.bamba-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.jp-card .jp-card-front .jp-card-lower .jp-card-name {
  font-size: 14px !important;
}

.text-blue {
  color: #123291;
}

.green-background {
  background-color: #4cc72f;
  border: none;
  color: #123291;
  font-weight: bold;
}

.red-background {
  background-color: #ff7575;
  border: none;
  color: #123291;
  font-weight: bold;
}

cursor-pointer {
  cursor: pointer;
}

.bg-salmon-resilience-light {
  background-color: #ffe4e5;
}
.modal-title {
  text-align: center !important;
}
@media (max-width: 767.98px) {
  .btn {
    padding: 12px 10px !important;
  }
}


.just-mobile {
  display: none;
}

.just-desktop {
  display: block;
}

@media (max-width: 991px) {
  .just-mobile {
    display: block;
  }

  .just-desktop {
    display: none;
  }
}
</style>
