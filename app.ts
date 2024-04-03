let guestList: string[]= ["Tom Cruise", "Angelina Jolie", "Denzel Washington"];

console.log("Great news! We found a bigger dinner table.");

guestList.unshift("Barack Obama");

let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Ryan Reynold");

guestList.push("Brad Pitt");

for (let i=0; i<guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are invited to dinner. We would be honored to have you join us.");
}