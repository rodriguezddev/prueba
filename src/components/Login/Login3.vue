<template>
  <div class="modal fade p-0" id="code" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content" style=" border-radius: 1.25rem ">
        <button class="close text-right px-3 pt-3 text-primary" data-dismiss="modal" type="button">&times;</button>
        <card-auth-3 />
      </div>
    </div>
  </div>
</template>

<script>
  import CardAuth3 from "./CardAuth3.vue";

  export default {
    name: "Login3",
    components: {CardAuth3}
  };
</script>

<style scoped>
  .auth {
    margin-top: 100px;
  }

  @media screen and (max-width: 992px) {
    img {
      display: none;
    }
  }
</style>