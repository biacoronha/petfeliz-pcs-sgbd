<template>
    <div id="novoAnimal">
        <h3>Novo Animal</h3>
        <div class="row">
        <form @submit.prevent="salvarAnimal" class="col s12">
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="id_animal" required>
                <label>ID do Animal:</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="nome" required>
                <label>Nome do Animal:</label>
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
                <input type="text" v-model="raca" required>
                <label>Raça do Animal:</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="idade" required>
                <label>Idade do Animal:</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="foto" required>
                <label>Copie o Link de uma foto desse animal:</label>
                </div>    
            </div>
             
            <router-link to="/listaAnimais" class="btn grey" style="margin-right: 10px">Cancel</router-link>
            <button type="submit" class="btn">Submit</button>           
        </form>
            
        </div>
    </div>
    
</template>

<script>
    import db from './firebaseInit'
    import firebase from 'firebase'
        import Api from '../Api';


       $(document).ready(function(){
    $('select').formSelect();
  });
    

export default{
    name: 'novoAnimal',
    data(){
        return {
            id_animal: null,
            selected: '',
            nome:null,
            tipo:null,
            idade:null,
            raca:null,
            foto:null,
            abrigoDono: null
        }
    },

    created() {
       $(document).ready(function(){
    $('select').formSelect();
  });
    },

    methods: {
        salvarAnimal: async function() {

             var animal = {
                id_animal: this.id_animal,
                nome_animal: this.nome,
                raca_animal: this.raca,
                idade_animal: this.idade,
                tipo_animal: this.selected,
                img_url: this.foto
            };
                 const responseAnimal = await Api().post('/animal', animal);

            var abrigoAnimal = {
                id_animal: this.id_animal,
                id_abrigo: firebase.auth().currentUser.uid
            }

            const responseAbrigoAnimal = await Api().post('/abrigoAnimal', abrigoAnimal);

            this.$router.push('/listaAnimais');
            return responseAbrigoAnimal.data;
        }
    }
  
}
</script>

<style scoped>

</style>