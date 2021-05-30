<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" class="fixed">
            <b-navbar-brand href="#">JavaFox</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" class="m-auto text-center" is-nav>
                <b-navbar-nav class="m-auto" >
                    <b-nav-item ><router-link to="/" class="link">Home</router-link></b-nav-item>
                    <b-nav-item ><router-link to="/SobreNos" class="link">Sobre Nós</router-link></b-nav-item>
                 </b-navbar-nav>
                <b-navbar-nav class="mr-auto" >
                    <b-nav-item ><router-link to="/Login" class="link">Login</router-link></b-nav-item>
                    <b-nav-item ><router-link to="/cadastrar" class="link">Inscrever-se</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    props:{
    }
}
</script>

<style scoped>
.link{
    text-decoration: none !important;
    color:rgb(253, 253, 253);
    font-size: 20px;
}
.link:hover{
    text-decoration: none !important;
    color:rgb(12, 11, 11);
    font-size: 20px;
    
}
.text-rigth{
    text-align: right !important;
}
.fixed{
    position: fixed;
    width: 100%;
    z-index: 1;
}
</style>