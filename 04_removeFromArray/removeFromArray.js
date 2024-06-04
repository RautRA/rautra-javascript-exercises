const removeFromArray = function(array, ...args) {
    args.forEach(arg => {
        // keep looping to remove multiple elements with same value
        while(array.indexOf(arg) !== -1) {
            array.splice(array.indexOf(arg), 1);
        }
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
