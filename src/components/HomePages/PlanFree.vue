<template>
    <div class="bg-primary-30 p-3 rounded col-12 my-3">
        <div class="pt-2">
            <h3 class="font-weight-bold text-left mb-4">
                Prueba 1 año
            </h3>
            <h2 class="font-weight-bold text-left">
                $0 MXN.
            </h2>
            <p class="text-left">
                <strong>
                    Al año
                </strong>
            </p>
            <ul class="px-3">
                <li class="mb-3">Orientación médica telefónica 24/7</li>
                <li class="mb-3">Asistencia Bamba.</li>
                <li class="mb-3">+ 1 Producto a elegir.</li>
            </ul>
        </div>
        <div class="row justify-content-start align-items-center mx-0 mt-2 ">
            <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
            >
                <path
                        d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                        class="icon-fill"
                />
            </svg>
            <router-link
                    class="ml-2 text-decoration font-size-small  p-0 m-0"
                    id="DetalleH-Prueba"
                    to="/servicios-gratuitos"
            ><strong>
                Ver detalle
            </strong></router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "DescriptionPlans",
        props: {
            plans_decription: Object
        }
    }
</script>
