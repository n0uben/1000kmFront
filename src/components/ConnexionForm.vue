<template>
    <div class="container">

        <div class="row align-items-center mt-5">
            <div class="col">
                <h2 class="text-center">Connexion</h2>
            </div>
        </div>

        <div class="row">

            <div class="col">
                <form style="max-width: 400px; margin: auto" @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label class="col-form-label" for="pseudo">Pseudo :</label>
                        <input id="pseudo" v-model="pseudo" class="form-control" name="pseudo" type="text"/>
                    </div>

                    <div class="form-group">
                        <label class="col-form-label" for="motDePasse">Mot de passe : </label>
                        <input id="motDePasse" v-model="motDePasse" class="form-control" name="motDePasse"
                               type="password"/>
                    </div>

                    <div class="form-group mt-4">
                        <input class="btn btn-primary" type="submit" value="Se connecter">
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import userService from "@/services/UserService";

export default {
    name: "ConnexionForm",
    data() {
        return {
            users: [],
            pseudo: '',
            motDePasse: '',
        }
    },
    methods: {
        handleSubmit(event) {
            //si manque au moins un des deux, abandon
            if (!(this.pseudo && this.motDePasse)) {
                return;
            }

            userService.login(this.pseudo, this.motDePasse)

                .then(user => {
                  location.assign("/");
                })
        }
    }
}
</script>
