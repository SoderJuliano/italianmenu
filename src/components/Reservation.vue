<template>
    <div class="reservation-main">
        <div class="reservation-header">
            <img @click="goto('home')" src="../assets/voltar.png" alt="back...">
            <h1>Faça sua reserva</h1>
        </div>
        <div class="reservation-body">
            <h2>Para garantir sua reserva, reserve com antecedência no WhatsApp <span style="color: #EBAD36;">(12) 3456-7890</span> ou pelo nosso site: </h2>
            <div class="inner-site"></div>
            <p>OBS: tolerância de 15 minutos após o horário marcado.</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "Reservation",
    methods: {
        goto(page) {
            this.$emit('updatePage', page);
        }
    }
}
</script>
<style scoped>

@media (max-width: 786px) {
    .reservation-body {
        margin-top: 40px !important;
    }

    .reservation-header h1 {
        font-size: 16px !important;
    }

    .reservation-body h2 {
        font-size: 16px !important;
    }

    .reservation-body p {
        font-size: 16px !important;
    }

    .inner-site {
        align-self: center;
        margin-top: 10%;
        min-width: 90% !important;
        min-height: 450px !important;
    }
}
    .reservation-main {
        width: 100%;
        height: 100%;
        background-color: rgb(255, 255, 255);
    }

    .reservation-header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    .reservation-header img {
        margin-right: auto;
        height: 40px;
        width: 40px;
    }

    .reservation-header h1 {
        margin-left: -40px;
        margin-right: auto;
    }

    .reservation-body {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .reservation-body h2 {
        font-size: 33px;
    }

    .inner-site {
        align-self: center;
        background-image: url("@imagens/fazer reserva.png");
        background-size: 100% 100%;
        margin-top: 10%;
        min-width: 575px;
        min-height: 848px;
    }

    .reservation-body p {
        font-size: 33px;
        background-color: #F1C97A;
        align-self: center;
        padding: 10px;
        margin-top: 8%;
        width: 70%;
        border-radius: 8px;
    }
</style>