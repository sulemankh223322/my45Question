// array of current users
var current_user = ["wajid", "Ali", "Areeb", "Zain", "khan"];
// Array of new users
var new_users = ["Jawad", "Jaam", "Ahamed00", "Ali", "Amir"];
//lop through New_users to chack for username avibility
new_users.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() == new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is alread takenl"));
    }
    else {
        console.log("This username ".concat(new_one_user, "is availble"));
    }
});
