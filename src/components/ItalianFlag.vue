<template>
    <div class="italy">
        <div class="text">
            <img src="../assets/sapory.png" alt="SAPORY">
            <p>especializados em massa italiana</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "ItalianFlag"
}
</script>
<style scoped>
    .italy {
        margin-top: 30px;
        display: flex;
        width: 100%;
        height: 260px;
        border-radius: 8px;
        background-image: url("../assets/italia.png");
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .text {
        margin: 0 auto;
        font-size: 24px;
    }
</style>