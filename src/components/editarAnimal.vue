<template>
    <div id="editarAnimal">
        <h3>Editando Informações de {{nome}} <img class ="circle" width = "100" style="vertical-align:middle" :src=foto></h3>
        <div class="row">
        <form @submit.prevent="updateAnimal" class="col s12">
            
            <div class="row">
                <div class="input-field col s12">
                <input disabled type="text" v-model="id_animal" required>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="nome" required>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
            <select v-model="selected">
                <option value="" disabled selected>Escolha o Tipo</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>                
                <option value="Outro">Outro</option>
            </select>
    <label>Tipo do Animal</label>
            </div>   
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="idade" required>
                </div>    
            </div>
            <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="raca" required>
                </div>    
            </div>
            <div class="row">
                <div class="input-field col s12">
                <input type="url" v-model="foto" required>                
                </div>    
            </div>

             <router-link to="../listaAnimais" class="btn grey" style ="margin-right: 10px">Cancelar</router-link>
            <button type="submit" class="btn">Confirmar</button>           
            </form>
        </div>
    </div>
</template>

<script>
    import db from './firebaseInit'
    import firebase from'firebase'
    import Api from '../Api';

    $(document).ready(function(){
    $('select').formSelect();
  });

    export default{
    name: 'editarAnimal',
    data(){
       return {
           selected: '',
            id_animal: null,
            nome:null,
            tipo:null,
            idade:null,
            raca:null,
            foto:null,
            abrigoDono: null
        }
    },
    beforeRouteEnter(to, from, next){
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
    }    },
    watch:{
        '$route': 'fetchData'
    },

    created(){
        $(document).ready(function(){
    $('select').formSelect();
  })
    },

    methods: {
        fetchData(){
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
        updateAnimal: async function(){
            var user = firebase.auth().currentUser
            if(user){
                const id_animal = this.$route.params.id_animal;
                var animal = {
                    id_animal: this.id_animal,
                    nome_animal: this.nome,
                    tipo_animal: this.selected,
                    idade_animal: this.idade,
                    raca_animal: this.raca,
                    img_url: this.foto
                }
                const responseAnimal = await Api().put(`/animal/${id_animal}`, animal);
                this.$router.push("../listaAnimais");
                }
            }
            //var user = firebase.auth().currentUser
            // db.collection('abrigo').doc(user.uid).collection('animal').where('id_animal','==',this.$route.params.id_animal).get().then(querySnapshot => {
            // querySnapshot.forEach(doc => {
            //    doc.ref.update({
            //         id_animal: this.id_animal,
            //         nome:this.nome,
            //         tipo:this.selected,
            //         idade:this.idade,
            //         raca:this.raca,
            //         foto:this.foto,
            //         abrigoDono:  firebase.auth().currentUser.email
            //    })
            //    .then(
            //        () =>
            //        this.$router.push({name: 'verAnimal', params: {id_animal:this.id_animal}})
            //    )
            // })
            // })
    
    }
  
}
</script>

<style scoped>

</style>