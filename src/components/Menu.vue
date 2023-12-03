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
                        <img :src="item.img" alt="foto do produto">
                        <h3>{{item.nome}}</h3>
                        <p>R$ {{item.valor}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Menu",
    data() {
        return {
            dataarray: [],
            img: "../assets/fettuccineconpolpette.png"
        }
    },
    methods: {
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
                    img: "/src/assets/spaghettialpomodoro.png"
                },
                {
                    id: 2,
                    valor: 32.0,
                    nome: "Fettuccine con polpette",
                    descricao: "etc",
                    img: "/src/assets/fettuccineconpolpette.png"
                }
            ]
            this.dataarray = newData;
        }
    },
    created() {
        this.loadData();
        console.log(this.dataarray);
    }
}
</script>
<style scoped>
    .menu {
        display: block;
        height: 100%;
    }

    .menu-header p {
        font-size: 56px;
    }

    .menu-header {
        background-image: url("../assets/menu.png");
        background-size: 100% 100%;
        height: 260px;
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

    .menu-main-body {
        display: flex;
        justify-content: start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .itens {
        margin-left: 10px;
    }

    .itens:first-child {
        margin-left: 0px;
    }

</style>