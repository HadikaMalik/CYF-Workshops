// Predict and explain...
// What will be logged by this code?
// Check your prediction and explanation by running the code.

const person1 = {
    "name": "Abdi",
    "location": "London",
    "id_number": 17,
};

const person2 = {
    "name": "Shadi",
    "job": "Software Engineer",
    "location": "London",
    "id_number": 28,
};

const person3 = person2;

person3.location = "Manchester";

console.log(person1.name); // will show the name of person 1 which is Abdi 
console.log(person2["name"]); // will show the name of person 2 which is Shadi
console.log(person1.id_number > person2["id_number"]); // will show false because id number for person 1 is 17 and for person 2 is 28 so it is smaller not bigger 
console.log(person1.job); // will show undefined because person 1 does not have a job
console.log(person1.location === person2.location); // will show false becasue even though the content is the same, the location is not the same 
console.log(person1.location === person3.location); // will show false becasue even though the content is the same, the location is not the same 
console.log(person2.location === person3.location); // will show true because it is being defined in a variable that person 2 is the same as person 3 
