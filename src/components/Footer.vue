<template>
  <div class="footer text-left bg-primary text-white">
    <div class="container-fluid footer">
      <div class="row text-md-left pt-5 ">
        <div class="col-12 col-md-3 row m-0 flex-column">
          <h6 class="font-size-medium-lg-size">
            Contacto
          </h6>
          <a
            class="my-1"
            href="mailto:hola@vivebamba.com"
            rel="noopener noreferrer"
            style="color:#fff; font-size:14px;"
            target="_blank"
          >
            <i class="far fa-envelope mr-2" />hola@vivabamba.com
          </a>
          <a
            class="my-1"
            href="https://api.whatsapp.com/send?phone=525545850371&amp;text=¡Hola!"
            rel="noopener noreferrer"
            style="color:#fff; font-size:14px;"
            target="_blank"
          >
            <i class="fas fa-phone-alt mr-2" />Ventas: 55 4757 7627
          </a>
          <a
            class="my-1"
            href="https://api.whatsapp.com/send?phone=5520853685&amp;text=¡Hola!"
            rel="noopener noreferrer"
            style="color:#fff; font-size:14px;"
            target="_blank"
          >
            <i class="fab fa-whatsapp mr-2" />Servicio al cliente: 55 2085 3685
          </a>
        </div>

        <div class="col-12 col-md-3">
          <h6 class="font-size-medium-lg-size">
            Nuestras oficinas
          </h6>
          <p class="my-1">
            Av. Insurgentes Sur #1458, Actipan, Benito Juárez <br>
            CP. 03230, Cd. de México, CDMX
          </p>
        </div>

        <div class="col-12 col-md-3">
          <h6 class="font-size-medium-lg-size">
            Información del sitio
          </h6>
          <div class="row">
            <div class="col-12 col-md-6 py-1">
              <router-link
                style="color:#fff; font-size:14px;"
                to="/metodos-pago"
              >
                -Método de pago
              </router-link>
            </div>
            <div class="col-12 col-md-6 py-1">
              <router-link
                style="color:#fff; font-size:14px;"
                to="/aviso-de-privacidad"
              >
                -Aviso de privacidad
              </router-link>
            </div>
            <div class="col-12 col-md-6 py-1">
              <router-link
                style="color:#fff; font-size:14px;"
                to="/terminos-condiciones"
              >
                -Términos y condiciones
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 text-md-right mb-4">
          <h6 class="font-size-medium-lg-size">
            Síguenos
          </h6>
          <a
            href="https://www.facebook.com/vivebamba"
            rel="noopener noreferrer"
            style="color:#fff; font-size:14px;"
            target="_blank"
          ><i class="fab fa-facebook-f mr-3" /></a>
          <a
            href="https://www.instagram.com/vivebamba"
            rel="noopener noreferrer"
            style="color:#fff; font-size:14px;"
            target="_blank"
          ><i class="fab fa-instagram mr-3" /></a>
          <a
            href="https://twitter.com/Vive_Bamba"
            rel="noopener noreferrer"
            style="color:#fff; font-size:14px;"
            target="_blank"
          ><i class="fab fa-twitter mr-3" /></a>
          <a
            href="https://www.youtube.com/channel/UC1IGqB3a0tGKhWC8YQLlhqg"
            rel="noopener noreferrer"
            style="color:#fff; font-size:14px;"
            target="_blank"
          ><i class="fab fa-youtube mr-3" /></a>
          <a
            href="https://www.linkedin.com/company/vivebamba"
            rel="noopener noreferrer"
            style="color:#fff; font-size:14px;"
            target="_blank"
          ><i class="fab fa-linkedin" /><br></a>
          <img
            src="../assets/ViveBamba.png"
            alt="viveBamba"
            class="mt-2 efecto-flotar"
            style="width:80px"
          >
        </div>
      </div>
      <div class="footer__1" />
      <div class="row mt-2 px-5 justify-content-center">
        <div class="col-12 col-md-4 offset-md-4 text-center mt-3">
          <p class="row justify-content-center">
            Nuestras formas de pago: <img
              class="ml-2"
              src="../assets/simbolos.svg"
              alt="visa"
              style="width:30px"
            >
            <img
              class="ml-2"
              src="../assets/master.svg"
              alt="visa"
              style="width:30px"
            >
            <img
              class="ml-2"
              src="../assets/american-express.svg"
              alt="visa"
              style="width:30px"
            >
          </p>
          <img
            alt=""
            src=""
          >
        </div>
        <div class="col-12 col-md-4 text-center row justify-content-center">
          <p>Bamba® | 2020</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer__1 {
  border-bottom: 0.1px solid;
}
h6 {
  font-weight: bold;
}
p {
  font-size: 12px;
}
.efecto-flotar{
    animation-name:flotar;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes flotar {
  0%{
        transform: translateY(7px);
  }
  50%{
        transform: translateY(10px);
  }
  100%{
        transform: translateY(7px);
  }
}
</style>
