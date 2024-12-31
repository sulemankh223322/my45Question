function show_magicians(magicions) {
    for (var _i = 0, magicions_1 = magicions; _i < magicions_1.length; _i++) {
        var magican = magicions_1[_i];
        console.log(magican.charAt(0).toUpperCase() + magican.slice(1));
    }
}
var magicians2 = ["Jawad", "Wajid", "Sawan"];
make_great2(magicians2);
show_magicians(magicians2);
function make_great2(magicions) {
    var greatMagician = [];
    for (var i = 0; i < magicions.length; i++) {
        greatMagician.push(magicions[i] + ' the Great');
    }
    return greatMagician;
}
var magicians3 = ["Jawad", "Wajid", "Sawan"];
var greatMagician2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagician2);
