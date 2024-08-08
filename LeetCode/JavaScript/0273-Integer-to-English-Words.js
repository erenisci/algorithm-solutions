// 273. Integer to English Words
// https://leetcode.com/problems/integer-to-english-words/description/

/**
 * @param {number} num
 * @return {string}
 */

var numberToWords = function (num) {
  if (num === 0) return 'Zero';

  const thousands = ['', 'Thousand', 'Million', 'Billion'];
  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = [
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  function helper(n) {
    if (n === 0) return '';
    else if (n < 10) return units[n] + ' ';
    else if (n < 20) return teens[n - 10] + ' ';
    else if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
    else return units[Math.floor(n / 100)] + ' Hundred ' + helper(n % 100);
  }

  let result = '';
  for (let i = 0; i < thousands.length; i++) {
    if (num % 1000 !== 0) {
      result = helper(num % 1000) + thousands[i] + ' ' + result;
    }
    num = Math.floor(num / 1000);
  }

  return result.trim();
};
