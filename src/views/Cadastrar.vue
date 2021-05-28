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
        <b-modal id="modal-1" title="Categoria E Formas De Pagamento" ref="my-modal" hide-footer>
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
                  v-model="dataNascimento"
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
              <b-form-select v-model="selected" :options="pagamento" size="sm" class="mt-3"></b-form-select>
            </div>
          </div>
          <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Concluir</b-button>
          <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Cancelar</b-button>
        </b-modal>
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
      dataNascimento:'',
      aceitar: false,
      senhaIncorreta: false,
      fornecedor: false,
      inscrever:false,
      options: [
          { value: null, text: 'Ligeiro Amador' },
          { value: 'a', text: 'Ligeiro Profissional' },
          { value: 'b', text: 'Pesado Profissional' }
        ],
      selected: null,
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
      ]
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
        this.inscrever=true
        this.$refs['my-modal'].hide()
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
  margin-top: -5px;
  background: rgba(37, 35, 35, 0.8) !important;
  margin: auto;
  padding: 15px;
  box-shadow: 1px 2px 7px rgb(32, 25, 25);
}
.data{
  color: #000 !important;
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