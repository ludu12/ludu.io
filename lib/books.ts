import {
  getMarkdownFilenames,
  processContent,
  readMarkdownFileContent,
  reverse,
  sortByDate,
  bookCover,
} from './utils';
import path from 'path';
import { Book } from './types';

const booksDirectory = path.join(process.cwd(), 'markdown/books');

// Get All Book Meta info
export function getAllBooks() {
  return reverse(
    sortByDate(
      getMarkdownFilenames(booksDirectory).map((id) => {
        const matterResult = readMarkdownFileContent(booksDirectory, id);
        const bookMeta = matterResult.data as Book;
        bookMeta.cover = bookCover(bookMeta.link);
        return {
          id,
          ...bookMeta
        };
      })
    )
  );
}

// Get Ids
export function getAllBookIds() {
  return getMarkdownFilenames(booksDirectory).map((id) => ({ params: { id } }));
}

// Get Data
export async function getBookData(id: string) {
  const matterResult = readMarkdownFileContent(booksDirectory, id);
  const contentHtml = await processContent(matterResult.content);
  const bookMeta = matterResult.data as Book;
  bookMeta.cover = bookCover(bookMeta.link)

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...bookMeta,
  };
}
