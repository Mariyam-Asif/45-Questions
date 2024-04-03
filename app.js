var guestList = ["Tom Cruise", "Angelina Jolie", "Denzel Washington"];
var notPresent = "Denzel Washington";
var newGuest = "Cristiano Ronaldo";
for (var i = 0; i < guestList.length; i++) {
    if (guestList[i] === notPresent) {
        (guestList[i] = newGuest);
        break;
    }
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are invited to dinner. We would be honored to have you join us.");
}
console.log("Mr. ".concat(notPresent, " can't make it to dinner."));
