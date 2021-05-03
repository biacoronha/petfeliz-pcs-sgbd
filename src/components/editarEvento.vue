<template>
    <div id="editarEvento">
        <h3>Editar Evento</h3>
        <div class="row">
        <form @submit.prevent="updateEvento" class="col s12">
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="nome" required>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="local" required>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <select v-model="selected">
                <option value="" disabled selected>Escolha o Tipo</option>
                <option value="Adoção">Adoção</option>
                <option value="Recolhimento">Recolhimento</option>
            </select>
    <label>Tipo do Evento</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="descricao" required>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="horario" required>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="data" required>
                </div>    
            </div>
             <router-link to="../listaEventos" class="btn grey" style="margin-right:10px">Cancelar</router-link>
            <button type="submit" class="btn">Confirmar</button>           
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
    name: 'editarEvento',
    data(){
       return {
        selected: '',
        id_abrigo: null,
        abrigoRealizador: null,
        nome: null,
        descricao: null,
        local: null,
        data:null,
        horario:null,
        tipo: null
        }
    },

    created(){
        $(document).ready(function(){
    $('select').formSelect();
  });
    },

    beforeRouteEnter(to, from, next) {
    
    var user = firebase.auth().currentUser
    if(user){
        const id_abrigo = to.params.id_abrigo;
        const responseEvento = Api().get(`/evento/${id_abrigo}`);
        responseEvento.then((value) => {
            next(vm => {
                const evento = value.data;
                vm.id_abrigo = id_abrigo;
                vm.nome = evento.nome_evento;
                vm.descricao = evento.descricao_evento;
                vm.local = evento.local_nome;
                vm.data = evento.data_evento;
                vm.horario = evento.horario;    // não está sendo salvo
                vm.tipo = evento.tipo_evento;
            });
        });
    }
    
    },
    watch:{
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
        var user = firebase.auth().currentUser
        if(user){
            const id_abrigo = to.params.id_abrigo;
            const responseEvento = Api().get(`/evento/${id_abrigo}`);
            responseEvento.then((value) => {
                const evento = value.data;
                this.id_abrigo = id_abrigo;
                this.nome = evento.nome_evento;
                this.descricao = evento.descricao_evento;
                this.local = evento.local_nome;
                this.data = evento.data_evento;
                this.horario = evento.horario;    // não está sendo salvo
                this.tipo = evento.tipo_evento;  
            });
        }
    },
        updateEvento: async function (){

            var user = firebase.auth().currentUser
        if(user){
            const id_abrigo = to.params.id_abrigo;
            var evento = {
                id_abrigo: this.id_abrigo,
                nome: this.nome,
                descricao: this.descricao,
                local: this.local,
                data: this.data,
                horario: this.horario,
                tipo: this.tipo
            }
            const responseEvento = await Api().put(`/evento/${id_abrigo}`, evento);
            this.$router.push("../listaEventos");
        }

            // db.collection('eventos').where('id_abrigo','==',this.$route.params.id_abrigo).get().then(querySnapshot => {
            // querySnapshot.forEach(doc => {
            //    doc.ref.update({
            //        id_abrigo: this.id_abrigo,
            //        nome : this.nome,
            //        descricao : this.descricao,
            //        local : this.local,
            //        data : this.data,
            //        horario : this.horario,
            //        tipo : this.selected,
            //        abrigoRealizador : this.abrigoRealizador
                  
                   
            //    })
            //    .then(
            //        () =>
            //        this.$router.push({name: 'verEvento', params: {id_abrigo:this.id_abrigo}})
            //    )
            // })
            // })
        }
    
    }
  
}
</script>

<style scoped>

</style>