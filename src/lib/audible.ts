import { processContent, readMarkdownFileContent, bookCover } from './utils';
import path from 'path';
import { AudibleBook } from './types';

export async function getAudibleBook() {
  const matterResult = readMarkdownFileContent(
    path.join(process.cwd(), 'src/markdown'),
    'audible'
  );
  const contentHtml = await processContent(matterResult.content);
  const bookMeta = matterResult.data as AudibleBook;
  bookMeta.cover = bookCover(bookMeta.link);
  return {
    ...bookMeta,
    contentHtml,
  };
}
