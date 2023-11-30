<template>
    <div class="header">
        <img src="../assets/sapory.png" alt="SAPORY">
        <div class="midlle">
            <img class="search-icon" src="../assets/ei_search.png" alt="serach...">
            <input type="text" class="search">
        </div>
        <div class="rigth">
            <img src="../assets/ph_user-circle-thin.png" alt="account">
            <img src="../assets/game-icons_shopping-cart.png" alt="cart">
        </div>
    </div>
    <div class="header sub">
        <span>Menu</span><span>Sobremesas</span><span>Bebidas</span><span>Restaurante</span><span>Reservas</span>
        <span>Preparo</span><span>Sobre Nós</span><span>Contato</span>
    </div>
</template>
<script>
export default {
    name: "header"
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap');
    .header {
        display: flex;
        padding: 1rem;
        width: 100%;
        justify-content: space-between;
    }

    .midlle {
        width: 35%;
    }

    .search {
        width: 100%;
        height: 35px;
        border-radius: 5px;
        padding-left: 40px;
        box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.3);
        border: none;
        outline: none;
        font-family: 'Quicksand', sans-serif;
        font-size: 27px;
    }

    .search:focus {
        box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.9);
    }

    .search-icon {
        position: absolute;
        margin-left: 5px;
    }

    .sub {
        margin-top: 10px;
        border-radius: 8px;
        color: white;
        min-height: 77px;
        font-size: 23px;
        background-color: #E59700;
        justify-content: space-around;
    }

    .sub span:hover {
        border-bottom: 1px solid black;
    }
</style>