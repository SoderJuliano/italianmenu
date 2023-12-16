<script setup>
    import BodyHeader from './BodyHeader.vue';
    import cannoli from '@imagens/cannoli.png';
    import pannacota from '@imagens/panna cotta.png';
    import tiramisu from '@imagens/tiramisu.png';
    import torrone from '@imagens/torrone.png';
    import gelato from '@imagens/gelato.png';
    import pignoli from '@imagens/pignoli.png';
    import paglia from '@imagens/paglia italiana.png';
    import crostana from '@imagens/crostana.png';
    import zeppole from '@imagens/zeppole.png';
    import bomboloni from  '@imagens/bomboloni.png';
</script>
<template>
    <div>
        <BodyHeader title="Sobremesas" @updatePage="handleEvent" />
        <div class="desserts-body">
            <div class="desserts-item" v-for="(item, index) in desserts" :key="index">
                <img :src="item.image" alt="item">
                <p>{{item.name}}</p>
                <span class="price">R$ {{item.valor.toFixed(2)}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Dessert",
    methods: {
        handleEvent(page) {
            this.$emit('updatePage', page);
        }
    },
    data() {
        return {
            desserts: [
                {image: cannoli, name: "Cannoli siciliani - 4 unidades", valor: 32.00},
                {image: pannacota, name: "Panna cotta ai frutti rossi", valor: 36.00},
                {image: tiramisu, name: "Tiramisu al cioccolato - 2 unidades", valor: 24.00},
                {image: torrone, name: "Torrone con pistacchi e mandorle - 2 unidades", valor: 42.00},
                {image: gelato, name: "Gelato al cioccolato e nocciola", valor: 32.00},
                {image: pignoli, name: "Pignoli - 6 unidades", valor: 36.00},
                {image: paglia, name: "Paglia italiana - 2 unidades", valor: 24.00},
                {image: crostana, name: "Crostata di marmellata di fragole - 350g", valor: 40.00},
                {image: zeppole, name: "Zeppole alla crema - 2 unidades", valor: 22.00},
                {image: bomboloni, name: "Bomboloni con ripieno di crema - 2 unidades", valor: 26.00}
            ]
        }
    }
}
</script>
<style scoped>
.desserts-body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.desserts-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 520px;
    justify-content: space-around;
    width: 20%;
    margin-top: 20px;
    position: relative;
}

.desserts-item img {
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