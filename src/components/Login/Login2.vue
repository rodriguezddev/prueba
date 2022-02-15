<template>
  <div class="modal fade p-0" id="sendcode" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content" style=" border-radius: 1.25rem ">
        <button class="close text-right px-3 pt-3 text-primary" data-dismiss="modal" type="button">&times;</button>
        <card-auth-2 />
      </div>
    </div>
  </div>
</template>

<script>
  import CardAuth2 from "./CardAuth2.vue";
  export default {
    name: "Login2",
    components: {CardAuth2}
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