let userName =["wajid", "Ali","Zeeshan", "Admin","Usman"]
userName  = []

if (userName.length === 0){
    console.log("you Array in Empty we need to find some users!")

}else{

//Using forEach loop on Array
userName.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hellow ${oneUser}, would you like to status Report?`)
    }else{
        console.log(`Hellow ${oneUser},thank you for logging in again.`)
    }
})

}