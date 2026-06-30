import { arrayReplace } from './arrayReplace';

describe('arrayReplace', () => {
    it('should replace all occurrences of a number with another number', () => {
        const data = [1, 2, 1];
        const response = arrayReplace(data, 1, 3);
        expect(response).toEqual([3, 2, 3]);
    });

    it('should return same array when element to replace is not found', () => {
        const data = [1, 2, 3, 4];
        const response = arrayReplace(data, 5, 10);
        expect(response).toEqual([1, 2, 3, 4]);
    });

    it('should handle array with all elements matching', () => {
        const data = [2, 2, 2];
        const response = arrayReplace(data, 2, 5);
        expect(response).toEqual([5, 5, 5]);
    });

    it('should handle array with no elements matching', () => {
        const data = [1, 3, 5, 7];
        const response = arrayReplace(data, 2, 4);
        expect(response).toEqual([1, 3, 5, 7]);
    });

    it('should handle substitution element equal to element to replace', () => {
        const data = [1, 2, 3];
        const response = arrayReplace(data, 1, 1);
        expect(response).toEqual([1, 2, 3]);
    });

    it('should handle multiple different values correctly', () => {
        const data = [3, 5, 2, 4, 5];
        const response = arrayReplace(data, 5, 9);
        expect(response).toEqual([3, 9, 2, 4, 9]);
    });

    it('should not modify original array (immutability)', () => {
        const data = [1, 2, 1];
        const originalCopy = [...data];
        arrayReplace(data, 1, 3);
        expect(data).toEqual(originalCopy);
    });

    it('should handle minimum constraints (array length 2)', () => {
        const data = [1, 1];
        const response = arrayReplace(data, 1, 5);
        expect(response).toEqual([5, 5]);
    });

    it('should handle maximum constraints (array length 10)', () => {
        const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const response = arrayReplace(data, 5, 10);
        expect(response).toEqual([0, 1, 2, 3, 4, 10, 6, 7, 8, 9]);
    });

    it('should handle edge values (0 and 10)', () => {
        const data = [0, 5, 10];
        const response = arrayReplace(data, 5, 10);
        expect(response).toEqual([0, 10, 10]);
    });
});