<template>
    <div class="my-5 pt-5">

        <div class="row justify-content-end mx-0 ">
            <div class="col-12 col-md-6">
                <h1 class="text-left">{{previewPlan.name}}</h1>
                <p class="text-left">{{previewPlan.brief}}</p>
            </div>
            <buttonPucharse class="col-12 col-md-6"/>
        </div>

        <div v-for="(item, index) in previewPlan.description" :key="index">
            <h2 class="mb-4 mt-3">{{item.section}}</h2>
            <ul class="ml-3">
                <li v-for="(body, index) in item.body" :key="index" class="mb-2">{{body}}</li>
            </ul>
        </div>
        <div class="row justify-content-end mx-0 ">
            <buttonPucharse class="col-12 col-md-6"/>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import buttonPucharse from "./SbPurchaseButton";
    export default {
        name:'PlansDetails',
        components:{
            buttonPucharse
        },
        computed: {
            ...mapState(["previewPlan"]),
        },
        created() {
            if (
                window.location.pathname === "/confirmacion-de-compra" ||
                window.location.pathname === "/servicios-gratuitos"||
                window.location.pathname === "/"
            ) {
                document.getElementById("content").classList.remove("container-xl")
            } else {
                document.getElementById("content").classList.add("container-xl")
            }
        }
    }
</script>
