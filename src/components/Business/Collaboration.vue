<template>
    <div class="mt-4 col-12 col-md-4">
        <img :src="collaboration.img" class="mb-2" style="max-width: 60%;" alt="">
        <p class="font-weight-bold text-center">{{collaboration.name}}</p>
        <p class="text-center">{{collaboration.text}}</p>
    </div>
</template>
<script>
    export default {
        props:[
            "collaboration"
        ]
    }
</script>