"use strict";
let current_users = ['john', 'sarah', 'michael', 'emma', 'kate'];
let new_users = ['peter', 'sarah', 'adam', 'ryan', 'john'];
for (let i = 0; i < new_users.length; i++) {
    let lowercase_current_users = current_users.map(user => user.toLowerCase());
    let lowercase_new_users = new_users[i].toLowerCase();
    if (lowercase_current_users.includes(lowercase_new_users)) {
        console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
    }
    else {
        console.log("The username '" + new_users[i] + "' is available.");
    }
}
