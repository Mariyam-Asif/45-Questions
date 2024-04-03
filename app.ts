let placesToVisit: string[] = ["Seoul", "Paris", "Bangkok", "Dubai", "New York"];
//Original Order
console.log("Original order:", placesToVisit);

//Alphabetical Order 
console.log("Alphabetical order:", [...placesToVisit].sort());

//Array still in original order
console.log("Original order (again):", placesToVisit);

//Reverse Alphabetical order
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

//Array still in original order
console.log("Original order (again):", placesToVisit);

//Reversed Order
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

//Reversed Order again
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

//Alphabetical Order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

//Reverse Alphabetical Order
console.log("Stored in reverse alphabetical order:", placesToVisit.sort().reverse());