<template>
    <footer class="container-fluid footer text-white">
        <div class="row p-3">
            <div class="col-12 d-flex justify-content-center">
                <h4 class="p-3">
                    <b-iconstack font-scale="1" >
                        <b-icon stacked icon="telephone-fill" scale="1" variant="light"></b-icon>
                    </b-iconstack>Contactos
                </h4>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                <p class="TextRed">Para Obter Mais Informações Contacte-nos À Partir Das Seguintes Redes:</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-12 col-xl-3">
                                +244 923 404 404
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-xl-3">
                                +244 912 404 404
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12 col-xl-3">
                                <b-iconstack font-scale="3" class="">
                                    <b-icon stacked icon="square-fill" variant="success"></b-icon>
                                    <b-icon stacked icon="telephone" scale="0.5" variant="white"></b-icon>
                                </b-iconstack>
                            </div>
                            <div class="col-12"><p><strong>javafox-b9b46.web.app</strong></p></div>
                            <div class="col-12"><p> <b>Email:</b> javafor@hotmail.com </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style scoped>
.TextRed{
    color: #0DCAF0;
}
.footer{
    position: relative;
}
.footer::before{
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: url("../../assets/footer.jpg")no-repeat center center;
    background-size: cover;
    filter: brightness(0.4);
}
</style>