<template>
  <div>
    <div>
      <h5 class="col-lg-6 offset-lg-3 mt-3 font-weight-bold">
        Suscríbete y descubre todos los beneficios de formar parte de la Comunidad
        Bamba®.
      </h5>
      <div class="container">
        <div class="row my-5">
          <div class="col-md-6 offset-md-3">
            <div class="w-100 d-flex justify-content-center">
              <div id="subscribe-form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showSubscribe', 'phone'],

  data() {
    return {
      routes: [],
    }
  },

  mounted() {
    setTimeout(() => {
      window.hbspt.forms.create({
        target: "#subscribe-form",
        portalId: "8710915",
        formId: "3f68ec21-ff93-4b0c-86a7-620ad77015f1",
        onFormReady() {
          const button = $("iframe")
            .contents()
            .find(".hs-button");
          button.css({
            "border-radius": "10px",
            padding: "12px 48px",
            "font-weight": "700",
            "font-size": "1rem",
            "line-height": "1.5",
            display: "block",
            "margin-left": "auto",
            "margin-right": "auto"
          });

          const input = $("iframe")
            .contents()
            .find(".hs-input");

          input.css({
            "background-color": "transparent",
            "border-color": "#50b3e6",
            color: "#123291",
            "font-weight": "bold",
            padding: ".5rem 1rem",
            "font-size": "1rem",
            "line-height": "1.5",
            "border-radius": ".3rem"
          });
        }
      });
      this.$vs.loading.close();
    }, 300);
  }
};
</script>

<style scoped>
.btn {
  border-radius: 10px !important;
  padding: 12px 40px;
}

input {
  background-color: transparent;
  border-color: #123291;
  color: #123291;
  font-weight: bold;
  font-size: 14px;
}

input::-webkit-input-placeholder {
  color: #123291;
  font-weight: bold;
  font-size: 12px;
}

input:focus {
  background-color: transparent;
  color: #123291;
  font-size: 14px;
  font-weight: bold;
}

a {
  text-decoration: none;
}
</style>
