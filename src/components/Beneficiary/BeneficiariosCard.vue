<template>
  <div class="card px-4 mt-2">
    <div class="row mt-1 mb-1">
      <div class="col-10 col-md-5 col-lg-3 mt-2">
        <h5>
          <img
            alt="user"
            class="mr-3"
            src="../../assets/user.png"
          >Eduardo
        </h5>
      </div>
      <a
        class="fas-fa"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div class="col-2 fas-fa">
          <i class="fas fa-chevron-down mt-4" />
        </div>
      </a>
      <div class="hide col-6 col-md-3 col-lg-2 mt-1">
        <p class="mb-0">
          Plan:
        </p>
        <h6>Medium</h6>
      </div>
      <div class="hide col-6 col-md-4 col-lg-2 mt-1">
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
      <div class="hide col-md-6 col-lg-2 mt-3">
        <a
          href="#ModalRenewal"
          data-toggle="modal"
          class="btn green-background text-blue font-weight-bold btn-block trigger-btn"
        >
          Renovar plan
        </a>
      </div>
      <modal-renewal />
      <div class="hide col-md-6 col-lg-2 mt-3 text-center">
        <a
          href="#ModalDetails"
          data-toggle="modal"
          class="btn blue-background font-weight-bold text-blue btn-block trigger-btn"
        >
          Ver detalle
        </a>
      </div>
      <modal-details class="text-center" />
      <div class="hide col-12 col-lg-1 mt-2 text-right">
        <a
          class="trigger-btn"
          data-toggle="modal"
          href="#DeletePlan"
        ><img
           alt="check"
           class="img-delete mr-2"
           src="../../assets/delete.png"
         >
          <a
            href="#ModalDetails"
            data-toggle="modal"
            class="btn red-background font-weight-bold text-white btn-block trigger-btn mt-3 mb-3 btn-delete"
          >
            Eliminar Plan
          </a></a>
      </div>
      <delete-plan />
      <collapse-info />
    </div>
  </div>
</template>

<script>
import DeletePlan from "../CartResume/DeletePlan.vue";
import CollapseInfo from "./CollapseInfo.vue";
import ModalDetails from "./ModalDetails.vue";
import ModalRenewal from "./ModalRenewal.vue";

export default {
  name: "BeneficiariosCard",
  components: {DeletePlan, ModalDetails, ModalRenewal, CollapseInfo}
};
</script>

<style scoped>
.card {
  background-color: #dcf0fb;
  border: none;
  border-radius: 10px;
}
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
  .fas-fa {
    display: none;
  }
}
</style>
