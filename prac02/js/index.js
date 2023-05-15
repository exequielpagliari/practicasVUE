const app = Vue.createApp({
    data(){
        return{
            equipo: "",
            members: "",
            homeTown: "",
            formed: "",
            secretBase: "",
            active: ""
        }
    },
/*Cuando ubicamos el módulo de comunicación
se debe crear en data() aquello que va a ser modificado.*/
    created(){
        
        fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.equipo = data.squadName;
            this.members = data.memebers;
            this.homeTown = data.homeTown;
            this.formed = data.formed;
            this.secretBase = data.secretBase;
            this.active = data.active;

        })

        .catch(err => console.log(err))

    }

}).mount("#app")