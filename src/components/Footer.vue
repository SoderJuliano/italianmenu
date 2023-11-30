<template>
    <div class="footer">
        <div class="item1">
            <p>Cardápio</p>
            <p>Bebidas</p>
            <p>Reservas</p>
            <p>Restaurante</p>
            <p>Preparo</p>
            <p>Sobre nós</p>
        </div>
        <div class="item2">
            <p>Contato</p>
            <p>Informações</p>
            <p>Politicas de privacidade</p>
            <p>Fale conosco</p>
        </div>
        <div class="item3">
            <img src="../assets/sapory.png" alt="">
            <p>Encontre um restaurante Sapory perto de você</p>
            <input placeholder="Digite seu CEP" type="text" id="cep">
        </div>
        <div class="item4">
            <h3>Redes sociais</h3>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>twitter</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer"
}
</script>
<style scoped>
    .footer {
        margin-top: 50px;
        display: flex;
        width: 100%;
        background-color: #F1C97A;
        color: black;
        font-size: 22px;
        padding: 15px;
        border-radius: 8px;
    }

    .item1 {
        width: 20%;
    }

    .item2 {
        width: 20%;
    }

    .item3 {
        width: 40%;
    }

    .item3 input {
        border: none;
        outline: none;
        border-radius: 8px;
        padding: 5px;
        font-size: 22px;
        width: 60%;
    }

    .item4 {
        width: 20%;
    }
</style>