// array of current users
let current_user = ["wajid","Ali","Areeb","Zain","khan"]

// Array of new users
let new_users = ["Jawad","Jaam","Ahamed00","Ali","Amir"]

//lop through New_users to chack for username avibility
new_users.forEach(new_one_user => {

    // making a condition for username alredy exist and save in our_condition variable
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() == new_one_user.toLowerCase())
    
    
    // print Differnt using if_Else statemnts
    if(our_condition){
        console.log(`Sorry ${new_one_user} is alread takenl`)
    }else{
        console.log(`This username ${new_one_user}is availble`)

    }
})
