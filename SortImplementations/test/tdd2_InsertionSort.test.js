import { expect } from 'chai';
import { insertionSort } from '../src/InsertionSort.js';

describe('Insertion Sort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const arr = [64, 34, 25, 12, 22, 11, 90];
        expect(insertionSort([...arr])).to.deep.equal([11, 12, 22, 25, 34, 64, 90]);
    });

    it('should handle an empty array', () => {
        expect(insertionSort([])).to.deep.equal([]);
    });

    it('should handle an array with one element', () => {
        expect(insertionSort([5])).to.deep.equal([5]);
    });

    it('should handle an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(insertionSort([...arr])).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle negative numbers', () => {
        const arr = [-5, 3, -2, 0, 1];
        expect(insertionSort([...arr])).to.deep.equal([-5, -2, 0, 1, 3]);
    });
});