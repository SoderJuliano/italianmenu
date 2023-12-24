<template>
    <div class="header">
        <img class="sapory" src="../assets/sapory.png" alt="SAPORY">
        <div class="midlle">
            <img class="search-icon" src="../assets/ei_search.png" alt="serach...">
            <input type="text" class="search" placeholder="Pesquise aqui" v-model="search" @keyup="searchData">
        </div>
        <div class="rigth">
            <img src="../assets/ph_user-circle-thin.png" alt="account">
            <img src="../assets/game-icons_shopping-cart.png" alt="cart">
        </div>
    </div>
    <div class="header sub">
        <span @click="goto('menu')">Menu</span><span @click="goto('dessert')">Sobremesas</span><span @click="goto('drinks')">Bebidas</span><span>Restaurante</span><span @click="goto('reservation')">Reservas</span>
        <span>Preparo</span><span @click="goto('about')">Sobre Nós</span><span>Contato</span>
    </div>
</template>
<script setup>
    import { pastas } from './allitensData';
    import { drinks } from './allitensData';
    import { desserts } from './allitensData';
</script>
<script>
export default {
    name: "header",
    data(){
        return {
            search: "",
            headerssoptions: ["início", "inicio", "inicial", "menu", "sobre nos", "sobre nós", "sobremesa", "bebida", "reserva", "preparo", "contato"],        
        }
    },
    methods: {
        goto(where) {
            this.$emit('updatePage', where);
        },
        shearchInArraysObjects(search) {
            if(drinks(search).length > 0) {
                return "drinks";
            }else if (desserts(search).length > 0) {
                return "dessert";
            }else if (pastas(search).length > 0) {
                return "menu"
            }else return null;
        },
        searchData () {
            if(this.headerssoptions.includes(this.search.toLowerCase())) {
                switch (this.search.toLowerCase()) {
                    case 'menu':
                        this.goto('menu');
                        break;
                    case 'sobre nos':
                        this.goto('about');
                        break;
                    case 'sobre nós':
                        this.goto('about');
                        break;
                    case 'sobremesa':
                        this.goto('dessert');
                        break;
                    case 'inicio':
                        this.goto('home');
                        break;
                    case 'início':
                        this.goto('home');
                        break;
                    case 'inicial':
                        this.goto('home');
                        break;
                    case 'bebida':
                        this.goto('drinks');
                        break;
                    case 'reserva':
                        this.goto('reservation');
                        break;
                    case 'preparo':
                        this.goto('home');
                        break;
                    case 'contato':
                        this.goto('contact');
                        break;
                    default:
                        break;
                }
            } else if (this.search.length > 4){
                const found = this.shearchInArraysObjects(this.search);
                if(found != null) {
                    this.goto(found);
                }
            }
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap');

    @media (max-width: 768px) {
        .header.sub {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .sub span {
            margin-left: 10px;
            font-size: 16px;
        }

        .sapory {
            display: none;
        }

        .midlle {
            width: 60% !important;
        }
    }

    .header {
        display: flex;
        padding: 1rem;
        width: 100%;
        justify-content: space-between;
    }

    .midlle {
        width: 35%;
    }

    .search {
        width: 100%;
        height: 35px;
        border-radius: 5px;
        padding-left: 40px;
        box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.3);
        border: none;
        outline: none;
        font-family: 'Quicksand', sans-serif;
        font-size: 27px;
    }

    .search:focus {
        box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.9);
    }

    .search-icon {
        position: absolute;
        margin-left: 5px;
    }

    .sub {
        margin-top: 10px;
        border-radius: 8px;
        color: white;
        min-height: 77px;
        font-size: 23px;
        background-color: #E59700;
        justify-content: space-around;
    }

    .sub span:hover {
        border-bottom: 1px solid black;
    }
</style>