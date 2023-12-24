<script setup>
    import Header from "./Header.vue";
    import ItalianFlag from "./ItalianFlag.vue";
    import Hello from "./HelloPage.vue";
    import Footer from "./Footer.vue";
    import Menu from "./Menu.vue";
    import Reservation from './Reservation.vue';
    import AboutUs from "./AboutUs.vue";
    import Dessert from "./Dessert.vue";
    import Drinks from "./Drink.vue";
</script>

<template>
    <div class="main" >
        <Header :cart-itens="cartItens" @updatePage="updatePage" />
        <ItalianFlag :page="page" v-if="page != 'menu'" />
        <Hello v-if="page == 'home'" @updatePage="updatePage" />
        <Menu v-if="page =='menu'" @updatePage="updatePage" @updateCart="updateCart"/>
        <Reservation v-if="page == 'reservation'" @updatePage="updatePage" />
        <AboutUs v-if="page == 'about'" @updatePage="updatePage" />
        <Dessert v-if="page == 'dessert'" @updatePage="updatePage" @updateCart="updateCart"/>
        <Drinks v-if="page == 'drinks'" @updatePage="updatePage" @updateCart="updateCart"/>
        <Footer />
    </div>
</template>
<script>
export default {
    name:"main",
    methods: {
        updateCart(id){
            console.log(id);
            this.cartItens++;
        },
        updatePage(val) {
            this.page = val;
        }
    },
    data(){
        return{
            page: "home",
            cartItens: 0
        }
    }
}
</script>

<style scoped>

@media (max-width: 786px) {
    .main {
        width: 100% !important;
    }
}

.main {
    background-color: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
}
</style>