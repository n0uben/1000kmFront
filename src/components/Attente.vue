<script>
import router from "@/router/index.js";
import PartieService from "@/services/PartieService.js";

import axios from "axios";



export default {
    name: "Attente",
    data() {
        return {
            codePartie:router.currentRoute.value.params.code,
            pseudo: JSON.parse(localStorage.getItem('user')).pseudo,
            nbJoueurs: 1,
            partie: null,
            joueurs: null,
            isHost:false,
        }
    },

    mounted() {
      this.getDataPartie();
    },

    methods: {
        getDataPartie(){
          PartieService.getPartieByCode(this.codePartie)
              .then(response => {
                this.partie = response;
                this.isHost=(response.joueurs[0].pseudo==this.pseudo);
                this.nbJoueurs=response.joueurs.length;
                this.joueurs=response.joueurs;
                this.setJoueurs(JSON.parse(localStorage.getItem('user')),this.partie);
                this.checkEstLancee();
              })
              .catch(error => {
                console.log(error);
              })
        },
        setJoueurs() {
          console.log("nombre de joueurs : "+this.nbJoueurs);
            for (let i = 0; i < this.nbJoueurs; i++) {
                let slot = document.getElementById("joueur" + (i+1));
                slot.style.backgroundColor = "#cb5b5b";
                slot.textContent = this.joueurs[i].pseudo;
            }
        },
        handleUnload(){
          PartieService.quitter(JSON.parse(localStorage.getItem('user')),this.partie);
        },
        onClickLancer(){
          PartieService.lancer(this.partie);
        },
        checkEstLancee(){

          const interval = setInterval(() => {//verifie si la partie est lancée
            console.log("idpartie2 "+this.partie.idPartie);
            axios.get('http://localhost:8080/partie/'+this.partie.idPartie)
                .then(response => {
;
                  console.log("verifie si lancée : "+response);
                  if((response.data.estLancee)&&(this.partie.joueurs.length>=2)){//si la partie se lance
                    console.log("bien lancée");
                    clearInterval(interval);//met fin à la requete à intervale
                    router.push({path:"/game/"+this.codePartie});
                  }
                  if(response.data.joueurs.length>this.nbJoueurs){//si un joueur a rejoint
                    console.log("nouveau joueur");
                    this.getDataPartie();
                  }
                })
                .catch(error => {
                  console.error('partie introuvalble', error);
                });
          }, 3000);
        },

    },
  beforeRouteLeave(to, from, next) {
      console.log("vers : "+to.path);
      if(!to.path.includes("game")){//si le joueur va vers game il ne quitte pas la partie
        this.handleUnload();
      }
    next();
  },
}
</script>

<template>
    <div class="container">

        <div class="row align-items-center my-5">
            <div class="col">
                <h1 class="text-center">Salle d'attente</h1>
                <p class="text-center">Code de partie : {{this.codePartie}}</p>
            </div>
        </div>

        <div class="row flex-row">

            <div class="col-8 bg-secondary text-center">
                <h2>Nombre de joueurs</h2>
                <p id="joueur1" class="mt-4 py-2"
                   style="background-color: #7e3d3d;width: 20%;margin-left: 40%;border-radius: 5px;">
                    </p>
                <p id="joueur2" class="mt-4 py-2"
                   style="background-color: #7e3d3d;width: 20%;margin-left: 40%;border-radius: 5px;">En attente...</p>
                <p id="joueur3" class="mt-4 py-2"
                   style="background-color: #7e3d3d;width: 20%;margin-left: 40%;border-radius: 5px;">En attente...</p>
                <p id="joueur4" class="mt-4 py-2"
                   style="background-color: #7e3d3d;width: 20%;margin-left: 40%;border-radius: 5px;">En attente...</p>
                <button class="py-2 px-3 mx-3" @click="onClickLancer" v-if="isHost">Lancer</button>
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