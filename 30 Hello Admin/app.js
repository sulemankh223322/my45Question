// Creating A Array
var userName = ["wajid", "Ali", "Zeeshan", "Admin", "khan"];
//Using forEach loop on Array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hellow ".concat(oneUser, ", would you like to status Report?"));
    }
    else {
        console.log("Hellow ".concat(oneUser, ",thank you for logging in again."));
    }
});
