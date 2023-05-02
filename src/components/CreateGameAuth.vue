<script>
export default {
  name: "CreateGameAuth",
  props: {
    username: Object
  },
  methods: {

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
    <router-link to="/attente"><button id="demarrer" class="btnauth">Démarrer</button></router-link>
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