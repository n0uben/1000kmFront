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
        let found = null;
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:8080/pioche')
                    .then(response => {
                        response.data.forEach(pioche => {

                            if(pioche.partie.codePartie==code){
                                found=pioche;
                                return 0;
                            }
                        });
                        resolve(found);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
    }
}

export default new PiocheService();