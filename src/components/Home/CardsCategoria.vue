<template>
    <div class="container-fluid border cards-background p-5 mt-5 mb-5">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Categorias</h1>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    style="max-width: 100%;"
                    class="mb-2"
                >
                    <img src="../../assets/img5.jpg" class="img-fluid" alt="">
                    <h3>Ligeiro Amador</h3>
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    style="max-width: 100%;"
                    class="mb-2"
                >
                    <img src="../../assets/img4.jpg" class="img-fluid" alt="">
                    <h3>Ligeiro Profissional</h3>
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    style="max-width: 100%;"
                    class="mb-2"
                >
                    <img src="../../assets/img3.jpg" class="img-fluid" alt="">
                    <h3>Veículos Pesados</h3>
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CardsCategoria',
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.cards-background{
    position: relative;
}
.cards-background::before{
    content:' ';
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../assets/img2.jpg')no-repeat center center fixed;
    background-size: cover;
}
</style>