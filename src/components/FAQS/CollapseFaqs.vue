<template>
  <div id="accordion">
    <div
      id="headingOne"
      class="header btn mb-0 mt-3 d-flex justify-content-between"
      data-toggle="collapse"
      data-target="faq.id"
      aria-expanded="true"
      aria-controls="collapseOne"
    >
      <h5 class="mb-0">
        {{ faq.Question }}
      </h5>
      <i class="fas fa-chevron-circle-down" />
    </div>

    <div
      id="faq.id"
      class="collapse show"
      aria-labelledby="headingOne"
      data-parent="#accordion"
    >
      <div class="card-body">
        {{ faq.Response }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapseFaqs",
  props: {
    faq: Object
  }
};
</script>

<style scoped>
.btn {
  transition: transform 0.3s !important;
}

.btn:hover {
  transform: scale(1) !important;
}

.header {
  color: #123291;
  border-bottom: 2px solid #123291;
}
</style>
