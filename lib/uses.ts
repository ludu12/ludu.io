import { processContent, readMarkdownFileContent } from './utils';
import path from 'path';

export async function getUses() {
  const matterResult = readMarkdownFileContent(
    path.join(process.cwd(), 'markdown'),
    'uses'
  );
  const contentHtml = await processContent(matterResult.content);

  return {
    contentHtml,
    ...(matterResult.data as {
      title: string;
      description: string;
      lastUpdated: string;
    }),
  };
}
