<script setup>
    import Header from "./Header.vue";
    import ItalianFlag from "./ItalianFlag.vue";
    import Hello from "./HelloPage.vue";
    import Footer from "./Footer.vue";
    import Menu from "./Menu.vue";
    import Reservation from './Reservation.vue';
    import AboutUs from "./AboutUs.vue";
    import Dessert from "./Dessert.vue";
</script>

<template>
    <div class="main" >
        <Header @updatePage="updatePage" />
        <ItalianFlag :page="page" v-if=" page == 'home' || page == 'reservation' || page == 'about' || page == 'dessert'" />
        <Hello v-if="page == 'home'" @updatePage="updatePage" />
        <Menu v-if="page =='menu'" @updatePage="updatePage" />
        <Reservation v-if="page == 'reservation'" @updatePage="updatePage" />
        <AboutUs v-if="page == 'about'" @updatePage="updatePage" />
        <Dessert v-if="page == 'dessert'" @updatePage="updatePage" />
        <Footer />
    </div>
</template>
<script>
export default {
    name:"main",
    methods: {
        updatePage(val) {
            this.page = val;
        }
    },
    data(){
        return{
            page: "home"
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