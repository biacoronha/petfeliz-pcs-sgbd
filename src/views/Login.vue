<template>
    <div class = "login container center-align">
        <h3>Login</h3>
        <p>Seja bem vindo ao Portal PetFeliz!<p>
        <p> Acesse nosso portal utilizando sua conta do Google:</p> <br>

       <button class="social-button" @click="socialLogin" >
            <img alt="Google Logo" src="../assets/google-logo.png">
        </button>

        <br><br><br>

        <h4>Login de Abrigo:</h4>

        <input type="text" v-model="email" placeholder="Email" class="validate"><br>
        <input type="password" v-model="password" placeholder="Senha" class="validate"><br>
        <button class="btn waves-effect waves-light blue" @click="login" >Login
            <i class="material-icons right">send</i>
        </button>
        
        <p>Seu abrigo ainda não está cadastrado? Não se preocupe, clique no link abaixo e una-se a nossa rede!</p>
        <router-link to="/Cadastro" class="btn waves-effect waves-light green">Cadastre aqui!     
         <i class="material-icons right">edit</i></router-link>
    </div>

</template>

<script>
    import firebase from 'firebase'
    import db from '../components/firebaseInit'
    import { Script } from 'vm';
    import Api from '../Api';
    
    var usuarioLogado

    export default {
        name: "login",
        data(){
            return {
                email: '',
                password: '',
                nome: '',
                photoURL: null
            };
        },
        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user)=>{
                        this.$router.replace('home')
                        location.reload();
                    },
                    (err) => {
                        alert('Opa! '+err.message)
                    }
                );
            },

            criaUsuario(){
                usuarioLogado = firebase.auth().currentUser
                if (usuarioLogado) {
                    //User logged in already or has just logged in.
                    
                    db.collection('usuario').doc(usuarioLogado.uid).set({
                        email:usuarioLogado.email,
                        nome:usuarioLogado.displayName,
                        photoURL:usuarioLogado.photoURL
                    })
                    this.saveUsuario(usuarioLogado);
                };
            },
            

        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();
            
            firebase.auth().signInWithPopup(provider).then((result) => {

            usuarioLogado = firebase.auth().currentUser
                if (usuarioLogado) {
                    //User logged in already or has just logged in.
                    
                    db.collection('usuario').doc(usuarioLogado.uid).set({
                        email:usuarioLogado.email,
                        nome:usuarioLogado.displayName,
                        photoURL:usuarioLogado.photoURL
                    })
                    this.saveUsuario(usuarioLogado);
                }

            this.$router.replace('home');
            location.reload();
            }).catch((err) => {
            alert('Oops. ' + err.message)
            });
        },
        saveUsuario: async function(usuarioLogado) {
            var usuario = {
                id_usuario: usuarioLogado.uid,
                nome_usuario: usuarioLogado.displayName,
                email_usuario: usuarioLogado.email,
                foto_url: usuarioLogado.photoURL
            }
            const response = await Api().post('/usuario', usuario);
            return response.data;


        }
    }
  }
</script>  

<style scoped> 
  .social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    border: 0;
  }
  .social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  .social-button img {
    width: 100%;
  }
</style>