<template>
    <div class="container-fluid border cards-background p-5 mt-5 mb-5" id="contatolink">
        <div class="row">
            <div class="col-12 text-center textBlue">
                <h1 class="textBlue">Categorias</h1>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    style="max-width: 100%;height: 425px; "
                    class="mb-2"
                >
                    <img src="../../assets/img5.jpg" class="img-fluid" alt="">
                    <h3>Ligeiro Amador</h3>
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" v-b-modal.modal-1 variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    style="max-width: 100%;height: 425px;"
                    class="mb-2"
                >
                    <img src="../../assets/img4.jpg" class="img-fluid" alt="">
                    <h3>Ligeiro Profissional</h3>
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" v-b-modal.modal-2 variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    style="max-width: 100%;height: 425px;"
                    class="mb-2"
                >
                    <img src="../../assets/img3.jpg" class="img-fluid" alt="">
                    <h3>Veículos Pesados</h3>
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" v-b-modal.modal-3 variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
        </div>
        <b-modal id="modal-1" title="Ligeiro Amador">
            <p class="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived 
                not only five centuries, but also the leap into electronic typesetting,
                 remaining essentially unchanged. It was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more 
                 recently with desktop publishing software like Aldus PageMaker including 
                 versions of Lorem Ipsum.</p>
        </b-modal>
        <b-modal id="modal-2" title="Ligeiro Profissional">
            <p class="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived 
                not only five centuries, but also the leap into electronic typesetting,
                 remaining essentially unchanged. It was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more 
                 recently with desktop publishing software like Aldus PageMaker including 
                 versions of Lorem Ipsum.</p>
        </b-modal>
        <b-modal id="modal-3" title="Veiculos Pesados">
            <p class="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived 
                not only five centuries, but also the leap into electronic typesetting,
                 remaining essentially unchanged. It was popularised in the 1960s with the 
                 release of Letraset sheets containing Lorem Ipsum passages, and more 
                 recently with desktop publishing software like Aldus PageMaker including 
                 versions of Lorem Ipsum.</p>
        </b-modal>
    </div>
</template>
<script>
export default {
    name:'CardsCategoria',
    data(){
        return{
        }
    },
    props:{
        Categoria:Text
    }
}
</script>

<style scoped>
.textBlue{
    color: #0DCAF0;
    z-index: 1;
}
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
    filter: brightness(0.5);
}
</style>