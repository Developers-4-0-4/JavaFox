<template>
    <div class="container-fluid border cards-background p-5 mt-5 mb-5" id="contatolink">
        <div class="row">
            <div class="col-12 text-center textBlue">
                <h1 class="textBlue">Categorias</h1>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    style=""
                    class="mb-2 card"
                >
                    <img src="../../assets/img5.jpg" class="img-fluid" alt="">
                    <h3>Ligeiro Amador</h3>
                    <b-card-text>
                    Para obter esta categoria é necessário possuir a idade mínima de 18 anos, 
                    podendo inscrever-se durante os...
                    </b-card-text>

                    <b-button href="#" v-b-modal.modal-1 variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    class="mb-2 card"
                >
                    <img src="../../assets/img4.jpg" class="img-fluid" alt="">
                    <h3>Ligeiro Profissional</h3>
                    <b-card-text>
                    
                    </b-card-text>

                    <b-button href="#" v-b-modal.modal-2 variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-4 col-xl-4">
                <b-card
                    class="mb-2 card"
                >
                    <img src="../../assets/img3.jpg" class="img-fluid" alt="">
                    <h3>Veículos Pesados</h3>
                    <b-card-text>
                    Sem limite de peso –, aos quais pode ser atrelado 
                    um reboque com peso bruto (massa máxima) até 750 kg.
                    Para obter esta categoria...
                    </b-card-text>

                    <b-button href="#" v-b-modal.modal-3 variant="primary">Saiba Mais</b-button>
                </b-card>
            </div>
        </div>
        <b-modal id="modal-1" title="Ligeiro Amador">
            <p class="my-4">Para obter esta categoria é necessário 
                possuir a idade mínima de 18 anos, podendo inscrever-se 
                durante os 6 meses antecedentes, ou seja, aos 17 anos e meio. 
                A par disso, o candidato deve residir em território nacional, 
                possuir aptidão física e psicológica, 
                e claro, obter aprovação no exame prático de condução.</p>
        </b-modal>
        <b-modal id="modal-2" title="Ligeiro Profissional">
            <p class="my-4"></p>
        </b-modal>
        <b-modal id="modal-3" title="Veiculos Pesados">
            <p class="my-4">Sem limite de peso –, aos quais pode ser atrelado 
                um reboque com peso bruto (massa máxima) até 750 kg.
            Para obter esta categoria, através de inscrição numa Escola 
            de Condução, é necessário que o candidato seja titular da categoria
             B (carta de ligeiros), residir em território nacional, 
            não estar a cumprir proibição ou inibição de conduzir, 
            ter aptidão física, mental e psicológica, ter 21 anos de
             idade (ou 18 anos no caso de possuir a Carta de Qualificação 
             de Motorista – CQM – obtida através de frequência na formação 
             CAM 280h, com aproveitamento).
            No que se refere às aulas teóricas de técnica automóvel (mecânica), 
            estas são presenciais e o candidato deve frequentar, pelo menos, 21
             aulas – matéria específica –, e posteriormente, realizar o exame 
             teórico de mecânica.</p>
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
.card{
    max-width: 100%;
    height: 425px; 
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