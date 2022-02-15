<template>
    <div class="pt-3">
        <h3 class="font-weight-bold">Regístrate en Bamba</h3>
        <p>¿Ya tienes una cuenta? <a class="text-decoration" href=""><strong> Inicia sesión</strong></a></p>
        <form>
            <div class="row mx-0 justify-content-start pb-3">
                <label class="font-weight-bold text-left">Nombre (s)</label>
                <input
                        class="input-bamba"
                        type="text"
                />
            </div>
            <div class="row mx-0 justify-content-start pb-3">
                <label class="font-weight-bold text-left">Número celular</label>
                <input
                        class="input-bamba"
                        type="text"
                />
            </div>
            <div class="row mx-0 justify-content-start pb-3">
                <label class="font-weight-bold text-left">Correo electrónico</label>
                <input
                        class="input-bamba"
                        type="text"
                />
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: "Register"
    }

</script>