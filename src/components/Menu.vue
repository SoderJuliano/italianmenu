<template>
    <div class="menu">
        <div class="menu-header"></div>
    </div>
</template>
<script>
export default {
    name: "Menu"
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
</style>