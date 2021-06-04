let Personaje = {

    template: `
    
    <div>
        <h2  :class="house" v-text="house"></h2>
        <img :src="image" height=300> 
        
        <div v-if="name"
            class="nombre-personaje" 
            v-text="'Nombre: '+name"
        >
        </div>

        <div v-if="patronus"
            class="patronus" 
            v-text="'Patronus: '+patronus"
        >
        </div>

        <div v-if="wand"
            class="wand" 
            v-text="'Varita: '+wand"
        >
        </div>

        <div v-if="alternate_names"
            class="alternate_names" 
            v-text="'Apodos: '+alternate_names"
        >
        </div>

        <div v-if="species"
            class="species" 
            v-text="'Especie: '+species"
        >
        </div>

        <div v-if="gender"
            class="gender" 
            v-text="'Genero: '+gender"
        >
        </div>

        <div v-if="dateOfBirth"
            class="dateOfBirth" 
            v-text="'Fecha de nacimiento: '+dateOfBirth"
        >
        </div>

        <div v-if="ancestry"
            class="ancestry" 
            v-text="'Ascendencia: '+ancestry"
        >
        </div>
        
        <div v-if="eyeColour"
            class="eyeColour" 
            v-text="'Color de ojos: '+eyeColour"
        >
        </div>
        
        <div v-if="hairColour"
            class="hairColour" 
            v-text="'Color del pelo: '+hairColour"
        >
        </div>       
        
        <div v-if="hogwartsStudent"
            class="hogwartsStudent" 
            v-text="'Estudiante de Hogwarts: '+hogwartsStudent"
        >
        </div>
        
        <div v-if="hogwartsStaff"
            class="hogwartsStaff" 
            v-text="'Trabajador de Hogwarts: '+hogwartsStaff"
        >
        </div>
        
        <div v-if="actor"
            class="actor" 
            v-text="'Actor: '+actor"
        >
        </div>
        
        <div v-if="alternate_actors"
            class="alternate_actors" 
            v-text="'Actor sustituto: '+alternate_actors"
        >
        </div>
        
        <div v-if="alive"
            class="alive" 
            v-text="'Vivo: '+alive"
        >
        </div>
        
    </div>


    
    `,

    props:[

        'name',
        'alternate_names',
        'species',
        'gender',
        'house',
        'dateOfBirth',
        'yearOfBirth',
        'ancestry',
        'eyeColour',
        'hairColour',
        'patronus',
        'hogwartsStudent',
        'hogwartsStaff',
        'actor',
        'alternate_actors',
        'alive',
        'image',
        'wand',
        'activo'

    ],

    methods:{
        
    }

}