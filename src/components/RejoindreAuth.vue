<script>
import PartieService from "@/services/PartieService.js";
import UserService from "@/services/UserService.js";

export default {
  name: "RejoindreAuth",
  props: {
    username: Object
  },
  methods: {
    getCode(){
      return document.getElementById('code').value;
    },

    //mettre a jour partie.joueurs quand on rejoint une partie
    onClickPartie(e){
      let code = document.getElementById('code').value;
      PartieService.rejondre(UserService.currentuser(),code);
    }
  }

}
</script>

<template>
  <div v-if="username==null" class="col-6 text-center">
    <router-link to="/connexion"><button id="connecter" class="btnauth">Se Connecter</button></router-link>
  </div>
  <div v-if="username==null" class="col-6 text-center">
    <router-link to="/inscription"><button id="creer" class="btnauth">Créer un compte</button></router-link>
  </div>
  <div v-if="username!=null" class="col text-center">
    <label for="code">Code de la partie :</label><br>
    <input type="text" id="code"/>
    <button id="demarrer" class="btnauth" @click="onClickPartie($event)">Rejoindre</button>
  </div>
</template>

<style scoped>
.btnauth{
  background-color: lawngreen;
  font-size: 20px;
  font-weight: bold;
  padding: 2% 6% 2% 6%;
}

</style>