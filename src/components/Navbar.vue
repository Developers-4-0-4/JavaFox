<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto" >
                    <b-nav-item href="#"><router-link to="/" class="link">Home</router-link></b-nav-item>
                    <b-nav-item href="#" disabled><router-link to="/" class="link">Sobre Nós</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name:'Navbar'
}
</script>

<style scoped>
.link{
    text-decoration: none;
}
</style>