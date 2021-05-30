<template>
  <div class="Login logn container-fluid">
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
                        Possui uma conta?
                        <router-link class="link" to="/Login"
                        >Logar</router-link
                        >
                    </p>
                    </b-col>

                    <form v-on:submit="Validacao">
                        <b-col cols="12" md="12">
                            <div class="campoTexto">
                            <b-icon class="icones" icon="person-fill"></b-icon>
                            <input
                                v-model="newUser.nome"
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
                                v-model="newUser.email"
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
                                v-model="newUser.telefone"
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
                                v-model="newUser.senha"
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
                            <b-form-checkbox :state="checkbox" v-model="aceitar" >
                                Aceitar os termos de uso de privacidade</b-form-checkbox
                            >
                            </p>
                        </b-col>

                        <b-col cols="11" md="11">
                            <button v-b-modal.modal-1
                            type="button"
                            size="md"
                            @click="Validacao"
                            class="mb-3 btn"
                            >
                            {{inscrever == false ? "Formas de Pagamento":"Inscrever-se"}}
                            </button>
                        </b-col>
                    </form>
                </b-row>
              </div> 
           </div>
       </div>
       <div v-show="aceitar" >
        <b-modal 
          id="modal-1" 
          title="Categoria E Formas De Pagamento"
          ref="my-modal" 
          class="modalcolor" 
          hide-footer
          :header-bg-variant="headerBgVariant"
          :header-text-variant="headerTextVariant"
          :body-bg-variant="bodyBgVariant"
          :body-text-variant="bodyTextVariant"
          :footer-bg-variant="footerBgVariant"
          :footer-text-variant="footerTextVariant"
          >
          <div class="col-12 ml-3">
            <div id="campoTexto">
              <b-icon class="icones" icon="card-checklist"></b-icon>
              <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
            </div>
          </div>
          <div class="col-12 ml-3">
            <div id="campoTexto">
              <b-icon class="icones" icon="calendar"></b-icon>
              <input
                  v-model="newUser.dataNascimento"
                  type="number"
                  class="texto data"
                  size="md"
                  placeholder="Idade"
                  required
              />
            </div>
          </div>
          <div class="col-12 ml-3">
            <div id="campoTexto">
              <b-icon class="icones" icon="credit-card2-back-fill"></b-icon>
              <b-form-select v-model="selected2" :options="pagamento" size="sm" class="mt-3"></b-form-select>
            </div>
          </div>
          <b-button class="mt-3" variant="outline-danger" block @click="Validacao">Concluir</b-button>
          <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Cancelar</b-button>
        </b-modal>
      </div>
      <b-alert
        v-model="append"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="danger"
        dismissible
      >
        Dados Vazios
      </b-alert>
      <b-alert
        v-model="idade"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="danger"
        dismissible
      >
        Falha no preenchimento de dados
      </b-alert>
      <b-alert
        v-model="idadeAvancada"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="danger"
        dismissible
      >
        Falha, Idade Avançada
      </b-alert>
      <b-alert
        v-model="inscrito"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="danger"
        dismissible
      >
        Inscrição Concluida
      </b-alert>
    </div>    
</template>
<script>
export default {
    name:'cadastrar',
    data() {
    return {
      newUser:{
        nome: '',
        email: '',
        telefone: 0,
        senha: '',
        dataNascimento:0,
      },
      append:false,
      idade:false,
      confirmSenha: '',
      aceitar: false,
      senhaIncorreta: false,
      inscrever:false,
      options: [
          { value: null, text: 'Ligeiro Amador' },
          { value: 'a', text: 'Ligeiro Profissional' },
          { value: 'b', text: 'Pesado Profissional' }
        ],
      selected: null,
      selected2:null,
      pagamento:[
        {
          value:null, text: "Multicaixa Express"
        },
        {
          value:'a', text: "Trasferencia De Crédito"
        },
        {
          value:'b', text: "Dinheiro(No Momento Das Aulas)"
        }
      ],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'dark',
      bodyTextVariant: 'light',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark',
      idadeAvancada:false,
      inscrito:false
    }
  },
  computed: {
    checkbox() {
      return Boolean(this.aceitar)
    },
  },
  methods: {
    // showModal() {
    //     this.$refs['my-modal'].show()
    //   },
      hideModal() {
      },
      toggleModal() {
        this.inscrever=false
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
    BotaoCliente: function () {
      return (this.fornecedor = false)
    },
    BotaoFornecedor: function () {
      return (this.fornecedor = true)
    },
    Validacao: function () {
      if (
        this.newUser.nome.length < 4 ||
        this.newUser.senha.length < 4 ||
        this.newUser.telefone == ''
      ) {
        this.append=true
        this.$refs['my-modal'].toggle('#toggle-btn')
      } else if (this.newUser.senha != this.confirmSenha) {
        this.senhaIncorreta = true
      }
      else if(
        this.newUser.nome.length >= 4 ||
        this.newUser.senha.length >= 4 ||
        this.newUser.telefone != ''){
          this.aceitar = false
        }
        if(this.newUser.dataNascimento>=18 && this.selected==null){
          this.inscrever = true
          this.$refs['my-modal'].hide()
          document.location.href = 'https://javafoxbackoffice.web.app/#/dashboard'
        }
        else if(this.newUser.dataNascimento>=18 && this.newUser.dataNascimento<=22 && this.selected=='a'){
          this.idade=true
        }
        else if(this.newUser.dataNascimento>=18 && this.newUser.dataNascimento<=25 && this.selected=='b'){
          this.idade=true
        }
        else if(this.newUser.dataNascimento>45 && this.selected=='b'){
          this.idadeAvancada=true
        }
        else if(this.newUser.dataNascimento<18)
          this.idade=true
        else{
          this.$refs['my-modal'].hide()
          this.inscrito=true
          document.location.href = 'https://javafoxbackoffice.web.app/#/dashboard'
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
.modalcolor{
  background: rgba(37, 35, 35, 0.8) !important;
}
.login {
  width: 390px;
  margin-top: -5px;
  background: rgba(37, 35, 35, 0.8) !important;
  margin: auto;
  padding: 15px;
  box-shadow: 1px 2px 7px rgb(32, 25, 25);
}
.data{
  color: rgb(255, 250, 250) !important;
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
  background-color: rgb(7, 7, 6);
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