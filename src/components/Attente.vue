<script>
export default {
    name: "Attente",
    data() {
        return {
            pseudo: JSON.parse(localStorage.getItem('user')).pseudo,
            nbJoueurs: 1,
        }
    },

    mounted() {
        this.setJoueurs();
    },

    methods: {
        setJoueurs() {
            for (let i = 1; i <= this.nbJoueurs; i++) {
                document.getElementById("joueur" + i).style.backgroundColor = "#cb5b5b";
            }
        },
    }
}
</script>

<template>
    <div class="container">

        <div class="row align-items-center my-5">
            <div class="col">
                <h1 class="text-center">Salle d'attente</h1>
            </div>
        </div>

        <div class="row flex-row">

            <div class="col-8 bg-secondary text-center">
                <h2>Nombre de joueurs</h2>
                <p id="joueur1" class="mt-4 py-2"
                   style="background-color: #7e3d3d;width: 20%;margin-left: 40%;border-radius: 5px;">
                    {{ this.pseudo }}</p>
                <p id="joueur1" class="mt-4 py-2"
                   style="background-color: #7e3d3d;width: 20%;margin-left: 40%;border-radius: 5px;">En attente...</p>
                <p id="joueur1" class="mt-4 py-2"
                   style="background-color: #7e3d3d;width: 20%;margin-left: 40%;border-radius: 5px;">En attente...</p>
                <p id="joueur1" class="mt-4 py-2"
                   style="background-color: #7e3d3d;width: 20%;margin-left: 40%;border-radius: 5px;">En attente...</p>
<!--                <button class="py-2 px-3 mx-3 mt-4">Inviter</button>-->
                <router-link to="/game"><button class="py-2 px-3 mx-3">Lancer</button></router-link>
            </div>
            <div class="col-4 bg-primary text-left">
                <h2>Réglages</h2>
                <p>
                    <label for="duree">Durée (en secondes)</label>
                    <select id="duree" class="form-select" name="duree">
                        <option value="30">30</option>
                        <option value="30" selected>45</option>
                        <option value="30">60</option>
                        <option value="30">75</option>
                        <option value="30">90</option>
                    </select>
                </p>
                <p>
                    <label for="duree">Nombre de joueurs</label>
                    <select id="duree" class="form-select" name="duree">
                        <option value="30">2</option>
                        <option value="30">3</option>
                        <option value="30" selected>4</option>
                    </select>
                </p>
            </div>
        </div>

    </div>

</template>

<style scoped>
button {
    background-color: lawngreen;
    font-size: 16px;
    font-weight: bold;
}
</style>