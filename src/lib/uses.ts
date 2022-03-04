import {
  getLastUpdated,
  processContent,
  readMarkdownFileContent,
} from './utils';
import path from 'path';

export async function getUses() {
  const directory = path.join(process.cwd(), 'src/markdown');
  const matterResult = readMarkdownFileContent(directory, 'uses');
  const lastUpdated = getLastUpdated(path.join(directory, 'uses.md'));
  const contentHtml = await processContent(matterResult.content);

  return {
    contentHtml,
    lastUpdated,
    ...(matterResult.data as {
      title: string;
      description: string;
    }),
  };
}
