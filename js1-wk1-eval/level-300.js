

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;

// Before running code, answer the following - write down your answers:
// a) how many function calls are there in this file? - 2 because function call are in ()
// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice = Fri 29 Sep 21:49

// there are 5 variables in this. and two functions. the variables are const ... , the functions are slice() and because there are two slice thats why there are two functions 
// to run this on terminal you type node and then the name of the file. so in this case it would be node level-300.js
// one thing to remember no gap after console.log , if there is a gap it wont work 
// another thing to remember, to save the js file you have to click on js file and then save, when clicked on terminal and then trying to save the js file it wont save. 

console.log(macTimeDisplay)
