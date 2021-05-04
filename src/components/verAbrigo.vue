<template>
    <div id="verAbrigo">
        <ul class="collection with-header">
        <li class="collection-header">
            <h4>{{nome}}</h4>
        </li>
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

                <li v-if="!voted && !usuarioAbrigo" class="collection-item">                 
                <h4> Avalie o Abrigo! </h4>               
                <button class="red waves-effect waves-light btn-large" style="margin:10px" @click="avaliarAbrigo(1)">
                    <i class="large material-icons"> star </i></button>
                <button class="btn-large orange" style="margin:10px" @click="avaliarAbrigo(2)"> 
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large yellow" style="margin:10px" @click="avaliarAbrigo(3)"> 
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large blue" style="margin:10px" @click="avaliarAbrigo(4)">
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large green" style="margin:10px" @click="avaliarAbrigo(5)">
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                </li>
                <li class="collection-item" v-else-if="!usuarioAbrigo">
                    <h4> Obrigado pelo voto! </h4>
                    <button class="btn-large orange disabled" style="margin:10px" @click="avaliarAbrigo(1)">
                    <i class="large material-icons"> star </i></button>
                <button class="btn-large orange disabled" style="margin:10px" @click="avaliarAbrigo(2)"> 
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large blue disabled" style="margin:10px" @click="avaliarAbrigo(3)"> 
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large green disabled" style="margin:10px" @click="avaliarAbrigo(4)">
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large green disabled" style="margin:10px" @click="avaliarAbrigo(5)">
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                </li>
                
            </ul>
            <div class="center-align">
            <br>
            <button @click="seguirAbrigo" class="btn blue" id="btn_seguir" :disabled="usuarioAbrigo">Seguir Abrigo</button><br><br>
            <button @click="deixarSeguir" class="btn red" id="btn_seguir_red" disabled="true">Deixar de Seguir</button>
            <br> <br>
            </div>
        
        </div>
</template>


<script>
    import firebase from 'firebase'
    import db from '../components/firebaseInit'
    import Navbar from '@/components/Navbar'
    import Api from '../Api';

    var treco = firebase.auth().currentUser

    $(document).ready(function(){
    $('select').formSelect();
  });

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
            countAvaliacoes: null,
            id_abrigo: null,
            usuarioAbrigo: false,
            voted:null
           };
        },

        

 beforeRouteEnter(to, from, next) {
    var user = firebase.auth().currentUser
    if(user){
      const id_abrigo = to.params.id_abrigo;
      const responseAbrigo = Api().get(`/abrigo/${id_abrigo}`);
      responseAbrigo.then((value) => {
        next(vm => {
          const abrigo = value.data;
          vm.id_abrigo = id_abrigo
          vm.nome = abrigo.nome_abrigo
          vm.email = abrigo.email_abrigo
          vm.telefone = abrigo.telefone_abrigo
          vm.endereco = abrigo.endereco_abrigo
          vm.media = abrigo.nota_media
        });
      });
    }        
  },

watch: {
    $route: "fetchData"
    
},

created() {
    $(document).ready(function(){
$('select').formSelect();
});
    
firebase.auth().onAuthStateChanged((user) => {

    var btnSeguir = document.getElementById("btn_seguir");
    var btnDeixarSeguir = document.getElementById("btn_seguir_red")
    const id_usuario = firebase.auth().currentUser.uid;
    const responseSeguidor = Api().get(`/seguidor/${id_usuario}/${this.id_abrigo}`);
    responseSeguidor.then(value => {
        this.seguiu = true;
        btnSeguir.disabled = true;    
        btnDeixarSeguir.disabled = false;    
    })
    console.log(this.nome)

    if(user){
        const responseVoto = Api().get(`/votoAbrigo/${id_usuario}/${this.$route.params.id_abrigo}`);
        responseVoto.then(value => {
            console.log("Usuario Já Votou")
            this.voted = true;
        });
        const responseAbrigo = Api().get(`/abrigo/${user.uid}`)
        responseAbrigo.then(value => {
            if(value.data){
              this.usuarioAbrigo = true;
            }
        })            
    }
})


},

    methods:{
        fetchData() {
            var user = firebase.auth().currentUser
            if(user){
                const id_abrigo = this.$route.params.id_abrigo;
                const responseAbrigo = Api().get(`/abrigo/${id_abrigo}`);
                responseAbrigo.then((value) => {
                const abrigo = value.data;
                this.id_abrigo = id_abrigo
                this.nome = abrigo.nome_abrigo
                this.email = abrigo.email_abrigo
                this.telefone = abrigo.telefone_abrigo
                this.endereco = abrigo.endereco_abrigo
                this.media = abrigo.nota_media
            });
         }
},

        seguirAbrigo: async function(){
            if(confirm("Deseja seguir esse Abrigo?")){
            var usuarioLogado = firebase.auth().currentUser
            var seguidor = {
                id_usuario: usuarioLogado.uid,
                id_abrigo: this.id_abrigo
            }
            const responseSeguidor = await Api().post('/seguidor', seguidor);
            var seguidorLog = {
                idUsuario: usuarioLogado.uid,
                nomeUsuario: usuarioLogado.displayName,
                idAbrigo: this.id_abrigo,
                nomeAbrigo: this.nome,
                operacao: "Seguir",
            }
            const responseLog = await Api().post('/seguidorLog', seguidorLog)
            this.$router.push("../listaEventos")
            this.seguiu = true;            
            }
        },
        deixarSeguir: async function(){
            if(confirm("Deseja deixar de seguir esse Abrigo?")){
            var usuarioLogado = firebase.auth().currentUser
               var id_usuario = usuarioLogado.uid
               var id_abrigo = this.id_abrigo
            const responseSeguidor = await Api().delete(`/seguidor/${id_usuario}/${id_abrigo}`);
            var seguidorLog = {
                idUsuario: usuarioLogado.uid,
                nomeUsuario: usuarioLogado.displayName,
                idAbrigo: this.id_abrigo,
                nomeAbrigo: this.nome,
                operacao: "Deixar de Seguir",
            }
            const responseLog = await Api().post('/seguidorLog', seguidorLog)            
            this.seguiu = false;
            this.$router.push("../listaEventos")
            }
        },        

        avaliarAbrigo: async function(nota){
            var usuarioLogado = firebase.auth().currentUser
            var id_usuario = usuarioLogado.uid
            var id_abrigo = this.id_abrigo
            var votoAbrigo = {
                id_usuario: id_usuario,
                id_abrigo: id_abrigo,
                nota: nota
            }
            const responseVotoAbrigo = await Api().post('/votoAbrigo', votoAbrigo); 
            const responseMedia = await Api().get(`/votoAbrigo/media/${id_abrigo}`); 
            this.media = responseMedia.data.media
            var abrigo = {
                nome_abrigo: this.nome,
                email_abrigo: this.email,
                telefone_abrigo: this.telefone,
                endereco_abrigo: this.endereco,
                nota_media: this.media
                };
            const responseAbrigo = await Api().put(`/abrigo/${id_abrigo}`, abrigo); 
            
            var votoAbrigoLog = {
                idUsuario: usuarioLogado.uid,
                nomeUsuario: usuarioLogado.displayName,
                idAbrigo: this.id_abrigo,
                nomeAbrigo: this.nome,
                nota: nota,
            }
            const responseLog = await Api().post('/votoAbrigoLog', votoAbrigoLog)

            this.$router.push("../listaEventos")
            
            return this.media;
        },
    }
    }
</script>