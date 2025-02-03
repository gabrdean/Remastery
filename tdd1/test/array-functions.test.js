import { expect } from 'chai';
import { reverseWords, NumberManipulator, filterErWords } from '../src/array-functions.js';

describe('Array Functions', () => {
  // Test suite for reverseWords
  describe('reverseWords', () => {
    it('should reverse all words in an array', () => {
      expect(reverseWords(['hello', 'world'])).to.deep.equal(['olleh', 'dlrow']);
    });

    it('should handle empty array', () => {
      expect(reverseWords([])).to.deep.equal([]);
    });

    it('should handle single letter words', () => {
      expect(reverseWords(['a', 'b'])).to.deep.equal(['a', 'b']);
    });
  });

  // Test suite for NumberManipulator
  describe('NumberManipulator', () => {
    let num;

    beforeEach(() => {
      num = new NumberManipulator(5);
    });

    it('should multiply numbers correctly', () => {
      expect(num.multiply(2).value()).to.equal(10);
    });

    it('should add numbers correctly', () => {
      expect(num.add(3).value()).to.equal(8);
    });

    it('should subtract numbers correctly', () => {
      expect(num.subtract(2).value()).to.equal(3);
    });

    it('should divide numbers correctly', () => {
      expect(num.divide(2).value()).to.equal(2.5);
    });

    it('should be able to handle a string of operations', () => {
      expect(num.multiply(2).add(3).subtract(1).divide(2).value()).to.equal(6);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => num.divide(0)).to.throw('Cannot divide by zero');
    });
  });

  // Test suite for filterErWords
  describe('filterErWords', () => {
    it('should remove words ending in "er"', () => {
      expect(filterErWords(['runner', 'fast', 'jumper', 'skip']))
        .to.deep.equal(['fast', 'skip']);
    });

    it('should handle empty array', () => {
      expect(filterErWords([])).to.deep.equal([]);
    });

    it('should handle array with no "er" words', () => {
      expect(filterErWords(['fast', 'quick', 'agile']))
        .to.deep.equal(['fast', 'quick', 'agile']);
    });

    it('should handle array with all "er" words', () => {
      expect(filterErWords(['runner', 'jumper', 'walker']))
        .to.deep.equal([]);
    });
  });
});