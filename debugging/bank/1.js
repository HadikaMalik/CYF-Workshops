/*
This function should check to see if the given number is equal to
the number 5. This function isn't working correctly can you see why this is the case?
And fix this code!
*/

function isValueFive(n) {
    if (n === "5") {
     return true
    }

    return false
}

isValueFive(5)


//What I did - I went through each line to predict what will hapen 
//What I expected. - I exoected it to be false 
//What actually happened - It was false so I changed the function, from strictly equal to == and then it returned true 