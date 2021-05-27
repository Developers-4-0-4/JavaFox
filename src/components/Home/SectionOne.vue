<template>
    <div class="container-fluid">
        
        <div class="row">
            <div class="col-12 text-center">
                <h1>JavaFox Drivers</h1>
                <h5>FORMANDO MELHORES AUTOMOBLISTAS</h5>
            </div>
            <div class="col-12 border p-4">
                <div class="row">
                    <div class="col-md-3 col-sm-12 col-xl-3 col-lg-3">
                        <b-iconstack font-scale="3" class="Card-Aligmnt">
                            <b-icon stacked icon="circle-fill" variant="info"></b-icon>
                            <b-icon stacked icon="check" scale="0.5" variant="white"></b-icon>
                        </b-iconstack>
                        <p>Professores De Qualidade</p>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xl-3 col-lg-3">
                        <b-iconstack font-scale="3" class="Card-Aligmnt">
                                <b-icon stacked icon="circle-fill" variant="info"></b-icon>
                                <b-icon stacked icon="check" scale="0.5" variant="white"></b-icon>
                            </b-iconstack>
                        <p>Os Melhores Veiculos Para Aulas Práticas e Testes</p>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xl-3 col-lg-3">
                        <b-iconstack font-scale="3" class="Card-Aligmnt">
                                <b-icon stacked icon="circle-fill" variant="info"></b-icon>
                                <b-icon stacked icon="check" scale="0.5" variant="white"></b-icon>
                            </b-iconstack>
                        <p>Aulas Práticas</p>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xl-3 col-lg-3">
                        <b-iconstack font-scale="3" class="Card-Aligmnt">
                                <b-icon stacked icon="circle-fill" variant="info"></b-icon>
                                <b-icon stacked icon="check" scale="0.5" variant="white"></b-icon>
                            </b-iconstack>
                        <p>Carteiras De Condução Certificadas</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SectionOne',
    components:{

    },
    data(){
        return{

        }
    },
    methods:{}
}
</script>

<style scoped>
.Card-Aligmnt{
    display: flex;
    float: left;
}
</style>