const repeatString = function(string, num) {
    const originalString = string;

    if (num === 0) {
        return '';
    } else if (num < 0) {
        return 'ERROR';
    }

    for(let i = 1; i < num; i++) {
        string += originalString;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
