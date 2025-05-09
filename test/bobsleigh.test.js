import { expect } from "chai";
import { describe } from "mocha";
import { countMaxBobsleigh} from "../src/.js";

describe("MaxBobsleigh"), () => {
    it("L'entrée [....X,X....,....,..X..,X...X] pour N=5 retourne 3 ",() => {
        expect(countMaxBobsleigh([ ['....X,X....,....,..X..,X...X']])).to.be.equal (3)
    });
    it("L'entrée  pour N<4 retourne 0 ",() => {
        expect(countMaxBobsleigh( N=3)).to.be.equal (0)

    });
    it("L'entrée [...X..,X.X.X.,X.....,.X....,X...X.] pour N=5 retourne 2 ",() => {
        expect(countMaxBobsleigh([ ['...X..,X.X.X.,X.....,.X....,X...X.']])).to.be.equal (2)
    });
}   
