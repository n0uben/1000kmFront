import PartieService from "../services/PartieService.js";
import {afterAll, beforeAll, describe, expect, it, jest} from "@jest/globals";
import UserService from "@/services/UserService.js";

describe('tests partie service', () => {
    it('rejoindre partie doit reussir',() => {
        const user = {"idUtilisateur":4,"pseudo":"Midoune","motDePasse":"DoggyBG","nbPartiesJouees":5,"nbPartiesGagnees":5,"kmParcourus":0,"peutAvancer":false,"amis":[]};
        const code = "OUhdPo1KN9Xc";
        PartieService.rejondre(user,code);
        PartieService.getPartieByCode(code).then(response => {
            let pseudo = this.joueurs=response.joueurs[1].pseudo;
            expect(pseudo).toBe("Midoune");
        })
            .catch(error => {
                console.log(error);
            })
    });

});