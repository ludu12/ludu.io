/**
 * @jest-environment node
 */

import { flattenAndGetDistinctValues } from '../utils';

// Just using this test for testing out reverse engineered Notion API
describe('Utils', () => {
  describe('flattenAndGetDistinctValues', () => {
    it('should return only unique values and flatten array', () => {
      const arr = [
        ['apple', 'banana', 'cat'],
        ['apple', 'donkey', 'elephant'],
        ['falcon', 'giraffe', 'cat'],
      ];
      expect(flattenAndGetDistinctValues(arr)).toStrictEqual([
        'apple',
        'banana',
        'cat',
        'donkey',
        'elephant',
        'falcon',
        'giraffe',
      ]);
    });
  });
});
