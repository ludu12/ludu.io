import { getMarkdownFilenames, processContent, readMarkdownFileContent, reverse, sortByDate } from './utils';
import path from 'path';

const booksDirectory = path.join(process.cwd(), 'markdown/books');

// Get All Book Meta info
export function getAllBooks() {
  return reverse(sortByDate(getMarkdownFilenames(booksDirectory).map((id) => {
      const matterResult = readMarkdownFileContent(booksDirectory, id);
      return {
        id,
        ...(matterResult.data as {
          title: string;
          author: string;
          date: string;
          media: string;
          mySummary: string;
          cover: string;
          link: string;
        }),
      };
    })),
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

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      author: string;
      date: string;
      media: string;
      mySummary: string;
      cover: string;
    }),
  };
}
