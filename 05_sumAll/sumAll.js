const sumAll = function(num1, num2) {
    let min; 
    let max;

    if (typeof num1 === "number" && typeof num2 === "number") {
        if (num1 >= 0 && num2 >= 0) {
            if (num1 > num2) {
                max = num1;
                min = num2;
            } else {
                max = num2;
                min = num1;
            }
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }

   

    

    let sum = 0;
    for (let i = min;  i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
