/**
 * @jest-environment node
 */

import {
  getNotionBooks,
  getNotionBookTopics,
  getNotionBooksByTopic,
} from '../books';

// Just using this test for testing out Notion API
describe('Books', () => {
  describe('getNotionBooks', () => {
    it('should return all book info', async () => {
      const books = await getNotionBooks();
      expect(books.length).toEqual(25);
    });
  });

  describe('getNotionBookTopics', () => {
    it('should return all book topics', async () => {
      const topics = await getNotionBookTopics();
      expect(topics.length).toBe(8);
      expect(topics).toStrictEqual([
        'People',
        'Philosophy',
        'Business',
        'Mystery',
        'SciFi',
        'Risk',
        'Habit',
        'How-To',
      ]);
    });
  });

  describe('getNotionBooksByTopic', () => {
    it('should return all books with this topic', async () => {
      const books = await getNotionBooksByTopic('Mystery');
      expect(books.length).toBe(2); // Girl on Train, Girl w/ tattoo
    });
  });
});
