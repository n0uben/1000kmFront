import {createRouter, createWebHistory} from "vue-router";
import ConnexionForm from "@/components/ConnexionForm.vue";
import CreateGame from "@/components/CreateGame.vue"
import GameBoard from "@/components/GameBoard.vue";
import InscriptionForm from "@/components/InscriptionForm.vue";
import Attente from "@/components/Attente.vue";
import Logout from "@/components/Logout.vue";
import Rejoindre from "@/components/Rejoindre.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: CreateGame
        },
        {
            path: '/connexion',
            component:ConnexionForm
        },
        {
            path: '/game/:code',
            component: GameBoard
        },
        {
            path: '/inscription',
            component: InscriptionForm
        },
        {
            path: '/attente/:code',
            component: Attente
        },
        {
            path: '/logout',
            component: Logout
        },
        {
            path: '/rejoindre',
            component: Rejoindre
        },


    ]
})

export default router;
