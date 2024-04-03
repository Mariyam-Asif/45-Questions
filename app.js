var guestList = ["Tom Cruise", "Angelina Jolie", "Denzel Washington", "Brad Pitt"];
console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuests = guestList.pop();
    console.log("Sorry, ".concat(removedGuests, ", we can't invite you to dinner."));
}
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
guestList.pop();
guestList.pop();
console.log("Guest List:", guestList);
