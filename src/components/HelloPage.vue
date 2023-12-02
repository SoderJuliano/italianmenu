<template>
    <div class="hello">
        <div class="left">
            <img src="../assets/macaronada.png" alt="macarronada">
            <img src="../assets/massaqueijo.png" alt="massa_com_queijo">
            <p>Sexta-feira das massas</p>
        </div>
        <div class="right">
            <div class="right-in">
                <p><b>Horários de funcionamento</b></p>
                <p>Dias de semana:</p>
                <p>De segunda a sexta das 16h às 23h</p>
                <p>Finais de semana:</p>
                <p>De sábado a domingo das 17h até 00h</p>
            </div>
        </div>
    </div>
    <div class="hello midle">
        <p><span>As melhores sobremesas italianas</span></p>
    </div>
    <div class="hello bottom">
        <div class="left-bottom">
            <img class="first" src="../assets/18.png" alt="imagem">
            <img class="second" src="../assets/20.png" alt="imagem">
            <img src="../assets/19.png" alt="imagem">
            <img src="../assets/21.png" alt="imagem">
            <p>Nossos produtos são 100% naturais e frescos, produzidos e colhidos por nós</p>
        </div>
        <div class="right-bottom">
            <img src="../assets/right.png" alt="image">
        </div>
    </div>
    <div class="hello bottom">
        <div class="left-button" @click="goto('produtcts')" ><span>Ver produtos</span></div>
        <div class="right-button" v-on:click="goto('menu')"><span>Acessar o menu</span></div>
    </div>
</template>
<script>
export default {
    name:"Hello",
    methods: {
        goto(where) {
            this.$emit('updatePage', where);
        }
    }
}
</script>
<style scoped>

@media (max-width: 768px) {
    .hello {
        display: block !important;
    }

    .hello .left{
        width: 100% !important;
    }

    .left p {
        font-size: 17px !important;
        margin-top: -75% !important;
        margin-left: 10% !important;
        width: 80% !important;
    }

    .right {
        width: 100%!important;
        margin-top: 10px;
        height: 400px !important;
    }

    .right-in {
        width: 60% !important;
        font-size: 16px !important;
    }

    .midle {
        background-size: 100% 100% !important;
        height: 200px !important;
    }

    .midle p {
        font-size: 16px !important;
        width: 70% !important;
        margin-left: 10px;
    }

    .hello.bottom {
        display: block!important;
    }

    .left-bottom {
        width: 100%!important;
    }

    .left-bottom p {
        width: 60% !important;
        margin-left: 8% !important;
        margin-top: 56% !important;
        background-color: whitesmoke !important;
        font-size: 16px !important;
    }

    .right-bottom {
        width: 100% !important;
    }

    .left-button {
        width: 100% !important;
        font-size: 16px !important;
    }

    .right-button {
        width: 100%!important;
        font-size: 16px!important;
        margin-top: 10px;
    }
}

    .left-button {
        text-align: center;
        width: 55%;
        background-color: #F1C97A;
        border-radius: 8px;
        font-size: 32px;
        padding: 15px;
    }

    .right-button {
        text-align: center;
        width: 44%;
        background-color: #F1C97A;
        border-radius: 8px;
        font-size: 32px;
        padding: 15px;
    }

    .right-button:active {
        scale: 0.9;
    }

    .left-button:active {
        scale: 0.9;
    }

    .right-button span {
        border-bottom: 1px solid black;
    }

    .left-button span {
        border-bottom: 1px solid black;
    }

    .hello {
        margin-top: 30px;
        display: flex;
        width: 100%;
    }

    .left {
        display: block;
        width: 34%;
        position: relative;
    }

    .left img {
        width: 97%;
        height: 220px;
        display: block;
        margin-top: 15px;
    }

    .left img:first-child {
        margin-top: 0px;
    }

    .left p {
        position: absolute;
        margin-top: -256px;
        margin-left: 10%;
        font-size: 27px;
        width: 350px;
        text-align: center;
        border-radius: 5px;
        padding: 2px;
        background-color: white;
    }

    .right {
        display: flex;
        width: 65.8%;
        font-size: 28px;
        background-image: url("../assets/restaurante.png");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
    }

    .right-in {
        background-color: #ffffffbd;
        border-radius: 8px;
        text-align: center;
        display: block;
        width: 542px;
        height: 251px;
    }

    b {
        font-weight: 900;
    }

    .midle {
        display: flex;
        background-image: url("../assets/sobremesas.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 360px;
        justify-content: center;
        text-align: center;
        margin-top: 50px;
    }

    .midle p {
        padding: 5px;
        background-color: white;
        border-radius: 8px;
        min-height: 35px;
        width: 600px;
        position: absolute;
        margin-top: -25px;
        font-size: 30px;
    }

    .midle span {
        border-bottom: 1px solid black;
    }

    .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .left-bottom {
        display: flex;
        justify-content: space-between;
        width: 55%;
        height: 600px;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .left-bottom img {
        width: 49%;
        height: 286px;
    }

    .first {
        height: 293px;
    }

    .second {
        height: 293px;
    }

    .left-bottom p {
        position: absolute;
        margin-top: 11%;
        margin-left: 5%;
        border-radius: 8px;
        background-color: white;
        padding: 22px;
        text-align: center;
        width: 30%;
        height: auto;
        font-size: 30px;
    }

    .right-bottom {
        width: 44%;
    }

    .right-bottom  img {
        width: 100%;
        border-radius: 8px;
        height: 585px;
    }
</style>