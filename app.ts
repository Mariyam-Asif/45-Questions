let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller"];

function make_great(magicians: string[]) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("The Great " + magicians[i]);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let greatMagiciansArray: string[] = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);