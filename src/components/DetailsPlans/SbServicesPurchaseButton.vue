<template>
    <div>
        <router-link
                :id="blok.id"
                :to="blok.route"
                class="
          btn btn-secondary
          font-weight-bold
          px-5
          mt-3
          mb-1
          col-12 col-md-6
          p-0
          py-2
        "
                style="border-radius: 24px !important; font-size: 15px; top: auto"
        >
            Adquirir
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "SbServicesPurchaseButton",
        props: ['blok']
    }
</script>

<style scoped>
</style>