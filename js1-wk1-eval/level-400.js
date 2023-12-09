let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file? - 2 replaceAll and repeat
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing - first it is checking what the lenght of secret is (4 in this case) and then it is saying replace all secret string with x in the confession variable. so that means whenever cake appears in confession variable replace each character with x 
// c) How many inputs do we pass to replaceAll when we call it? How can you tell? - there are two inputs, you can tell because there is a comma in between 
// d) How any inputs do we pass to repeat when we call it?  How can you tell? - just one because it is just one value without a comma 
// e) What kind of statement is on line 7? - a reassignment (a function, expression statement (An expression statement evaluates an expression and discards its result. It allows the expression to perform side effects, such as executing a function or updating a variable.), assignment expression)

console.log(confession)