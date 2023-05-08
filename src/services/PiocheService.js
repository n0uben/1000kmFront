import http from "@/main.js";
import axios from "axios";

class PiocheService{
    getAll() {
        return http.get("/pioche")
    }
    async creer(partie){
        let pioche = {
            partie: partie,
            cartes: []
        };
        return http.post("/pioche/creer", pioche);
    }

    async getPiocheByCode(code){
        this.getAll().then(r => {
            let found=null;
            r.data.forEach(pioche => {
                if(pioche.partie.codePartie==code){
                    found=pioche;
                    return;
                }
            })
            return found;
        })
            .catch(err => {
                console.log(err);
                return null;
            })
    }
}

export default new PiocheService();