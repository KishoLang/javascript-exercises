const palindromes = function (string) {
    // Turn String into lower case string without spaces or symbols
    const str = string.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
    // Return bool result of reversed str vs str
    return str.split("").reverse().join("") === str;
    
    /* 
    // Check if first char is === last char
    let result;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[(str.length - 1) - i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
    */

};

// Do not edit below this line
module.exports = palindromes;
