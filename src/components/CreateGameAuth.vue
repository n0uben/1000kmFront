<script>
import partieService from "@/services/PartieService.js";
import router from "@/router/index.js";

export default {
  name: "CreateGameAuth",
  props: {
    username: Object
  },
  methods: {
    onClickDemarrer(e){
      partieService.creer(JSON.parse(localStorage.getItem('user')))
          // une fois la reponse recue, on redirige vers le lobby dattente
          //mieux vaut utiliser router push que location.assign(), car feature de vuejs
          //permet de conserver
          //.then(() => router.push({path: "/attente"}));
          .then(data => {
            router.push({path:`/attente/${data.data.codePartie}`});
          })
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
    <button id="demarrer" class="btnauth" @click="onClickDemarrer($event)">Démarrer</button>
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