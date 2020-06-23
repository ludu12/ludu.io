import { processContent, readMarkdownFileContent } from './utils';
import path from 'path';

export async function getAudibleBook() {
  const matterResult = readMarkdownFileContent(path.join(process.cwd(), 'markdown'), 'audible');
  const contentHtml = await processContent(matterResult.content);

  return {
    contentHtml,
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
}
