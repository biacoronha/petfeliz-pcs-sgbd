<template>
    <div id="listaEventos">         
           <br>
                      
         <ul class="collection with-header">
             <li class="collection-header">
                 <h4>Todos os Eventos</h4> 
                 <router-link to="/listaEventos" class="waves-effect waves-light btn-small disabled"
                  style="margin-right: 10px">Todos</router-link>
             <router-link to="/filtroAdocao" class="waves-effect waves-light btn-small"
                  style="margin-right: 10px">Adoção</router-link> <router-link to="/filtroRecolhimento" 
                  class="waves-effect waves-light btn-small">Recolhimento
                  </router-link>
             <li v-for="evento in eventos"
             v-bind:key="evento.id_evento" class="collection-item">
             {{evento.nome_evento}}

             <router-link class="secondary-content" v-bind:to="{name: 'verEvento', params:{id_evento: evento.id_evento}}">
                 <i class="fa fa-eye"></i>
             </router-link>
             </li>
        </ul>
     
        <div v-if="abrigoEstaLogado" class="fixed-action-btn">
            <router-link to="/new" class = "btn-floating btn-large red">
            <i class="fa fa-plus"></i>
            </router-link>
        </div>

      
    </div>
</template>

<script>
    import firebase from 'firebase'
    import Navbar from './Navbar'
    import db from './firebaseInit'
import Api from '../Api'

export default{
    name: "listaEventos",
        data() {
            return {
                abrigoEstaLogado: false,
                eventos: []
            }
        },
        created(){
            var user = firebase.auth().currentUser

            const responseAbrigo = Api().get(`/abrigo/${user.uid}`);
            responseAbrigo.then(value => {
                this.abrigoEstaLogado = true;
            })


            const responseEvento = Api().get(`/evento/`);
            responseEvento.then(value => {
                value.data.forEach(evento => {
                     this.eventos.push(evento)
                });
            })
        },
    

}
</script>

<style scoped>

</style>
