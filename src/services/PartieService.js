import http from '../main'

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
        return http.get("/partie/code/" + code);
    }
}

export default new PartieService();