// Creating A Array
let userName = ["wajid", "Ali","Zeeshan","Admin","khan"];

//Using forEach loop on Array
userName.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hellow ${oneUser}, would you like to status Report?`)
    }else{
        console.log(`Hellow ${oneUser},thank you for logging in again.`)
    }
})

