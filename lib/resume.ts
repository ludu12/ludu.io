import { processContent, readMarkdownFileContent } from './utils';
import path from 'path';

export async function getResume() {
  const matterResult = readMarkdownFileContent(
    path.join(process.cwd(), 'markdown'),
    'resume'
  );
  const contentHtml = await processContent(matterResult.content);

  return {
    contentHtml,
    ...(matterResult.data as {
      title: string;
      lastUpdated: string;
      image: string;
    }),
  };
}
