// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

const person = {
    "name": "Jemima",
    "location": "Glasgow",
    "id_number": 9,
};

console.assert(person.name === "Jemima"); // this will show the name which is Jemima 
console.assert(person.location === "Glasgow"); // this will show undefined because location has no value 
console.assert(person.id_number === 9); // this will show error or undefined because instead of equal sign there should be a colon 

// the comment above will only show if it is console.log but with console.assert, if it is true, it will not show anything 