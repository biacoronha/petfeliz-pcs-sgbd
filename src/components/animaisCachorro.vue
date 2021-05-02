<template>
    <div id="listaAnimais">
           <br>
          <ul class="collection with-header">
             <li class="collection-header"><h4>Cachorros Registrados</h4> 
             <router-link to="/listaAnimais" class="waves-effect waves-light btn-small"
                  style="margin-right: 10px">Todos</router-link>
             <router-link to="/animaisCachorro" class="waves-effect waves-light btn-small disabled"
                  style="margin-right: 10px">Cachorros</router-link> <router-link to="/animaisGato" 
                  class="waves-effect waves-light btn-small" style="margin-right:10px">Gatos</router-link>
                  <router-link to="/animaisOutro" 
                  class="waves-effect waves-light btn-small" >Outros</router-link>
            <li v-for="animal in animal"
            v-bind:key="animal.id" class="collection-item">
            {{animal.nome_animal}}
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
                    const tipo_animal = "Cachorro"
                    const response = Api().get(`/animal/byTipo/${id_abrigo}/${tipo_animal}`);
                    response.then((valueAnimal)=>{
                        valueAnimal.data.forEach(element => {
                            this.animal.push(element)
                        });                        
                    })
                    return this.animal;
                }
            })

        },
    

}
</script>

<style scoped>

</style>