<template>
    <div id="listaAnimais">         
       <br>
          <ul class="collection with-header">
             <li class="collection-header"><h4>Animais Registrados</h4> 
             <router-link to="/listaAnimais" class="waves-effect waves-light btn-small disabled"
                  style="margin-right: 10px">Todos</router-link>
             <router-link to="/animaisCachorro" class="waves-effect waves-light btn-small"
                  style="margin-right: 10px">Cachorros</router-link> <router-link to="/animaisGato" 
                  class="waves-effect waves-light btn-small" style="margin-right:10px">Gatos</router-link>
                  <router-link to="/animaisOutro" 
                  class="waves-effect waves-light btn-small" >Outros</router-link>
            <li v-for="animal in animal"
            v-bind:key="animal.id" class="collection-item">
            {{animal.nome}}
            <router-link class="secondary-content" v-bind:to="{name: 'verAnimal', params:{id_animal: animal.id_animal}}">
                 <i class="fa fa-eye"></i>
             </router-link>
            </li>
        </ul>
         
        
         <div class="fixed-action-btn">
            <router-link to="/newAnimal" class = "btn-floating btn-large red">
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
    name: "listaAnimais",
        data() {
            return {
                usuarioEstaLogado: false,
                usuarioLogado: false,
                animal: []
            }
        },

       

        created(){
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                const id_abrigo = firebase.auth().currentUser.uid;
                const responseAbrigoAnimal = Api().get(`/abrigoAnimal/${id_abrigo}`);
                responseAbrigoAnimal.then((value) => {
                    value.data.forEach(animal => {
                        var id_animal = animal.id_animal;
                         const responseAnimal = Api().get(`/animal/${id_animal}`);
                         responseAnimal.then((valueAnimal)=>{
                             this.animal.push(valueAnimal.data)
                         })
                    });
                    return this.animal;
                });                
                }
            })
        },
}
</script>

<style scoped>

</style>