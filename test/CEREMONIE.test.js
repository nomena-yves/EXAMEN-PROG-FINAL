import { expect } from "chai";
import { describe, it } from "mocha";
import { getLastDelegation } from "./CEREMONIE.js";
describe ("indique la dernière délégation arrivée", () => {
 
    it ("entrée : les pays retourne le dernier arrivé", 
        () => {
        expect (getLastDelegation (['Estonie 58 1', 'Yemen 53 4', 'Chili 101 2','Romania 102 3',
            'Nicaragua 51 3', 'Oman 50 1','Madagascar 104 5','Ecuator 103 4'])).to.be.equal("Estonie")
    })
    it ("affiche le pays le plus près", () => {
        expect (getLastDelegation (['Estonie 58 1', 'Yemen 53 4', 'Chili 101 2', 'Romania 102 3',
            'Nicaragua 51 3', 'Oman 50 1','Madagascar 104 5','Ecuator 103 4'])).to.be.equal("Oman")
        })
    it ("affiche le pays le plus loin", () => {
        expect (getLastDelegation (['Estonie 58 1', 'Yemen 53 4', 'Chili 101 2', 'Romania 102 3',
            'Nicaragua 51 3', 'Oman 50 1','Madagascar 104 5','Ecuator 103 4'])).to.be.equal("Madagascar")
    })
})