import { processContent, readMarkdownFileContent, bookCover } from './utils';
import path from 'path';
import { Book } from './types';

export async function getAudibleBook() {
  const matterResult = readMarkdownFileContent(
    path.join(process.cwd(), 'markdown'),
    'audible'
  );
  const contentHtml = await processContent(matterResult.content);
  const bookMeta = matterResult.data as Book;
  bookMeta.cover = bookCover(bookMeta.link);
  return {
    contentHtml,
    ...bookMeta
  };
}
