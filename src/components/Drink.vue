<script setup>
    import BodyHeader from './BodyHeader.vue';
    import agas from '@imagens/agas.png';
    import angas from '@imagens/angas.png';
    import negroni from '@imagens/negroni.png';
    import soda from '@imagens/soda-italiana.png';
    import bellini from '@imagens/bellini.png';
    import aperol from '@imagens/aperol.png';
    import amaretto from '@imagens/amaretto.png';
    import campari from '@imagens/campari.png';
    import lomocello from '@imagens/lomoncello.png'
    import cynar from '@imagens/cynar.png';
</script>
<template>
    <div>
        <BodyHeader title="Bebidas" @updatePage="handleEvent" />
        <div class="drinks-body">
            <div class="drinks-item" v-for="(item, index) in drinks" :key="index">
                <img :src="item.img" alt="item">
                <p>{{item.name}}</p>
                <span class="price">R$ {{item.price.toFixed(2)}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleEvent(page) {
            this.$emit('updatePage', page);
        }
    },
    name: "Drinks",
    data () {
        return {
            drinks: [
                {img: aperol, name: "Aperol spritz", price: 23},
                {img: negroni, name: "negroni", price: 28},
                {img: bellini, name: "Bellini", price: 22},
                {img: campari, name: "Campari", price: 22},
                {img: amaretto, name: "Amaretto", price: 24},
                {img: lomocello, name: "Limoncello", price: 20},
                {img: cynar, name: "Cynar", price: 19},
                {img: soda, name: "Soda italiana", price: 13},
                {img: angas, name: "água mineral sem gás", price: 9},
                {img: agas, name: "água mineral com gás", price: 9}
            ]
        }
    }
}
</script>
<style scoped>

@media (max-width: 786px) {
    .drinks-body {
        display: block !important;
        width: 100% !important;
    }

    .drinks-item {
        width: 100% !important;
    }

    p {
        font-size: 16px !important;
    }

    span {
        font-size: 16px !important;
    }
}

.drinks-body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.drinks-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 520px;
    justify-content: space-around;
    width: 20%;
    margin-top: 20px;
    position: relative;
}

.drinks-item img {
    width: 95%;
    height: 291px;
}

p {
    font-size: 26px;
    position: absolute;
    top: 300px;
}

span {
    position: absolute;
    bottom: 0;
    width: 95%;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
    font-size: 26px;
    background-color: #D9D9D9;
}

@media (max-width: 786px) {
    .drinks-body {
        display: block !important;
        width: 100% !important;
    }

    .drinks-item {
        width: 100% !important;
    }

    p {
        font-size: 16px !important;
    }

    span {
        font-size: 16px !important;
    }
}

.drinks-body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.drinks-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 520px;
    justify-content: space-around;
    width: 20%;
    margin-top: 20px;
    position: relative;
}

.drinks-item img {
    width: 95%;
    height: 291px;
}

p {
    font-size: 26px;
    position: absolute;
    top: 300px;
}

span {
    position: absolute;
    bottom: 0;
    width: 95%;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
    font-size: 26px;
    background-color: #D9D9D9;
}

</style>