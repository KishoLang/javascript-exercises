const reverseString = function(string) {
    let newCharArray = [];
    let counter = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        newCharArray[counter] = string[i]; 
        counter++;
    }
    return newCharArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
