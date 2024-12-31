function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Ali", "Khan");
console.log(album);
album = makeAlbum("Waijd", "Unar");
console.log(album);
album = makeAlbum("Sameer", "Jaam");
console.log(album);
