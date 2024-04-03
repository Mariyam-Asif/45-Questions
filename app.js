var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Seoul", "Paris", "Bangkok", "Dubai", "New York"];
//Original Order
console.log("Original order:", placesToVisit);
//Alphabetical Order 
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
//Array still in original order
console.log("Original order (again):", placesToVisit);
//Reverse Alphabetical order
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
