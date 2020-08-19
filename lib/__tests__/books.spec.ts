/**
 * @jest-environment node
 */

import {
  getNotionBooks,
  getNotionBookTopics,
  getNotionBooksByTopic,
} from '../books';

// Just using this test for testing out reverse engineered Notion API
describe('Books', () => {
  describe('getNotionBooks', () => {
    it('should return all book info', async () => {
      const books = await getNotionBooks();
      expect(books.length).toBe(19);
    });
  });

  describe('getNotionBookTopics', () => {
    it('should return all book topics', async () => {
      const topics = await getNotionBookTopics();
      expect(topics).toStrictEqual([
        'Habit',
        'Business',
        'Fiction',
        'Science Fiction',
        'Risk',
        'Biography',
        'Technology',
        'Philosophy',
      ]);
    });
  });

  describe('getNotionBooksByTopic', () => {
    it('should return all books with this topic', async () => {
      const books = await getNotionBooksByTopic('Fiction');
      expect(books.length).toBe(1); // Girl w/ tattoo
    });
  });
});
