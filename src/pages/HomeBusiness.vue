<template>
    <div>
        <HeaderBusiness/>
        <HelpBusiness class="bg-primary-30"/>
        <h3 class="font-weight-bold text-center mt-4">Planes de colaboración</h3>
        <div class="row mx-0 w-100 align-items-center" >
            <Collaboration v-for="(items, index) in collaboration" :key="index" :collaboration="items"/>
        </div>

        <Attendance class="bg-primary-30"/>
        <Marketplace/>
        <HowBamba class="bg-primary-30"/>
    </div>
</template>
<script>
    import HeaderBusiness from "../components/Business/HeaderBusiness";
    import HelpBusiness from "../components/Business/HelpBusiness";
    import Collaboration from "../components/Business/Collaboration";
    import Attendance from "../components/Business/attendance";
    import Marketplace from "../components/Business/Marketplace";
    import HowBamba from "../components/Business/HowBamba";
    export default {
        components:{
            HeaderBusiness,
            HelpBusiness,
            Collaboration,
            Attendance,
            Marketplace,
            HowBamba
        },
        data(){
            return {
                collaboration:[
                    {
                        name:"SEGUROS COMO BENEFICIOS",
                        img: require("../assets/business/Estrella.png"),
                        text:"Cuentas con un producto o servicio y quieres incluir seguros y asistencias a modo de beneficios o features adicionales a tu producto o servicio."
                    },
                    {
                        name:"MARKETPLACE BAMBA",
                        img: require("../assets/business/Frame.png"),
                        text:"Cuentas con una plataforma digital como app o web y quieres incluir un marketplace de seguros y asistencias para tus clientes."
                    },
                    {
                        name:"BAMBA ES TU CANAL",
                        img: require("../assets/business/Puente.png"),
                        text:"No cuentas con una plataforma o canal digital o necesitas un canal alternativo para ofrecer a tus clientes seguros y asistencias."
                    },
                ]
            }
        },
    }
</script>
