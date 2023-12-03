<template>
    <div class="menu">
        <div class="menu-header"></div>
        <div class="menu-body">
            <div class="menu-body-header">
                <img @click="goto('home')" src="../assets/voltar.png" alt="back...">
                <h1>Massas</h1>
            </div>
            <div class="menu-main-body">
                dev...
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Menu",
    methods: {
        goto(page) {
            this.$emit('updatePage', page);
        }
    }
}
</script>
<style scoped>
    .menu {
        display: block;
        height: 100%;
    }

    .menu-header {
        background-image: url("../assets/menu.png");
        background-size: 100% 100%;
        height: 260px;
        display: flex;
        text-align: center;
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
</style>