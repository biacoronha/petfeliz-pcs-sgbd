<template>
    <div class="profile">
        <div id="profileUser">          
            <h2>Perfil do Abrigo {{nome}}</h2>          
            <ul class="collection with-header">
                <li class = "collection-item">Nome do Abrigo: {{nome}}</li>
                <li class = "collection-item">Email de contato: {{email}}</li>
                <li class = "collection-item">Telefone de contato: {{telefone}}</li>
                <li class = "collection-item">Endereço: {{endereco}}</li>  

	            <li class="collection-item" v-if="media>=0 && media<0.5">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text" > star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                 <li class="collection-item" v-else-if="media>=0.5 && media<1">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star_half </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=1 && media<1.5">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=1.5 && media<2">                
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_half </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=2 && media<2.5">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=2.5 && media<3">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_half </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=3 && media<3.5">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=3.5 && media<4">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_half </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=4 && media<4.5">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=4.5 && media<5">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_half </i></li>

                <li class="collection-item" v-else-if="media>=5">
                <p>Nota do Abrigo:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i></li>

            </ul>
            <div class="center-align">
            <br>
             <router-link to ="/Seguidores" class="btn blue" style="margin: 10px"> Visualizar Seguidores </router-link>
                <button class="btn waves-effect waves-light red" @click="deleteUser">Deletar Abrigo</button>
            </div>
        
        </div>
    </div>
</template>


<script>
    import firebase from 'firebase'
    import db from '../components/firebaseInit'
    import Navbar from '@/components/Navbar'
    import Api from '../Api';
    var treco = firebase.auth().currentUser


    export default {
        name:'profile',
        data(){
           return {
            nome:null,
            email:null,
            telefone:null,
            endereco:null,
			seguidores: [],
            media: 0,
	  		countAvaliacoes: null
           };
        },



      created(){
      var user = firebase.auth().currentUser
      const id_abrigo = user.uid;
      const responseAbrigo = Api().get(`/abrigo/${id_abrigo}`);
      responseAbrigo.then((value) => {
          this.nome = value.data.nome_abrigo
          this.email = value.data.email_abrigo
          this.telefone = value.data.telefone_abrigo
          this.endereco = value.data.endereco_abrigo
          this.media = value.data.nota_media
        });            
    },

        methods:{
            deleteUser: async function(){
                if(confirm('Tem certeza?')){
                var user = firebase.auth().currentUser;
                var userEmail = firebase.auth().currentUser.email;
                var id_abrigo = firebase.auth().currentUser.uid
                db.collection("abrigo")
                    .where("id_abrigo", "==", user.uid)
                    .get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                        doc.ref.delete();
                        });
                    });
                user.delete().then((user) =>{
                    const responseAbrigo = Api().delete(`/abrigo/${id_abrigo}`);
                    responseAbrigo.then((userDeleted) =>{
                        alert(`A conta de ${userEmail} foi excluída!`);
                        this.$router.replace('login')
                        location.reload();

                    })
                }).catch(function(error) {

                });
            }
            },



        }
    }
</script>