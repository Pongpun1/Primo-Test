// test/merge.test.ts
import { merge } from '../src/merge';

describe('merge function', () => {
  it('should merge two sorted arrays', () => {
    const result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle empty arrays', () => {
    const result = merge([], [2, 4, 6]);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should handle arrays of different lengths', () => {
    const result = merge([1, 3, 5], [2, 4, 6, 8]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });

  it('should handle arrays with duplicates', () => {
    const result = merge([1, 2, 3], [2, 3, 4]);
    expect(result).toEqual([1, 2, 2, 3, 3, 4]);
  });
});
