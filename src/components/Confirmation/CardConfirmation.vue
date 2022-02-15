<template>
  <div>
    <div class="card my-5 mx-md-5 ">
      <div class="card-body p-2">
        <img
          src="../../assets/check1.png"
          alt="check"
          class="mt-5"
          style="width:60px;"
        >
        <h4 class="font-weight-bold mt-4">
          Confirmación de compra
        </h4>
        <h6 class="px-5">
          Ya cuentas con un asesor Bamba®. ¡Muchas gracias por confiar en
          nosotros!
        </h6>
        <div class="row mt-5 px-5 mb-4">
          <div class="col-md-6">
            <small>Contacta a tu asesor:</small><br>
            <a
              style="border:none; font-size:14px;"
              href="https://bit.ly/asesorbamba"
              target="_blank"
              rel="noopener noreferrer"
              class="font-weight-bold"
            >
              <img
                class="mr-2"
                src="../../assets/whats_01.png"
                alt="whats"
                style="width:20px"
              >55 2086 3686
            </a>
          </div>
          <div class="col-md-6">
            <small>Síguenos en redes sociales:</small><br>
            <a
              style="border:none; font-size:14px;"
              href="https://www.facebook.com/vivebamba"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fab fa-facebook-f mr-3" /></a>
            <a
              style="border:none; font-size:14px;"
              href="https://www.instagram.com/vivebamba"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fab fa-instagram mr-3" /></a>
            <a
              style="border:none; font-size:14px;"
              href="https://twitter.com/Vive_Bamba"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fab fa-twitter mr-3" /></a>
            <a
              style="border:none; font-size:14px;"
              href="https://www.youtube.com/channel/UC1IGqB3a0tGKhWC8YQLlhqg"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fab fa-youtube mr-3" /></a>
            <a
              style="border:none; font-size:14px;"
              href="https://www.linkedin.com/company/vivebamba"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fab fa-linkedin" /><br></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-between  mb-5">
      <div class="col-md-6 mt-3">
        <router-link to="/arma-tu-plan">
          <button
            type="button"
            class="btn blue-background text-blue font-weight-bold btn-block btn-lg"
          >
            Armar un plan
          </button>
        </router-link>
      </div>
      <div class="col-md-6 mt-3">
        <router-link
          to="/nuestros-planes"
        >
          <button
            type="button"
            class="btn blue-background text-blue font-weight-bold btn-block btn-lg"
          >
            Ver planes
          </button>
        </router-link>
      </div>
    </div>
    <router-link to="/">
      <p class="text-center">
        <span>Ir a home</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardConfirmation",
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  background-color: #dcf0fb;
  color: #123291;
}
.text-blue {
  color: #123291;
}
a img {
  width: 20px;
  height: 20px;
}
.fa-chevron-circle-right {
  color: #123291;
}
.blue-background {
  background-color: #50b3e6;
  border: none;
}
.icon {
  width: 50px;
}
.navy-background {
  border: none;
}
button {
  font-size: 16px;
}
a,
span {
  color: #123291;
  text-decoration: none;
  border-bottom: 1px solid #123291;
}
@media (min-width: 992px) {
  p {
    font-size: calc(0.2em + 1vw);
  }
}
</style>
