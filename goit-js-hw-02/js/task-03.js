const findLongestWord = function (string) {
  const arr = string.split(' ');
  let tempWord = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (tempWord.length < arr[i].length) {
      tempWord = arr[i];
    }
  }
  return tempWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
