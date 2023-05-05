<script>
export default {
  name: "RejoindreAnonyme"
}
</script>

<template>
  <div class="col-6 text-center">
    <img id="car" src="./../assets/images/205.jpg" alt="votre avatar"/><br>
    <img id="reroll" src="./../assets/images/reroll.png" @click="onClickReroll()" alt="bouton reroll"/><br><br>
  </div>
  <div class="col-6 text-center">
    <label for="perso" style="font-size: 25px;font-weight: bold">Votre Pseudo :</label><br>
    <input type="text" id="pseudo"/><br>
    <label for="code" style="font-size: 25px;font-weight: bold">Code de la partie :</label><br>
    <input type="text" id="code"/>
  </div>
</template>

<style scoped>
#car{
  width: 50%;

}

#reroll{
  margin-left: 55%;
}
</style>