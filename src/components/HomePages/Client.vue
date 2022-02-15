<template>
  <div class="row mt-5 mx-0 col-12 col-md-4 px-0 mb-5">
    <div class="mt-md-1">
      <img
        :src="client.img"
        alt="testimonio1"
        class="w-100"
      >
      <div class="mx-3 row flex-column align-items-md-start align-items-center">
        <p class="">
          {{ client.testimony }}
        </p>
        <small class="font-weight-bold text-md-left">"{{ client.author }}"</small>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Client',
  props: {
    client: Object
  }
}
</script>
