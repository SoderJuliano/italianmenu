<template>
    <div v-if="page == 'home'" class="italy body">
        <div class="text">
            <img src="../assets/sapory.png" alt="SAPORY">
            <p>especializados em massa italiana</p>
        </div>
    </div>
    <div v-if="page == 'reservation'" class="reservation body">
        <div class="text2">
            <p>Reserva</p>
        </div>
    </div>
    <div v-if="page == 'about'" class="about body">
        <div class="text3">
            <p>Sobre Nós</p>
        </div>
    </div>

    <div v-if="page == 'dessert'" class="dessert body"></div>

    <div v-if="page == 'drinks'" class="drinks body"></div>
</template>
<script>

export default {
    name: "ItalianFlag",
    props: {
        page: String
    }
}
</script>
<style scoped>

    @media (max-width: 768px) {
        .italy {
            height: 300px;
        }

        p {
            font-size: 16px;
        }

        .about {
            height: 150px !important;
        }

        .italy {
            height: 150px !important;
        }

        .reservation {
            height: 150px !important;
        }

        .body {
            height: 150px !important;
        }
    }

    @media (min-width: 1280px) {
        .body {
            min-height: 25vh !important;
        }
    }

    .drinks {
        margin-top: 30px;
        display: flex;
        width: 100%;
        height: 260px;
        border-radius: 8px;
        background-image: url("../assets/bebidas.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .italy {
        margin-top: 30px;
        display: flex;
        width: 100%;
        height: 260px;
        border-radius: 8px;
        background-image: url("../assets/italia.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .reservation {
        margin-top: 30px;
        display: flex;
        width: 100%;
        height: 260px;
        border-radius: 8px;
        background-image: url("@imagens/reserved.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        text-align: center;
        justify-content: center;
        align-items: center;
    }


    .dessert {
        margin-top: 30px;
        display: flex;
        width: 100%;
        height: 260px;
        border-radius: 8px;
        background-image: url("@imagens/sobremesasbanner.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .text2 {
        font-size: 50px;
        font-weight: 500;
    }

    .text {
        margin: 0 auto;
        font-size: 24px;
    }

    .about {
        margin-top: 30px;
        display: flex;
        width: 100%;
        height: 260px;
        border-radius: 8px;
        background-image: url("@imagens/about.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .text3 {
        font-size: 50px;
        font-weight: 500;
        color: white;
    }
</style>