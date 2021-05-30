<template>
    <div class="container-fluid Login">
       <div class="row ">
           <div class="col-12">
               <div  class="login">
                <b-row class="justify-content-md-center">
                    <b-col class="ml-4" cols="12" md="12">
                    <div class="ml-4 d-flex justify-content-center" >
                        <router-link class="d-flex justify-content-center" to="/"
                        ><b-img
                            id="img" class="img ml-4 img-fluid"
                            :src="require('../assets/logo.jpg')"
                            fluid
                            alt="Responsive image"
                            >
                            </b-img>
                      </router-link>
                    </div>
                    </b-col>

                    <b-col cols="12" md="12">
                    <p>
                        Não possui uma conta?
                        <router-link class="link" to="/cadastrar"
                        >Criar conta</router-link
                        >
                    </p>
                    </b-col>

                    <form  class="col-12">
                    <div class="row">
                        <b-col cols="12" md="12">
                            <div class="texto">
                            <b-icon class="icones" icon="envelope-fill"></b-icon>
                            <input
                                v-model="email"
                                class="texto"
                                type="email"
                                placeholder="Email"
                                size="md"
                                required
                            />
                            </div>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="texto">
                            <b-icon class="icones" icon="lock-fill"></b-icon>
                            <input
                                v-model="senha"
                                type="password"
                                class="texto"
                                placeholder="Senha"
                                size="md"
                                required
                            />
                            </div>
                        </b-col>

                        <b-col cols="12" md="auto">
                            <p>
                            <b-form-checkbox :state="checkbox" v-model="concordo">
                                Mantenha-se conectado
                                <router-link class="link" to="/"
                                >Esqueci a senha</router-link
                                ></b-form-checkbox
                            >
                            </p>
                        </b-col>

                        <b-col cols="12" md="12">
                            <button type="button" class="btn btn-primary btn-lg btn-block"
                             @click="getValidation()">Login</button>
                        </b-col>
                    </div>
                    </form>
                </b-row>
                </div> 
           </div>
       </div>
    </div>    
</template>
<script>
export default {
    name:'Login',
    data() {
    return {
      email: '',
      senha: '',
      concordo: false,
      backgroundimg: require('@/assets/img6.jpg'),
    }
  },
  methods:{
    getValidation: function(){
      if(this.email=="josiaalmeida@gmail.com"
      ||this.email=="josewilmy@gmail.com"
      ||this.email=="julianasoba@gmail.com"
      ||this.email=="ibranofox@gmail.com" && this.senha=="admin"){
        document.location.href = 'https://javafoxbackoffice.web.app/#/dashboard'
      }
      else{
        alert("Dados Incorretos")
      }
    }
  }
}
</script>
<style scoped>
.img{
    width: 20%;
}
.Login {
 position: relative;
 height: 100vh;
 width: 100vw;
}
.Login::before{
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('../assets/img6.jpg')no-repeat center center ;
    background-size: cover;
    z-index: -1;
    filter: brightness(0.5);
}
.login {
  width: 390px;
  background: rgba(37, 35, 35, 0.8) !important;
  margin: 60px auto;
  padding: 15px;
  box-shadow: 1px 2px 7px rgb(32, 25, 25);
}
.texto {
  margin: 10px auto;
}
.btn {
  color: rgb(255, 255, 255);
  border-radius: 10px;
  background-color: #0DCAF0;
  width: 100%;
}
.btn:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  border-radius: 10px;
}
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #744e07;
  border: none;
}
.icones {
  color: #0DCAF0;
  font-size: 25px;
  margin-right: 10px;
}
.link {
  color: #0DCAF0 !important;
}
input {
  background: transparent;
  border: 0;
  color: #f2f2f2;
  font-size: 18px;
  outline: none !important;
  width: 85%;
  border-bottom: 1px solid rgb(248, 246, 246);
}
p {
  margin-top: 10px;
  margin-left: 7px;
  color: #ffffff;
}
@media only screen and (max-width: 650px) {
  .Login {
    position: relative;
    /* height: 130vh;
    width: 130vw; */
  }
  .login {
  width: 300px;
  background: rgba(37, 35, 35, 0.8) !important;
  margin: 60px auto;
  padding: 15px;
  box-shadow: 1px 2px 7px rgb(32, 25, 25);
}
}
@media only screen and (max-width: 280px) {
  .Login {
    position: relative;
    height: 110vh;
    width: 110vw;
  }
  .login {
  width: 280px;
  background: rgba(37, 35, 35, 0.8) !important;
  margin: auto;
  padding: 15px;
  box-shadow: 1px 2px 7px rgb(32, 25, 25);
}
}
</style>