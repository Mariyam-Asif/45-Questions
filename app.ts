let guestList: string[] = ["Tom Cruise", "Angelina Jolie", "Denzel Washington"];

let notPresent: string = "Denzel Washington";
let newGuest: string = "Cristiano Ronaldo";

for (let i=0; i<guestList.length; i++) {
    if (guestList[i] === notPresent) {
        (guestList[i] = newGuest);
        break;
    }
}

for (let i=0; i<guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are invited to dinner. We would be honored to have you join us.");
}
console.log(`Mr. ${notPresent} can't make it to dinner.`);