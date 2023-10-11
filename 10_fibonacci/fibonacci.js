const fibonacci = function(n) {
    const t0 = performance.now();
    const fibArr = [0, 1, 1];

    if (n < 0) return "OOPS";
    if (n <= 2)return fibArr[n];

    for (let i = 3; i <= n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    const t1 = performance.now();
    console.log(t1 - t0);
    return fibArr[n];
};


// Do not edit below this line
module.exports = fibonacci;
