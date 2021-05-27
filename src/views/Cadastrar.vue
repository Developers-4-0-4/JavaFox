<template>
    <div class="Login logn container-fluid">
       <div class="row ">
           <div class="col-12">
               <div  class="login">
                <b-row class="justify-content-md-center">
                    <b-col class="ml-4" cols="12" md="12">
                    <div class="ml-4 d-flex justify-content-center" >
                        <b-img
                        id="img" class="img ml-4 img-fluid"
                        :src="require('../assets/logo.jpg')"
                        fluid
                        alt="Responsive image"
                        >
                        </b-img>
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

                    <form v-on:submit="Validacao">
                        <b-col cols="12" md="12">
                            <div class="campoTexto">
                            <b-icon class="icones" icon="person-fill"></b-icon>
                            <input
                                v-model="nome"
                                class="texto"
                                type="text"
                                placeholder="Nome"
                                size="md"
                            />
                            </div>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="campoTexto">
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
                            <div id="campoTexto">
                            <b-icon class="icones" icon="telephone-fill"></b-icon>
                            <input
                                v-model="telefone"
                                type="tell"
                                class="texto"
                                placeholder="Telefone"
                                size="md"
                                required
                            />
                            </div>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div class="campoTexto">
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

                        <b-col cols="12" md="12">
                            <div id="campoTexto">
                            <b-icon class="icones" icon="lock-fill"></b-icon>
                            <input
                                v-model="confirmSenha"
                                type="password"
                                class="texto"
                                placeholder="Confirmar Senha"
                                size="md"
                                required
                            />
                            </div>
                            <small v-show="senhaIncorreta == true" class="texto"
                            >A senha é diferente</small
                            >
                        </b-col>

                        <b-col cols="12" md="auto">
                            <p>
                            <b-form-checkbox :state="checkbox" v-model="aceitar">
                                Aceitar os termos de uso de privacidade</b-form-checkbox
                            >
                            </p>
                        </b-col>

                        <b-col cols="11" md="11">
                            <button
                            type="button"
                            size="md"
                            @click="Validacao"
                            class="mb-3 btn"
                            >
                            Criar Conta
                            </button>
                        </b-col>
                    </form>
                </b-row>
                </div> 
           </div>
       </div>
    </div>    
</template>
<script>
export default {
    name:'cadastrar',
    data() {
    return {
      nome: '',
      email: '',
      telefone: '',
      senha: '',
      confirmSenha: '',
      aceitar: false,
      senhaIncorreta: false,
      fornecedor: false,
    }
  },
  computed: {
    checkbox() {
      return Boolean(this.aceitar)
    },
  },
  methods: {
    BotaoCliente: function () {
      return (this.fornecedor = false)
    },
    BotaoFornecedor: function () {
      return (this.fornecedor = true)
    },
    Validacao: function () {
      if (
        this.nome.length < 4 ||
        this.senha.length < 4 ||
        this.telefone == ''
      ) {
        this.aceitar = false
        alert('Preencha os dados corretamente')
      } else if (this.senha != this.confirmSenha) {
        this.senhaIncorreta = true
      } else {
        console.log('Dados enviados')
      }
    },
  },
}
</script>
<style scoped>
.Login{
}
.img{
    width: 20%;
}
.logn {
 position: relative;
 height: 100vh;
 width: 100vw;
}
.logn::before{
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('../assets/img6.jpg')no-repeat center center fixed ;
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
  background-color: rgb(230, 168, 0);
  width: 100%;
}
.btn:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(235, 191, 71);
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
  color: rgb(235, 191, 71);
  font-size: 25px;
  margin-right: 10px;
}
.link {
  color: rgb(235, 191, 71) !important;
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
</style>