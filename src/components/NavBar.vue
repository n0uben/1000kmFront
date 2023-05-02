<script>
export default {
  name: "NavBar",
  data() {
    return {

    }
  },
  props: {
    username: Object
  },

}
</script>

<template>
  <nav id="navig" class="navbar navbar-expand-md py-4">
    <!-- conteneur, mettre container-fluid pour supprimer les marges horizontales automatiques  -->
    <div class="container ">
      <router-link class="nav-link fw-bold" to="/"><img id="logo" src="./../assets/images/logo.png" alt="logo 1000km"/></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class="fas fa-bars" style="color:#fff; font-size:28px;"></i>
                </span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <!-- active = element actuellement selectionné -->
          <li class="nav-item px-3" v-if="username">
            <a class="nav-link fw-bold" >{{username['pseudo']}}</a>
          </li>
          <li class="nav-item px-3">
            <router-link class="nav-link fw-bold" to="/attente">Créer partie</router-link>
          </li>
          <li class="nav-item px-3">
            <router-link class="nav-link fw-bold" to="/connexion" v-if="!username">Se Connecter</router-link>
          </li>
          <li class="nav-item px-3">
            <router-link class="nav-link fw-bold" to="/logout" v-if="username">Se déconnecter</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<style scoped>
#navig{
  background-color: #5f5f5f;
}

.nav-link{
  color: white;
  font-size: 18px;
}

.navbar-toggler-icon{
  color: white;
}

#navig a:hover{
  color:white;
  text-decoration: underline;
}
</style>