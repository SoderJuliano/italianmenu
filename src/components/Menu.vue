<template>
    <div class="menu">
        <div class="menu-header">
            <p>Menu</p>
        </div>
        <div class="menu-body">
            <div class="menu-body-header">
                <img @click="goto('home')" src="../assets/voltar.png" alt="back...">
                <h1>Massas</h1>
            </div>
            <div class="menu-main-body">
                <div class="itens" v-for="(item, index) in dataarray" :key="index" >
                    <div class="item">
                        <img class="cart" :id="'cart-item-'+item.id" src="../assets/game-icons_shopping-cart.png" alt="cart">
                        <img :src="item.img" alt="foto do produto">
                        <h3>{{item.nome}}</h3>
                        <h3 v-if="item.size" class="size">{{ item.size }}</h3>
                        <p @click="addToCart(item.id)">R$ {{item.valor.toFixed(2)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import img from '@/assets/fettuccineconpolpette.png';
import spaghettialpomodoro from '@/assets/spaghettialpomodoro.png';
import fettuccineconpolpette from '@/assets/fettuccineconpolpette.png'
import pennealsugo from '@/assets/pennealsugo.png';
import tortelliniconsalsa from '@/assets/tortelliniconsalsa.png';
import igatonialsugo from '/src/assets/rigatonialsugo.png';
import fettuccinealpomodoro from '@/assets/fettuccinealpomodoro.png';
import fusilliaomolhopesto from '@/assets/fusilliaomolho.png';
import spaghettialaputtanesca from '@/assets/spaghettialaputtanesca.png';
import spaghettiallacarbonara from '@/assets/spaghettiallacarbonara.png';
import tortelliniallapanna from '@/assets/tortelliniallapanna.png';
import bolognese from '@imagens/bolognese.png';
import capricciosa from '@imagens/capricciosa.png';
import crudo from '@imagens/crudo.png';
import formaggi from '@imagens/formaggi.png';
import funghi from '@imagens/funghi.png';
import peperoni from '@imagens/peperoni.png';
import pollo from '@imagens/pollo.png';
import primavera from '@imagens/primavera.png';
import theformaggi from '@imagens/tre-formaggi.png';
import vegane from '@imagens/vegane.png';

export default {
    name: "Menu",
    data() {
        return {
            dataarray: [],
            img: img
        }
    },
    methods: {
        addToCart(id){
            document.getElementById("cart-item-"+id).style.display = "block";
            setTimeout(() => {
                document.getElementById("cart-item-"+id).style.display = "none";
            }, 1500);
            this.$emit("updateCart", id);
        },
        goto(page) {
            this.$emit('updatePage', page);
        },
        loadData() {
            const newData = [
                {
                    id: 1,
                    valor: 27.0,
                    nome: "Spaghetti al pomodoro",
                    descricao: "etc",
                    img: spaghettialpomodoro
                },
                {
                    id: 2,
                    valor: 32.0,
                    nome: "Fettuccine con polpette",
                    descricao: "etc",
                    img: fettuccineconpolpette
                },
                {
                    id: 3,
                    valor: 28.0,
                    nome: "Penne al sugo di pomodoro con rosmarino",
                    descricao: "etc",
                    img: pennealsugo
                },
                {
                    id: 4,
                    valor: 34.0,
                    nome: "Tortellini con salsa alfredo di succa",
                    descricao: "etc",
                    img: tortelliniconsalsa
                },
                {
                    id: 5,
                    valor: 32.0,
                    nome: "Rigatoni al sugo di formaggio",
                    descricao: "etc",
                    img: igatonialsugo
                },
                {
                    id: 6,
                    valor: 27.0,
                    nome: "Fettuccine al pomodoro e basilico",
                    descricao: "etc",
                    img: fettuccinealpomodoro
                },
                {
                    id: 7,
                    valor: 28.0,
                    nome: "Fusilli ao molho pesto",
                    descricao: "etc",
                    img: fusilliaomolhopesto
                },
                {
                    id: 8,
                    valor: 32.0,
                    nome: "Spaghetti ala puttanesca",
                    descricao: "etc",
                    img: spaghettialaputtanesca
                },
                {
                    id: 9,
                    valor: 36.0,
                    nome: "sphaghetti alla carbonara",
                    descricao: "etc",
                    img: spaghettiallacarbonara
                },
                {
                    id: 10,
                    valor: 34.0,
                    nome: "Tortellini alla panna",
                    descricao: "etc",
                    img: tortelliniallapanna
                },
                {
                    id: 11,
                    valor: 40.0,
                    nome: "Quattro formaggi",
                    descricao: "etc",
                    img: formaggi, size: "8 fatias"
                },
                {
                    id: 12,
                    valor: 46.0,
                    nome: "Capricciosa",
                    descricao: "etc",
                    img: capricciosa, size: "8 fatias"
                },
                {
                    id: 13,
                    valor: 44.0,
                    nome: "peperoni",
                    descricao: "etc",
                    img: peperoni, size: "8 fatias"
                },
                {
                    id: 14,
                    valor: 42.0,
                    nome: "primavera",
                    descricao: "etc",
                    img: primavera, size: "8 fatias"
                },
                {
                    id: 15,
                    valor: 46.0,
                    nome: "Prosciutto crudo",
                    descricao: "etc",
                    img: crudo, size: "8 fatias"
                },
                {
                    id: 16,
                    valor: 45.0,
                    nome: "Lasagne di pollo con catupiry",
                    descricao: "etc",
                    img: pollo, size: "p/ 2 pessoas"
                },
                {
                    id: 17,
                    valor: 40.0,
                    nome: "Lasagna vegane",
                    descricao: "etc",
                    img: vegane, size: "p/ 2 pessoas"
                },
                {
                    id: 18,
                    valor: 47.0,
                    nome: "Lasagna con funghi e formaggio",
                    descricao: "etc",
                    img: funghi, size: "p/ 2 pessoas"
                },
                {
                    id: 19,
                    valor: 40.0,
                    nome: "Lasagna bolognese",
                    descricao: "etc",
                    img: bolognese, size: "p/ 2 pessoas"
                },
                {
                    id: 20,
                    valor: 47.0,
                    nome: "Lasagne ai tre formaggi",
                    descricao: "etc",
                    img: theformaggi, size: "p/ 2 pessoas"
                }
            ]
            this.dataarray = newData;
        }
    },
    created() {
        this.loadData();
    }
}
</script>
<style scoped>
    .menu {
        display: block;
        height: 100%;
        flex: 1;
    }

    .menu-header p {
        font-size: 56px;
    }

    .menu-header {
        background-image: url("../assets/menu.png");
        background-size: 100% 100%;
        height: 260px;
        min-height: 25vh;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-top: 35px;
    }

    .menu-boby {
        margin-top: 35px;
        display: block;
    }

    .menu-body-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-body-header img {
        margin-right: auto;
        height: 40px;
        width: 40px;
    }

    .menu-body-header img:active {
        scale: 0.9;
    }

    .menu-body-header h1 {
        margin-right: auto;
        margin-left: -40px;
        font-weight: 400;
        font-size: 45px;
    }

@media (max-width: 786px) {
    .menu-main-body {
        display: block !important;
    }
    .itens {
        width: auto !important;
        margin-top: 20px !important;
    }
    .itens p {
        margin-top: 10px !important;
        font-size: 16px !important;
    }

    .item h3 {
        font-size: 16px !important;
    }

    .menu-header {
        height: 150px !important;
    }

    h1 {
        font-size: 16px !important;
    }
}

@media (min-width: 1900px) {
    .item {
        min-width: 255px;
    }

    .item p {
        min-width: 255px;
    }
}

    .menu-main-body {
        display: flex;
        justify-content: start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .itens {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 20%;
        margin-top: 20px;
    }

    .item {
        width: 95%;
        height: 520px;
        text-align: center;
        position: relative;
    }

    .item p {
        position: absolute;
        bottom: 0;
        width: 100%;
        border-radius: 8px;
        padding: 5px;
        text-align: center;
        font-size: 26px;
        background-color: #D9D9D9;
    }

    .item p:active {
        scale: .9;
    }

    .item img {
        width: 100%;
        height: 291px;
    }

    .item h3{
        font-size: 26px;
    }

    .size {
        position: absolute;
        width: 100%;
        bottom: 90px;
        text-align: center;
    }

    .cart {
        display: none;
        position: absolute;
        margin-top: 50%;
        margin-left: 30%;
        width: 40% !important;
        height: 20% !important;
        filter: invert(1);
    }

</style>