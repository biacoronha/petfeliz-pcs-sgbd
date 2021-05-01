<template>
  <div id="verEvento">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{nome}}</h4>
      </li>
      <li class="collection-item">Nome do Evento: {{nome}}</li>
      <li class="collection-item">Descrição do Evento: {{descricao}}</li>
      <li class="collection-item">Local do Evento: {{local}}</li>
      <li class="collection-item">Data de realização do Evento: {{data}}</li>
      <li class="collection-item">Horário de início do Evento: {{horario}}</li>
      <li class="collection-item">Tipo do Evento: {{tipo}} </li>
      <li class="collection-item">Latitude do local do Evento: {{lat}} </li>
      <li class="collection-item">Longitude do local do Evento: {{long}} </li>
      <li class="collection-item">Evento Realizador: {{abrigoRealizador}}<br><br>
      <router-link v-bind:to="{name: 'verAbrigo', params:{id_abrigo:id_abrigo}}" class="btn blue"> Página do Abrigo Realizador </router-link> <br> <br>

      <li class="collection-item"> <button class="btn red" @click="desconfirmarPresenca" v-if="usuarioEstaConfirmado"> Cancelar Confirmação </button>
        <button v-else class="btn green" @click="confirmarPresenca"> Confirmar Presença </button>
      </li>
	  <li class="collection-item" v-if="media>=0 && media<0.5">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text" > star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                 <li class="collection-item" v-else-if="media>=0.5 && media<1">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star_half </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=1 && media<1.5">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=1.5 && media<2">                
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_half </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=2 && media<2.5">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=2.5 && media<3">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_half </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=3 && media<3.5">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_border </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=3.5 && media<4">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_half </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=4 && media<4.5">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_border </i></li>

                <li class="collection-item" v-else-if="media>=4.5 && media<5">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star_half </i></li>

                <li class="collection-item" v-else-if="media>=5">
                <p>Nota do Evento:</p>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i>
                <i class="small material-icons yellow-text"> star </i></li>

                <li v-if="!voted && usuarioEstaConfirmado" class="collection-item">                 
                <h4> Avalie o Evento! </h4>               
                <button class="red waves-effect waves-light btn-large" style="margin:10px" @click="avaliarEvento(1)">
                    <i class="large material-icons"> star </i></button>
                <button class="btn-large orange" style="margin:10px" @click="avaliarEvento(2)"> 
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large yellow" style="margin:10px" @click="avaliarEvento(3)"> 
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large blue" style="margin:10px" @click="avaliarEvento(4)">
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large green" style="margin:10px" @click="avaliarEvento(5)">
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                </li>
                <li class="collection-item" v-else-if="voted && usuarioEstaConfirmado">
                    <h4> Obrigado pelo voto! </h4>
                    <button class="btn-large orange disabled" style="margin:10px" @click="avaliarEvento(1)">
                    <i class="large material-icons"> star </i></button>
                <button class="btn-large orange disabled" style="margin:10px" @click="avaliarEvento(2)"> 
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large blue disabled" style="margin:10px" @click="avaliarEvento(3)"> 
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large green disabled" style="margin:10px" @click="avaliarEvento(4)">
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                <button class="btn-large green disabled" style="margin:10px" @click="avaliarEvento(5)">
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i>
                    <i class="small material-icons"> star </i></button>
                </li>

      


    </ul>

  <ul class="collapsible">
    <li >
      <div class="collapsible-header"><i class="material-icons">account_circle</i>Visualizar Usuários Confirmados: {{confirmados.lenght}}</div>
      <div v-for="confirmado in confirmados"
                    v-bind:key="confirmado.id" class="collapsible-body"><span>{{confirmado.emailConfirmado}}</span></div>
    </li>
  </ul>
    
    <router-link to="../listaEventos" class="btn grey" style = "margin-right: 10px">Voltar</router-link>
    <button v-if="usuarioDono" @click="deletarEvento" class="btn red">Excluir Evento</button>


    <div v-if="usuarioDono" class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'editarEvento', params:{id_abrigo:id_abrigo}}"
        class="btn-floating btn-large blue"
      >
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>

     <div id= "mapaEventos">
            <ul class="collection with-header">
            <li class="collection-header"><h4>Localização do Evento</h4></li>
            <GmapMap
                :center="getPosition()"
                :zoom="17"
                mapTypeId: google.maps.MapTypeId.ROADMAP
                style="width: 1500px; height: 600px"
            >
                <GmapMarker
                    
                    :position="getPosition()"
                    :clickable="true"
                    :draggable="false"
                    @click="center=m.point"
                />
            </GmapMap>
            </ul>
        </div>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "./firebaseInit"
import Api from '../Api';


var user

 $(document).ready(function(){
    $('.collapsible').collapsible();
  });

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

var usuarioLogado

var lat
var long
var coords

export default {
  name: "verEvento",
  data() {
    return {
      id_evento: null,
      id_abrigo: null,
      abrigoRealizador: null,
      nome: null,
      descricao: null,
      local: null,
      data:null,
      horario:null,
      tipo: null,
      confirmados: [],
      usuarioEstaConfirmado: false,
      usuarioDono: false,
      lat: null,
	  long: null,
	  media: 0,
    countAvaliacoes: null,
    voted:null
	  
    };
  },
  beforeRouteEnter(to, from, next) {
    var user = firebase.auth().currentUser
    if(user){
      const id_evento = to.params.id_evento;
      const responseEvento = Api().get(`/evento/${id_evento}`);
      responseEvento.then((value) => {
        next(vm => {
          const evento = value.data;
            vm.id_abrigo = evento.id_abrigo;
            //vm.abrigoRealizador = evento.abrigoRealizador;
            vm.nome = evento.nome_evento;
            vm.descricao = evento.descricao_evento;
            vm.local = evento.local_nome;
            vm.data = evento.data_evento;
            vm.horario = evento.horario_evento;
            vm.tipo = evento.tipo_evento;
            vm.lat = evento.local_lat;
            vm.long = evento.local_long;
            vm.media = evento.nota_media;
            vm.id_evento = id_evento;

            if(vm.id_abrigo == user.uid){
              vm.usuarioDono = true;
            }

        });
      });
    }  
  },
  watch: {
    $route: "fetchData"
  },
  created(){
    
    $(document).ready(function(){
    $('.collapsible').collapsible();
    //this.fetchData();
  });

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });
    firebase.auth().onAuthStateChanged((user) => {
      
        console.log(this.nome)
      if(user){
        var id_usuario = firebase.auth().currentUser.uid
            const id_evento = this.id_evento;
            const responseConfirmacaoEvento = Api().get(`/confirmacaoEvento/${id_evento}`);
            responseConfirmacaoEvento.then((value) => {
              value.data.forEach(usuario => {
                var id_usuario = usuario.id_usuario;
                const responseUsuario = Api().get(`/usuario/${id_usuario}`);
                responseUsuario.then((valueUsuario)=>{
                  this.confirmados.push(valueUsuario.data)
                  if(valueUsuario.data.id_usuario == id_usuario){
                    this.usuarioEstaConfirmado = true;
                  }
                })
              });
              return this.animal;
            });                
          
        const responseVoto = Api().get(`/votoEvento/${id_usuario}`);
        responseVoto.then(value => {
            console.log("Usuario Já Votou")
            this.voted = true;
        })            
      }
    })
  },

  methods: {
    fetchData() {
      var user = firebase.auth().currentUser
      if(user){
          const id_evento = this.$route.params.id_evento;
          const responseEvento = Api().get(`/abrigo/${id_evento}`);
          responseEvento.then((value) => {
            this.id_abrigo = value.id_abrigo;
            this.abrigoRealizador = value.abrigoRealizador;
            this.nome = value.nome;
            this.descricao = value.descricao;
            this.local = value.local;
            this.data = value.data;
            this.horario = value.horario;
            this.tipo = evento.tipo_evento;
            this.lat = value.lat;
            this.long = value.long;
            this.media = value.media;
            this.id_evento = id_evento
      });
    }
    },

    getPosition: function(){
      return {
        lat: parseFloat(this.lat),
        lng: parseFloat(this.long)
      }
	},

	avaliarEvento: async function(nota){
        var usuarioLogado = firebase.auth().currentUser
        var id_usuario = usuarioLogado.uid
        var id_evento = this.id_evento
        var votoEvento = {
            id_usuario: id_usuario,
            id_evento: id_evento,
            nota: nota
        }
        const responseVotoEvento = await Api().post('/votoEvento', votoEvento); 
        const responseMedia = await Api().get(`/votoEvento/media/${id_evento}`); 
        this.media = responseMedia.data.media
        var evento = {
          nome_evento: this.nome,
          data_evento: this.data,
          descricao_evento: this.descricao,
          local_nome: this.local,
          local_lat: this.lat,
          local_long: this.long,
          tipo_evento: this.tipo,
          nota_media: this.media,
          id_abrigo: this.id_abrigo
        };
        const responseEvento = await Api().put(`/evento/${id_evento}`, evento); 

        var votoEventoLog = {
                idUsuario: usuarioLogado.uid,
                nomeUsuario: usuarioLogado.displayName,
                idEvento: id_evento,
                nomeAbrigo: this.nome,
                nota: nota,
            }
            const responseLog = await Api().post('/votoEventoLog', votoEventoLog)

          this.$router.push("../listaEventos");

        return this.media;

	},

    confirmarPresenca: async function(){
        if(confirm("Deseja confirmar presença?")){
          usuarioLogado = firebase.auth().currentUser
          
          if(usuarioLogado){
            var confirmacao_evento = {
              id_usuario: firebase.auth().currentUser.uid,
              id_evento: this.$route.params.id_evento
            };

            const responseConfirmacaoEvento = await Api().post('/confirmacaoEvento', confirmacao_evento);
            this.$router.push("../listaEventos")
            }

         }
    },

    desconfirmarPresenca: async function(){
      if(confirm("Deseja confirmar presença?")){
          usuarioLogado = firebase.auth().currentUser          
          if(usuarioLogado){
             var id_usuario = firebase.auth().currentUser.uid;
             var id_evento = this.$route.params.id_evento;            

            const responseDesconfirmacaoEvento = await Api().delete(`/confirmacaoEvento/${id_usuario}/${id_evento}`);
            this.$router.push("../listaEventos")
          }
         }
    },

    deletarEvento: async function() {
      var user = firebase.auth().currentUser
      if(user){
      if (confirm("Tem certeza que deseja deletar esse evento?")) {
        const id_evento = this.$route.params.id_evento;
        const responseEvento = await Api().delete(`/evento/${id_evento}`);
         this.$router.push("../listaEventos");
      }
    }
    }
  }
};
</script>

<style scoped>
</style>