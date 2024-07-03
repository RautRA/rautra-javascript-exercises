const fibonacci = function(num) {
    num = Number(num);

    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    }

    const fibonacciSeq = [];
    for(let i = 0; i < num; i++) {
        if (i <= 1) {
            fibonacciSeq.push(1);
        } else {
            fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
        }
    }

    return fibonacciSeq[fibonacciSeq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
