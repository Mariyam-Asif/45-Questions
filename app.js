"use strict";
function make_Sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("-" + item);
    }
}
make_Sandwich("bread", "cheese", "chicken", "tomato", "lettuce");
make_Sandwich("bread", "hummus", "cucumber", "lettuce");
make_Sandwich("bread", "chocolate spread", "sliced almond");
