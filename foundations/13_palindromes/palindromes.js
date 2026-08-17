const palindromes = function (text) {
    const whitelist = "abcdefghijklmnopqrstuvwxyz123456789";
    const textArray = text.toLowerCase().split('');
    const cleanedText = textArray.filter(character => whitelist.includes(character)).join('')

    const reversedText = cleanedText.split('').reverse().join('');

    return cleanedText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
