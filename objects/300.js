// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

function checkLivesNearCYF(person) {
    const cyfLocations = ["Birmingham", "Cape Town", "Glasgow", "London", "Manchester"];
    return cyfLocations.includes(person.city); // this was person.location first and i changed it to person.city becaus there is no location defined for const mo or syed therefore the assertion will fail, once i chnaged it to person.city it will run fine 
}

const mo = {
    "name": "Mo",
    "city": "Glasgow",
    "focus": "React",
};

const sayed = {
    "name": "Sayed",
    "city": "Edinburgh",
    "focus": "SQL",
}

console.assert(checkLivesNearCYF(mo));
console.assert(!checkLivesNearCYF(sayed)); // this checks whether sayed lives in any of the location defined in function and the ! at the front says not lives near locations defined in function which is true because edinburgh is not included in function, the ! flips a boolean value, so if you have a true it will says false 
