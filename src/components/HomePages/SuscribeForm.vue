<template>
  <div>
    <p class="col-lg-8 mt-3 px-0 f">
      Suscríbete y descubre todos los beneficios de formar parte de la Comunidad
      Bamba®.
    </p>
    <div class="row my-3 mx-0">
      <div class="px-0 w-100">
        <div class="w-100 d-flex justify-content-between">
          <div class="w-100" id="subscribe-form"  />
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
            "border-radius": "24px",
            padding: "10px 40px",
            "font-weight": "400",
            "font-size": "1rem",
            "line-height": "1.5",
            display: "block",
            "margin-left": "0",
            "margin-right": "0",
            "width":"100%",
            "background-color": "#AD56C8",
            "border-color": "#AD56C8",
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
          const form = $("iframe")
                    .contents()
                    .find(".hs-form");
          form.css({
            "display": "flex",
            "width":"100%",
            "justify-content":"space-between",
            "align-items":"center",
            "flex-wrap": "wrap",
            "flex-basis": "33.33%"
          })
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
.hs-button{
    background-color: #AD56C8;
}
#subscribe-form{
  display:flex
}
</style>
