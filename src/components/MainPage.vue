<script setup>
    import Header from "./Header.vue";
    import ItalianFlag from "./ItalianFlag.vue";
    import Hello from "./HelloPage.vue";
    import Footer from "./Footer.vue";
    import Menu from "./Menu.vue";
</script>

<template>
    <div class="main" >
        <Header @updatePage="updatePage" />
        <ItalianFlag v-if="page == 'home'" />
        <Hello v-if="page == 'home'" @updatePage="updatePage" />
        <Menu v-if="page =='menu'" @updatePage="updatePage" />
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