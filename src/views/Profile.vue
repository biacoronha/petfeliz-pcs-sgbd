<template>
  <div class="profile">
      <div id="profileUser">          
          <h1>Perfil do Usuário</h1>
         <div class="center-align">
             <br><br>
          <button class="btn waves-effect waves-light red" @click="deleteUser">Deletar Usuário</button>
      </div>
      </div>
  </div>
</template>


<script>
    import firebase from 'firebase'
    import db from '../components/firebaseInit'   // importando o db para ter acesso a instanciação no campo "abrigo"
    import Navbar from '@/components/Navbar'
    import Api from '../Api';

    export default {
        name:'profile',
        components: {
        },
        methods:{
            deleteUser(){
                 if(confirm('Tem certeza?')){
                var user = firebase.auth().currentUser;
                var userEmail = firebase.auth().currentUser.email;
                var id_usuario = user.uid;
                db.collection('usuario').doc(user.uid).delete().then((user) =>{
                    const responseUsuario = Api().delete(`/usuario/${id_usuario}`);
                    responseUsuario.then((userDeleted) =>{
                        alert(`A conta de ${userEmail} foi excluída!`);
                        this.$router.replace('login')
                        location.reload();

                    })
                }).catch(function(error) {

                });
            }
            }

        }
    }
</script>