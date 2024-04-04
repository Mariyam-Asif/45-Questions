let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller"];

function make_great(magicians: string[]) {
for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
}
}

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

make_great(magicians);

show_magicians(magicians);