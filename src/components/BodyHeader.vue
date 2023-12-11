<template>
    <div class="body-header">
        <img @click="goto('home')" src="../assets/voltar.png" alt="back...">
        <h1>{{this.title}}</h1>
    </div>
</template>
<script>
export default {
    name: "BodyHeader",
    props: {
        title: String
    },
    methods: {
        goto(page) {
            this.$emit('updatePage', page);
        }
    }
}
</script>
<style scoped>
    .body-header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    .body-header img {
        margin-right: auto;
        height: 40px;
        width: 40px;
    }

    .body-header img:active {
        scale: .9;
    }

    .body-header h1 {
        margin-left: -40px;
        margin-right: auto;
    }

</style>