<script setup>
    import Header from "./Header.vue";
    import ItalianFlag from "./ItalianFlag.vue";
    import Hello from "./HelloPage.vue";
    import Footer from "./Footer.vue";
</script>

<template>
    <div class="main" >
        <Header />
        <ItalianFlag />
        <Hello />
        <Footer />
    </div>
</template>
<script>
export default {
    name:"main"
}
</script>

<style scoped>
.main {
    background-color: white;
    min-width: 80%;
    display: block;
    margin: 0 auto;
    padding: 1rem;
}
</style>