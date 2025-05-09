import { expect } from "chai";
import { describe } from "mocha";
import { reduceDirections } from "../src/.js";

describe("Directions"), () => {
    it("L'entrée ['NORD','SUD','SUD','EST','OUEST','NORD','OUEST'] retourne ['NORD','SUD','SUD','EST','NORD','OUEST']",() => {
        expect(reduceDirections([ 'NORD','SUD','SUD','EST','OUEST','NORD','OUEST'])).to.deep.equal (['OUEST'])
    });
    it("L'entrée ['NORD','SUD','EST','OUEST'] retourne ['NORD','SUD','EST','OUEST']",() => {
        expect(reduceDirections( ['NORD','SUD','EST','OUEST'])).to.deep.equal ( [])

    });
    it("L'entrée ['NORD','EST','SUD'] retourne []  ",() => {
        expect(reduceDirections(['NORD','EST','SUD'])).to.deep.equal (['NORD','EST','SUD'])
    });
}   
