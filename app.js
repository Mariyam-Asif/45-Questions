"use strict";
function make_album(artist, title) {
    return {
        artist,
        title
    };
}
let album1 = make_album("Talha Anjum", "Talha Anjum Mixtape");
let album2 = make_album("August D", "August D Mixtape");
let album3 = make_album("BTS", "Proof");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artist, title, tracks) {
    return {
        artist,
        title,
        tracks
    };
}
let album4 = make_album2("Atif Aslam", "Jal Pari", 8);
let album5 = make_album2("Vital Signs", "Vital Signs 1", 9);
let album6 = make_album2("Shehzad Roy", "Qismat Apney Haath Mein", 12);
console.log(album4);
console.log(album5);
console.log(album6);
