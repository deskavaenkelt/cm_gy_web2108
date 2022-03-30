import maleGenerator from "./maleGenerator";
import femaleGenerator from "./femaleGenerator";

var male=new maleGenerator();
var female=new femaleGenerator();

console.log(`${male.getName()} and ${female.getName()}`);