"use strict";
// Making a Function 
function make_shirt(size = "Large", printMassage = "T love TypeScript") {
    console.log(`Creat a ${size} shirt with the ${printMassage} Print on Shirt`);
}
//Calling a function with by defualt value
make_shirt();
// calling a function now with Medium size and default massage
make_shirt("Mudium");
// calling a funchion now with samll size and also Different pirnt massage
make_shirt("Samll", "I love JavaScrpt");
