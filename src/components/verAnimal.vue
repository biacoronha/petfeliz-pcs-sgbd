<template>
  <div id="verAnimal">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{nome}} <img class ="circle" width = "100" style="vertical-align:middle" :src=foto></h4>
      </li>
      <li class="collection-item">Nome do Animal: {{nome}}</li>
      <li class="collection-item">Tipo do Animal: {{tipo}}</li>
      <li class="collection-item">Idade do Animal: {{idade}}</li>
      <li class="collection-item">Raça: {{raca}}</li>
      <li class="collection-item width: 10px center-align"><img width = "400" :src=foto></li>
   
    </ul>
    <router-link to="../listaAnimais" class="btn grey" style="margin-right:10px">Back</router-link>
    <button @click="deletarAnimal" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'editarAnimal', params:{id_animal:id_animal}}"
        class="btn-floating btn-large blue"
      >
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
import firebase from 'firebase';
import Api from '../Api';

export default {
    name: "verAnimal",
    data() {
        return {
            id_animal: null,
            nome:null,
            tipo:null,
            idade:null,
            raca:null,
            foto:null,
            abrigoDono: null
        };
    },
  beforeRouteEnter(to, from, next) {
    var user = firebase.auth().currentUser
    if(user){
      const id_animal = to.params.id_animal;
      const responseAnimal = Api().get(`/animal/${id_animal}`);
      responseAnimal.then((value) => {
        next(vm => {
          const animal = value.data;
          vm.id_animal = id_animal
          vm.nome = animal.nome_animal
          vm.tipo = animal.tipo_animal
          vm.idade = animal.idade_animal
          vm.raca = animal.raca_animal
          vm.foto = animal.img_url
        });
      });
    }
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    
    fetchData() {
      var user = firebase.auth().currentUser
      if(user){
        const id_animal = this.$route.params.id_animal;
        const responseAnimal = Api().get(`/animal/${id_animal}`);
        responseAnimal.then((value) => {
          const animal = value.data;
          this.id_animal = id_animal
          this.nome = animal.nomw_animal
          this.tipo = animal.tipo_animal
          this.idade = animal.idade_animal
          this.raca = animal.raca_animal
          this.foto = animal.img_url
      });
      }
     },
    deletarAnimal: async function() {
      var user = firebase.auth().currentUser
      if(user){
      if (confirm("Tem certeza que deseja deletar esse animal?")) {
        const id_animal = this.$route.params.id_animal;
        const responseAbrigoAnimal = await Api().delete(`/abrigoAnimal/${id_animal}`);
        const responseAnimal = await Api().delete(`/animal/${id_animal}`);
         this.$router.push("../listaAnimais");
      }
    }
  }
}
};
</script>

<style scoped>
</style>