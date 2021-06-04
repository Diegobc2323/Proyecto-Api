const BASEURL = 'https://hp-api.herokuapp.com/' 

let HP ={


    template:`
    <div>
        <div  v-if="!personajeActivo" >
            <div v-for="(personaje, index) in personajes" :key="index" class="personajito">
                <personaje 
                :house="personaje.house"
                :name="personaje.name"
                :image="personaje.image"
                :patronus="personaje.patronus"
                :actor="personaje.actor"

                ></personaje>

                <button @click="addPersonajeActivo(personaje)">
                    + info    
                </button>

                
            </div>
        </div>

        <div v-else class="personajito_fijo">
        
            <personaje 
                :house="personajeActivo.house"
                :name="personajeActivo.name"
                :image="personajeActivo.image"
                :wand="personajeActivo."
                :patronus="personajeActivo.patronus"
                :alternate_name="personajeActivo."
                :species="personajeActivo."
                :gender="personajeActivo."
                :dateOfBirth="personajeActivo."
                :acestry="personajeActivo."
                :dateOfBirth="personajeActivo."
                
                :hogwartsStaff="personajeActivo.hogwartsStaff"
            ></personaje>
            <button @click="nullPersonajeActivo()">volver</button>
        </div>

    </div>     
    `,

    components: {
        Personaje
    },


    data(){
        return{
            personajes:[],
            personajeActivo:null,
        }
    },

    methods: {
        getCharacters(){
            let URL = `${BASEURL}api/characters`
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                this.personajes = data
                console.log(data)
            })
        },


        addPersonajeActivo(personaje){
            console.log(personaje)
            this.personajeActivo = personaje
        },

        nullPersonajeActivo(){
            this.personajeActivo = null

        }
    },

    mounted() {
        this.getCharacters()
    },
}


