function twoSum(numbers, target) {
  let object = {};
  let value = 0;
  for (let i = 0; i < numbers.length; i++) {
    value = target - numbers[i];
    if (object.hasOwnProperty(value) && object[value] !== i) return [object[value], i];
    object[numbers[i]] = i;
  }
}
