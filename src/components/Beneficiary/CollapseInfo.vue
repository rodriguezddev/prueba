<template>
  <div
    id="collapseExample"
    class="row mx-2 collapse"
  >
    <div class="col-6 col-md-3 col-lg-2 mt-1">
      <p class="mb-0">
        Plan:
      </p>
      <h6>Medium</h6>
    </div>
    <div class="col-6 col-md-4 col-lg-2 mt-1">
      <p class="mb-0">
        Vigencia:
      </p>
      <h6>
        <img
          class="mr-2"
          src="../../assets/check.png"
          alt="check"
          style="width:20px"
        >15/09/2021
      </h6>
    </div>
    <div class="col-md-6 col-lg-2 mt-3">
      <a
        href="#ModalRenewal"
        data-toggle="modal"
        class="btn green-background text-blue btn-lg font-weight-bold btn-block trigger-btn"
      >
        Renovar plan
      </a>
      <modal-renewal />
    </div>
    <div class="col-md-6 col-lg-2 mt-3 text-center">
      <a
        href="#ModalDetails"
        data-toggle="modal"
        class="btn blue-background font-weight-bold btn-lg text-blue btn-block trigger-btn"
      >
        Ver detalle
      </a>
      <modal-details />
    </div>
    <div class="col-12 col-lg-1 mt-2 text-right">
      <a
        href="#DeletePlan"
        data-toggle="modal"
        class="btn red-background font-weight-bold text-blue btn-lg btn-block trigger-btn mt-3 mb-3 btn-delete"
      >
        Eliminar Plan </a>
      <delete-plan />
    </div>
  </div>
</template>

<script>
import DeletePlan from "../CartResume/DeletePlan.vue";
import ModalDetails from "./ModalDetails.vue";
import ModalRenewal from "./ModalRenewal.vue";

export default {

  name: "CollapseInfo",
  components: {DeletePlan, ModalDetails, ModalRenewal}
};
</script>

<style scoped>
.green-background {
  background-color: #7fc34a;
  border: none;
}

.text-blue {
  color: #123291;
}
.navy-background {
  border: none;
}
.blue-background {
  background-color: #50b3e6;
  border: none;
}

.fa-chevron-down {
  color: #123291;
}

p,
.btn {
  font-size: 14px;
}

@media (max-width: 576px) {
  .img-delete,
  .hide {
    display: none;
  }
}

@media (min-width: 577px) {
  .btn-delete,
  .fas-fa,
  .collapse {
    display: none;
  }
}
</style>
