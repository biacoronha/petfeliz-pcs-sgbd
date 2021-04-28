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

                <li v-if="!voted" class="collection-item">                 
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
                <li class="collection-item" v-else>
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
            <button @click="seguirAbrigo" class="btn blue" id="btn_seguir" >Seguir Abrigo</button>
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
            voted:null,
            seguiu: false
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
    // db.collection("abrigo")
    //   .where("id_abrigo", "==", to.params.id)
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       next(vm => {
    //         vm.nome = doc.data().nome;
    //         vm.telefone = doc.data().telefone;
    //         vm.endereco = doc.data().endereco;
    //         vm.media = doc.data().media;
    //         vm.countAvaliacoes = doc.data().countAvaliacoes;
    //         vm.email = doc.data().email;     
    //         vm.id_abrigo = doc.data().id_abrigo
            
            

    //       });
    //     });
    //   }
      
    //   );
      
        
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
    const id_usuario = firebase.auth().currentUser.uid;
    const responseSeguidor = Api().get(`/seguidor/${id_usuario}/${this.id_abrigo}`);
    responseSeguidor.then(erro => {
        btnSeguir.disabled = true;
    })
    
    console.log(this.nome)
    if(user){
    
    db.collection("usuario").doc(firebase.auth().currentUser.uid).collection("votosAbrigo")
    .where("nomeAbrigo", "==", this.nome)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {               
        if(doc.exists){ 
        console.log("Usuario Já Votou")
            this.voted = true;
        }
    });
        
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
            this.seguiu = true;
            this.$router.push("../listaEventos")
            }
        },
        deixarSeguir: async function(){
            if(confirm("Deseja deixar de seguir esse Abrigo?")){
            var usuarioLogado = firebase.auth().currentUser
            var seguidor = {
                id_usuario: usuarioLogado.uid,
                id_abrigo: this.id_abrigo
            }
            const responseSeguidor = await Api().post('/seguidor', seguidor);
            this.seguiu = true;
            this.$router.push("../listaEventos")
            }
        },        

        avaliarAbrigo: function(nota){
            this.media = (this.media*this.countAvaliacoes+nota)/(this.countAvaliacoes+1)
            this.countAvaliacoes++;
            this.voted = true;
            
                
            db.collection('abrigo').where('email','==',this.email).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        media:this.media,
                        countAvaliacoes:this.countAvaliacoes
                    })
                })
            }) 	
            console.log(this.nome)
            db.collection("abrigo")
    .where("nome", "==", this.nome)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {    
            db.collection("usuario").doc(firebase.auth().currentUser.uid).collection("votosAbrigo").doc(doc.id).set({
            voto: nota,
            nomeAbrigo : this.nome
            });
        
    });
            })
            this.$forceUpdate();
            
            return this.media;
        },


    }
    }
</script>