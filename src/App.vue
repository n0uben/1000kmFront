<script setup>
import NavBar from "@/components/NavBar.vue";

</script>
<script>
import userService from "@/services/UserService";

export default {
  name: "App",
  data() {
    return {
      currentUser: ""
    }
  },

  created() {
    this.currentUser = userService.currentuser()
  },

}
</script>

<template>
  <header>
    <NavBar :username="currentUser"/>
  </header>

  <body>
    <div id="main">
      <router-view :username="currentUser"/>
    </div>
  </body>
</template>


