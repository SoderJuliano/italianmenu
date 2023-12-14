<script setup>
    import BodyHeader from './BodyHeader.vue';
</script>

<template>
    <div class="aboutus">
        <BodyHeader title="História" @updatePage="handleEvent" />
    <div class="aboutus-body">
        <div class="paragrafo1">
            <img src="../assets/historia.png" alt="foto história">
            <p> Há muitos anos, em uma vila pequena na região da Toscana, Itália, vivia uma família conhecida como “familia Sapory”. Essa família tinha uma tradição de culinária italiana que passou de geração em geração. Desde cedo todos os integrantes da família aprenderam os segredos da cozinha italiana.</p>
        </div>
        <div class="paragrafo2">
            <p> Porém, um integrante da família tinha um amor inexplicável pela culinária, Enrico. Quando Enrico se tornou um jovem adulto, ele decidiu seguir os passos de sua avó e elevar adiante o legado da família. Ele passou anos aprimorando suas habilidades culinárias e viajando pela Itália em busca das melhores receitas regionais. 
 Com tempo, Enrico transformou o antigo restaurante da família  no “ sapory”. À medida que o tempo passava, Enrico manteve a tradição de sua avó, mantendo a hospitalidade e o amor em cada prato servido. Os clientes se tornavam amigos e os turistas voltavam anos após ano para experimentar aos pratos de ‘Sapory”.
 E assim, a história de “Sapory” continua a ser contada, uma história de tradição, familia, amor e é claro,  de deliciosos sabores italianos que aquecem os corações de todos que tem a sorte de passar por sua porta.
            </p>
        </div>
        <div class="paragrafo2">
            <p> Aqui no Sapory, unimos a paixão pela culinária e hospitalidade calorosa. Desde a nossa apresentação, buscamos encantar os paladares dos nossos clientes, oferecendo pratos cuidadosamente preparados com ingredientes fresco e locais. 
 Aqui, acreditamos que a comida não é apenas uma refeição, mas uma experiência. Nosso ambiente convida a relaxar e desfrutar da boa comida, da companhia de amigos e da alegria de compartilhar momentos especiais. Estamos ansiosos para recebe-lo e compartilhar nossa paixão culinária com você. 
 Venha fazer parte da nossa história no Sapory e deixe-nos criar memórias gastronômicas especiais juntos. 
             Seja bem-vindo!
            </p>
            <div class="aboutus-footer">
                <img src="../assets/restaurantea.png" alt="restaurante">
                <span class="year">1901</span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: "AboutUs",
    methods: {
        handleEvent(page) {
            this.$emit('updatePage', page)
        }
    }
}
</script>
<style>
    .aboutus {
        width: 100%;
        height: 100%;
        margin-top: 30px;
    }

    .aboutus-body {
        margin-top: 30px;
        display: block;
        padding: 10px;
    }

    .paragrafo1 {
        display: flex;
        justify-content: start;
    }

    .paragrafo1 img {
        width: 25%;
        max-height: 290px;
        border-radius: 5px;
    }

    .paragrafo1 p {
        word-wrap: normal;
        margin-left: 10px;
        font-size: 33px;
    }

    .aboutus-footer {
        display: grid;
        margin-top: 10px;
    }

    .paragrafo2 p {
        margin-top: 10px;
        word-wrap: normal;
        font-size: 33px;
    }

    .paragrafo2 img {
        width: 100%;
        filter: grayscale(100%);
    }

    .year {
        position: absolute;
        justify-self: center;
        align-self: center;
        font-size: 50px;
        font-weight: 500;
        color: white;
    }

    @media (max-width: 786px) {
        .paragrafo1 p {
            font-size: 16px !important;
        }

        .paragrafo2 p {
            font-size: 16px !important;
        }

        .paragrafo1 {
            display: block;
        }

        .paragrafo1 img {
            width: 100% !important;
        }
    }
</style>