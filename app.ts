let guestList: string[] = ["Tom Cruise", "Angelina Jolie", "Denzel Washington", "Brad Pitt"];

console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");

while (guestList.length > 2) {
    let removedGuests: string = guestList.pop()!;
    console.log(`Sorry, ${removedGuests}, we can't invite you to dinner.`);
}
for (let guest of guestList) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

guestList.pop();
guestList.pop();

console.log("Guest List:", guestList);
