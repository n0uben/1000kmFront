<script>
import RejoindreAnonyme from "@/components/RejoindreAnonyme.vue";
import RejoindreAuth from "@/components/RejoindreAuth.vue";

export default {
  name: "Rejoindre",
  components: {RejoindreAuth, RejoindreAnonyme},
  data() {
    return {
      isAuth: false,
      current: null,
      imgnames: ["205.jpg", "skyline.jpg"]
    }
  },
  props: {
    username: String
  },
  methods: {
    onClickAuth(event) {
      if (event.currentTarget.id != this.current) {//si on n'a pas cliqué deux fois de suite sur la meme div
        this.isAuth = !this.isAuth;
        if (this.isAuth) {
          let auth = document.getElementById("auth")
          auth.style.backgroundColor = "#5f5f5f";
          auth.style.color = "white";
          let anonym = document.getElementById("anonyme");
          anonym.style.backgroundColor = "white";
          anonym.style.color = "black";
        } else {
          let auth = document.getElementById("auth")
          auth.style.backgroundColor = "white";
          auth.style.color = "black";
          let anonym = document.getElementById("anonyme");
          anonym.style.backgroundColor = "#5f5f5f";
          anonym.style.color = "white";
        }
        this.current = event.currentTarget.id;//id le la div dernierement cliquée
      }
    },
  }
}
</script>

<template>
  <div class="container">
    <div class="container border border-dark" id="blockCreate">
      <div class="row border-bottom border-dark align-items-center">
        <div id="anonyme" class="col-6 py-3" style="background-color: #5f5f5f;color: white" @click="onClickAuth($event)">
          <h2 class="text-center">En mode Anonyme</h2>
        </div>
        <div id="auth" class="col-6 py-3" @click="onClickAuth($event)">
          <h2 class="text-center">Authentification</h2>
        </div>
      </div>
      <div class="row align-items-center" id="perso">
        <RejoindreAnonyme v-if="!isAuth"/>
        <RejoindreAuth :username="username" v-if="isAuth"/>
      </div>
      <div class="row align-items-center" id="start" v-if="!isAuth">
        <div class="col-12 text-center">
          <button id="demarrer">Démarrer</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
#blockCreate{
  margin-top: 8%;

}

#perso{
  height: 400px;
}

#start{
  height: 100px;

}

#demarrer{
  background-color: lawngreen;
  font-size: 20px;
  font-weight: bold;
  padding: 1% 3% 1% 3%;
  width: auto;
  height: auto;

}

</style>