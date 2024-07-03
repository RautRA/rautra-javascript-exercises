const palindromes = function (string) {
    const stringArray = string.split("");
    const reversedStringArray = [];
    const punctuations = [];
    const regex = /[^a-z0-9]/ig;

    for (let i = 0; i < stringArray.length; i++) {
        if (regex.test(stringArray[i])) {
            punctuations.push({character: stringArray[i], index: i});
            continue;
        }
        reversedStringArray.unshift(stringArray[i]);
    }
    
    punctuations.forEach(punctuation => {
        reversedStringArray.splice(punctuation.index, 0, punctuation.character);
    });

    if (reversedStringArray.join("").toLowerCase().replace(/\s/g, "") === 
        string.toLowerCase().replace(/\s/g, "")) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
