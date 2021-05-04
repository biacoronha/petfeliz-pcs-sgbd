<template>
    <div id="editarEvento">
        <h3>Editar Evento</h3>
        <div class="row">
        <form @submit.prevent="updateEvento" class="col s12">
        
        <label>Nome do Evento:</label>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="nome" required>
                </div>    
            </div>
            
            <label>Descrição do Evento</label>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="descricao" required>
                </div>    
            </div>

            <label>Local do Evento:</label>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="local" required>
                </div>    
            </div>
            
            <label>Tipo do Evento</label>
             <div class="row">
                <div class="input-field col s12">
                <select v-model="selected">
                <option value="" disabled selected>Escolha o Tipo</option>
                <option value="Adoção">Adoção</option>
                <option value="Recolhimento">Recolhimento</option>
                </select>
                </div>    
            </div>            

            <label>Horário de início do evento</label>    
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="horario" required>
                </div>    
            </div>

            <label>Data da realização do evento (MM/DD/YYYY):</label>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="data" required>
                </div>    
            </div>
            
            <label>Latitude do local do evento:</label>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="lat" required>
                </div>
            </div>

            <label>Longitude do local do evento:</label>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="long" required>
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
        id_evento: null,
        nome: null,
        descricao: null,
        local: null,
        data:null,
        horario:null,
        tipo: null,
        lat:null,
        long:null,
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
        const id_evento = to.params.id_evento;
        const responseEvento = Api().get(`/evento/${id_evento}`);
        responseEvento.then((value) => {
            next(vm => {
                const evento = value.data;
                vm.id_evento = id_evento;
                vm.nome = evento.nome_evento;
                vm.descricao = evento.descricao_evento;
                vm.local = evento.local_nome;
                vm.data = evento.data_evento;
                vm.horario = evento.horario;    // não está sendo salvo
                vm.tipo = evento.tipo_evento;
                vm.lat = evento.local_lat;
                vm.long = evento.local_long;
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
            const id_evento = this.$route.params.id_evento;
            const responseEvento = Api().get(`/evento/${id_evento}`);
            responseEvento.then((value) => {
                const evento = value.data;
                this.id_evento = id_evento;
                this.nome = evento.nome_evento;
                this.descricao = evento.descricao_evento;
                this.local = evento.local_nome;
                this.data = evento.data_evento;
                this.horario = evento.horario;    // não está sendo salvo
                this.tipo = evento.tipo_evento;  
                this.lat = evento.local_lat;
                this.long = evento.local_long;
            });
        }
    },
        updateEvento: async function (){

            var user = firebase.auth().currentUser
        if(user){
            const id_evento = this.$route.params.id_evento;
            var evento = {
                id_evento: this.id_evento,
                nome_evento: this.nome,
                descricao_evento: this.descricao,
                local_nome: this.local,
                data_evento: this.data,
                horario: this.horario,
                tipo_evento: this.selected,
                local_lat: this.lat,
                local_long: this.long
            }
            const responseEvento = await Api().put(`/evento/${id_evento}`, evento);
            this.$router.push("../listaEventos");
            console.log(this.long)
        }
        }
    
    }
  
}
</script>

<style scoped>

</style>