<template>
    <div id="listaEventos">         
         <br>
          <ul class="collection with-header">
             <li class="collection-header"><h4>Eventos de Recolhimento</h4>
             <router-link to="/listaEventos" class="waves-effect waves-light btn-small"
                  style="margin-right: 10px">Todos</router-link>
             <router-link to="/filtroAdocao" class="waves-effect waves-light btn-small"
                  style="margin-right: 10px">Adoção</router-link> <router-link to="/filtroRecolhimento" 
                  class="waves-effect waves-light btn-small disabled">Recolhimento
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
    import Api from '../Api';

export default{
    name: "listaEventos",
        data() {
            return {
                usuarioEstaLogado: false,
                usuarioLogado: false,
                abrigoEstaLogado: false,
                eventos: []
            }
        },
        created(){

            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                const tipo_evento = "Recolhimento"
                    const response = Api().get(`/evento/byTipo/${tipo_evento}`);
                    response.then((valueEvento)=>{
                        valueEvento.data.forEach(element => {
                            this.eventos.push(element)
                        });
                    })
                    return this.eventos;   
                }
            })

            if(firebase.auth().currentUser){
                this.usuarioEstaLogado = true;
                this.usuarioLogado = firebase.auth().currentUser.email;
            }
            
            var usersRef = db.collection('abrigo').doc(firebase.auth().currentUser.uid)
            if(firebase.auth().currentUser){
                usersRef.get().then((docSnapshot) => {
                    if(docSnapshot.exists) {
                        usersRef.onSnapshot((doc) => {
                            this.abrigoEstaLogado = true;
                        })
                    } else {
                            this.usuarioEstaLogado = true;
                    }
                })
                this.usuarioLogado = firebase.auth().currentUser.email;
            }
        },
    

}
</script>

<style scoped>

</style>