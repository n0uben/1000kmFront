import http from '../main'
import axios from "axios";
import router from "@/router/index.js";

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
                partie.joueurs.push(user);
                console.log("partie avec joueur ajouté : "+response.joueurs);
                this.modifier(partie)
                    .then(response => {
                        console.log(" partie succesfully updated ");
                        router.push({path:"/attente/"+code})
                        //router.push
                    } )
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }

    async modifier(partie){
        console.log("updated partie : "+partie.idPartie+" nombre de joueurs : "+partie.joueurs.length);
        return http.put('http://localhost:8080/partie/modifier/'+partie.idPartie,partie)
            .then(() => {
                console.log("success");
            })
            .catch(error => {console.log(error);})
    }
}

export default new PartieService();