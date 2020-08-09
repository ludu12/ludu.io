/**
 * @jest-environment node
 */

import { getNotionBooks } from '../books';

// Just using this test for testing out reverse engineered Notion API
describe('Books', () => {
  describe('getNotionBooks', () => {
    it('should return all book info', async () => {
      const books = await getNotionBooks();
      expect(books.length).toBe(19); 
    });
  });
});
