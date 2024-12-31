//creating a Array
let number = [1,2,3,4,5,6,7,8,9];

//using for - loop
for( let oneNumber of number){
    let ordinlinalEing:string;

    if (oneNumber === 1){
        ordinlinalEing ="st"
    }else if (oneNumber === 2){
        ordinlinalEing ="nd"
    }
    else if (oneNumber ===3){
        ordinlinalEing = "rd"
    }
    else{
        ordinlinalEing = "th"
    }
    console.log(`${oneNumber}${ordinlinalEing}`)
}