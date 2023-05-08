import http from '../main'
import axios from "axios";
import router from "@/router/index.js";
import PiocheService from "@/services/PiocheService.js";

class PartieService {
    getAll() {
        return http.get("/partie")
    }

    async creer(user) {

        //partie avec parametres par defaut
        let partie = {
            nombreJoueurs: 4,
            dureeTour: 45,
            codePartie: "",
            joueurs: [user]
        }

        console.log(partie);

        return http.post("/partie/creer", partie)
    }

    getPartieByCode(code) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/partie/code/'+code)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    rejondre(user,code){
        this.getPartieByCode(code)
            .then(response => {
                console.log("partie recupérée : "+response);
                let partie = response;
                if((this.estDansPartie(user,partie)==-1)&&(partie.joueurs.length<4)){
                    partie.joueurs.push(user);
                    console.log("partie avec joueur ajouté : "+response.joueurs);
                    this.modifier(partie)
                        .then(() => {
                            console.log(" partie succesfully updated ");
                            router.push({path:"/attente/"+code})
                            //router.push
                        } )
                        .catch(error => {
                            console.log(error)
                        })
                }else
                    console.log("joueur deja dans partie");
            })
            .catch(error => {
                console.log(error);
            })
    }

    quitter(user,partie){//supprime le joueur de la liste des joueurs dans la partie
        let existe = this.estDansPartie(user,partie)
        console.log("existe = "+existe);
        if(existe!=-1){
            partie.joueurs.splice(existe, 1);
            this.modifier(partie)
                .then(() => {
                    console.log(" partie succesfully updated");
                } )
                .catch(error => {
                    console.log(error)
                })
        }else
            console.log("joueur inconnu");
    }

    estDansPartie(user,partie){//retourne l'indice du joueur dans joueurs, -1 si pas dans la liste
        let i=0;
        let found=-1
        partie.joueurs.forEach((joueur) => {
            if(joueur.pseudo==user.pseudo){//on verifie par rapport au pseudo pour prendre en compte joueur non-inscrit
                found=i;
                return;
            }
            i++
        })
        return found;
    }

    async modifier(partie){
        console.log("updated partie : "+partie.idPartie+" nombre de joueurs : "+partie.joueurs.length);
        return http.put('http://localhost:8080/partie/modifier/'+partie.idPartie,partie)
            .then(() => {
                console.log("success");
            })
            .catch(error => {console.log(error);})
    }

    lancer(partie){
        partie.estLancee=true;
        this.modifier(partie).then(() =>{
            console.log("partie lancée")
            PiocheService.creer(partie).then(() => {//crée une pioche
                router.push({path:"/game/"+partie.codePartie});
            });
        })
            .catch(err => {console.log("la partie n'a pas été lancée")})
    }
}

export default new PartieService();