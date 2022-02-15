<template>
  <div class="container-top">
    <Details :demo="pack" />
  </div>
</template>
<script>
  import Details from "../components/DescriptionsPlan/DetailsPlan";
  const Lockr = require("lockr");

  export default {
  name: "Descriptionsplans",
  components: {
    Details,
  },
  data() {
    return {
      pack:""
    };
  },
    created() {
      this.pack = Lockr.get("pack")
      if (
              window.location.pathname === "/confirmacion-de-compra" ||
              window.location.pathname === "/servicios-gratuitos"
      ) {
        document.getElementById("content").classList.remove("container-xl")
      } else {
        document.getElementById("content").classList.add("container-xl")
      }
    }
};
</script>
    