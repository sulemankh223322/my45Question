let Guest_List :string[] = ['Sir Shah','Sir Naeem Rao','Sir Naveed Afridi'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest :string = 'Imran khan';
let new_Guest :string = 'Kamran khan Tessori';
Guest_List[0] = new_Guest ;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table so we are inviting 3 more guests. ')

// array me 3 guest add kiye hain
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');


// yaham per mene 6 guest ke array ko print kraya he
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

// Sorry Message to guest for not inviting.
console.log('Sorry we can not arrange big table, Only Two people will be invited.');



// yahan per mene Guest remove kiye hai
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited Dinner.`);
}



//  hamare bache howe 2 invited Guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}


// mene sare guest array remove kar diye.
Guest_List.splice(0, 2,);

console.log(Guest_List);