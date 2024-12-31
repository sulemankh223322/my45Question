
function show_magicians(magicions:string[]): void{

    for (const magican of magicions){
        console.log(magican.charAt(0).toUpperCase() +magican.slice(1));

    }

}



const magicians2: string[] = ["Jawad","Wajid","Sawan"]
make_great2(magicians2)
show_magicians(magicians2)




function make_great2(magicions:string[]): string[]{
    const greatMagician: string[] = [];
    for (let i = 0; i < magicions. length; i ++){
        greatMagician.push(magicions[i] + ' the Great');
    }
    return greatMagician;
}

const magicians3: string[] = ["Jawad","Wajid","Sawan"];

const greatMagician2: string[] = make_great2(magicians3)
show_magicians(magicians3);
show_magicians(greatMagician2);
