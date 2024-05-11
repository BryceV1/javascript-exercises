const palindromes = function (word) {
    // Use only numbers/characters and convert to lowercase. Uses global flag /g
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Reverse the cleaned word
    const reversedWord = cleanedWord.split('').reverse().join('');
    
    // Check if the reversed word matches the original word
    return cleanedWord === reversedWord;
};
// Do not edit below this line
module.exports = palindromes;
