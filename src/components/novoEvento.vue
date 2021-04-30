<template>
    <div id="novoEvento">
        <h3>Novo Evento</h3>
        <div class="row">
    <form @submit.prevent="salvarEvento" class="col s12">
                      
           
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="nome" required>
                <label>Nome do Evento:</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="descricao" required>
                <label>Descrição do Evento:</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="local" required>
                <label>Local do Evento:</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="data" required>
                <label>Data da realização do Evento:</label>
                </div>    
            </div>
             <div class="row">
                <div class="input-field col s12">
                <input type="text" v-model="horario" required>
                <label>Horário de início do Evento:</label>
                </div>    
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="lat" required>
                    <label>Latitude do local do evento:</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" v-model="long" required>
                    <label>Longitude do local do evento:</label>
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
        <router-link to="/listaEventos" class="btn grey" style="margin-right: 10px">Cancel</router-link>
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
    name: 'novoEvento',
    data(){
        return {
            selected: '',
            id_abrigo: null,
            nome:null,
            descricao:null,
            local:null,
            data:null,
            horario:null,
            tipo:null,
            abrigoRealizador: null,
            lat:null,
			long:null,
			media:0,
             countAvaliacoes: null,
        }
    },

    created() {
       $(document).ready(function(){
    $('select').formSelect();
  });
	},
	

    methods: {
        salvarEvento: async function(){
    
            var evento = {
                nome_evento: this.nome,
                data_evento: this.data,
                descricao_evento: this.descricao,
                local_nome: this.local,
                local_lat: this.lat,
                local_long: this.long,
                tipo_evento: this.selected,
                nota_media: this.media,
                id_abrigo: firebase.auth().currentUser.uid
            };
            
            const responseEvento = await Api().post('/evento', evento);

            await this.getSeguidores()
            this.$router.push('/listaEventos');
            return responseEvento.data;
        },
        
        sendEmail(email,nome){
                console.log("sendEmail")

                Email.send({
					SecureToken : "29c9caf0-8bd4-46ca-a1c2-199f846d223a",
					To : email,
					From : "biacoronha@gmail.com",
					Subject : "Novo Evento PetFeliz",
					Body : "O Abrigo " + nome + " acabou de publicar um novo evento! Vá conferir!"
					}).then(
						message => alert("Email mandado com sucesso para: " + email)
                    );
                    console.log(email)
                    
            },

			getSeguidores: async function(){
                var id_abrigo = firebase.auth().currentUser.uid
                const responseSeguidor = await Api().get(`/seguidor/${id_abrigo}`);
                for (const seguidor of responseSeguidor.data) {
                    var id_usuario = seguidor.id_usuario
                    var responseUsuario = await Api().get(`usuario/${id_usuario}`)
                    var usuario = responseUsuario.data
                    this.sendEmail(usuario.email_usuario, usuario.nome_usuario)
                };
            },
            
            
          
    }
  
}

</script>

<style scoped>

</style>