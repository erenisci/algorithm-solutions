// 648. Replace Words
// https://leetcode.com/problems/replace-words/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

var replaceWords = function (dictionary, sentence) {
  let strArr = [];
  let bool = true;
  let sentenceSplit = sentence.split(' ');
  dictionary = dictionary.sort();

  for (let i = 0; i < sentenceSplit.length; i++) {
    bool = true;
    for (let j = 0; j < dictionary.length; j++) {
      if (sentenceSplit[i].startsWith(dictionary[j])) {
        strArr.push(dictionary[j]);
        bool = false;
        break;
      }
    }
    if (bool) strArr.push(sentenceSplit[i]);
  }

  return strArr.join(' ');
};
