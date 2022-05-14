import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";
var id = "?";
var name = "to Termiusfinity!";
var description = "huh";
var authors = "Karen";
var version = 1;
var currency, k = BigNumber.from(1);

var init = () => {
    currency = theory.createCurrency();
    currency.value = 2;
    
}
var tick = (elapsedTime, multiplier) => {
    //for (let i = 0; i < 100; i++) {
    //    currency.value *= SIGMA(currency.value, 50);
    //    
    //}
    k = BigNumber.from(`1e${k}`);
    currency.value *= k;
}
var getPrimaryEquation = () => "\\dot{\\rho} = TREE(3)";
var getPublicationMultiplier = (tau) => BigNumber.ONE;
var getPublicationMultiplierFormula = (symbol) => "1";
var getTau = () => currency.value;
var get2DGraphValue = () => 1;
init();

function SIGMA(a, b) {
    if (b <= 1) return a.pow(a);
    return SIGMA(a.pow(a), b - 1);
}
