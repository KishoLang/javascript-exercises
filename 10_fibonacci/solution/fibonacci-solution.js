const fibonacci = function(count) {
    const t0 = performance.now();
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    const t1 = performance.now();
    console.log(t1 - t0);
    return firstPrev;
};

module.exports = fibonacci;
