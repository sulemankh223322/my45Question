
function show_magicians(magicians: string[]): void {
    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician. slice(1));



    }
}



function make_great(magicians: string[]):void{

    // i stand for index string
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i]  + '  the great'
    }
}

const magicians2: string[] = ["Jawad","Wajid","Sawan"];
make_great(magcicians2)
show_magicians(magicians2)