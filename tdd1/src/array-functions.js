// 1. Function to reverse words in an array
function reverseWords(words) {
    return words.map(word => word.split('').reverse().join(''));
  }
  
  // 2. Class for number manipulation
  class NumberManipulator {
    constructor(number) {
      this._value = number;
    }
  
    multiply(num) {
      this._value *= num;
      return this;
    }
  
    add(num) {
      this._value += num;
      return this;
    }
  
    subtract(num) {
      this._value -= num;
      return this;
    }
  
    divide(num) {
      if (num === 0) {
        throw new Error('Cannot divide by zero');
      }
      this._value /= num;
      return this;
    }
  
    value() {
      return this._value;
    }
  }
  
  // 3. Function to filter out words ending in 'er'
  function filterErWords(words) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
      if (!words[i].endsWith('er')) {
        result.push(words[i]);
      }
    }
    return result;
  }
  
  export { reverseWords, NumberManipulator, filterErWords };