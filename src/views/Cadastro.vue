<template>
    <div class = "cadastro container center-align row">
        <h3>Cadastro de Abrigo</h3>
        <p>Complete aqui o seu cadastro!</p>
        <input type="text" v-model="email" placeholder="Email" class="validate"><br>
        <input type="password" v-model="password" placeholder="Senha" class="validate"><br><br>
        
        <div class="row">
        <form @submit.prevent="salvarAnimal" class="col s12">
            <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="nome" required>
                <label>Nome do Abrigo</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="endereco" required>
                <label>Endereço do Abrigo:</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="telefone" required>
                <label>Telefone do Abrigo:</label>  
                </div>    
            </div>
        </form>
        <button  class="btn waves-effect waves-light blue" @click="cadastro">Cadastre-se
           <i class="material-icons right">send</i> </button><br><br>
      <router-link class = "btn waves-effect waves-light red" to="/login">Voltar</router-link>
    </div>
</div>
</template>

<script>
    import firebase from 'firebase'
    import db from '../components/firebaseInit'   // importando o db para ter acesso a instanciação no campo "abrigo"
    var treco = false;
    import Api from '../Api';


    
    export default {
        name: "cadastro",
        data(){
            return {
                email: '',
                password: '',
                nome:null,
                endereco:null,
				telefone:null,
				media: 0,
                countAvaliacoes: null,
                id_abrigo:null  

            };
        },
        methods: {
            cadastro: function () {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) =>{
                     treco = firebase.auth().currentUser
                     if (treco) {
                         //User logged in already or has just logged in.
                        db.collection('abrigo').doc(treco.uid).set({
                        email:this.email,
                        nome:this.nome,
                        endereco:this.endereco,
						telefone:this.telefone,
						media: this.media,
                        countAvaliacoes: this.countAvaliacoes,
                        id_abrigo:treco.uid
                      })
                        this.saveAbrigo();
                        }
                        this.$router.push('login')
                        location.reload();

                    },
                    function (err) {
                        alert('Espere! ' + err.message)
                    }
                );
            },
            saveAbrigo: async function() {
                var uid = firebase.auth().currentUser.uid;
                var abrigo = {
                id_abrigo: uid,
                nome_abrigo: this.nome,
                email_abrigo: this.email,
                telefone_abrigo: this.telefone,
                endereco_abrigo: this.endereco
                };
                 const response = await Api().post('/abrigo', abrigo);
                 return response.data;
                    },
                    
                }
            }

</script>

<style scoped>

</style>