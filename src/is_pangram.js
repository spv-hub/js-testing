const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const isPangram = function(text) {
  const letterCount = {}

  letters = text.split('');
  letters.forEach((letter) => {
    if (letterCount[letter]) {
      letterCount[letter] +=1;
    } else {
      letterCount[letter] = 1;
    }
  });

  for (const letter of ALPHA){
    if (!letterCount[letter]){
      return false
    }
  }

  return true;
};

module.exports = isPangram;
