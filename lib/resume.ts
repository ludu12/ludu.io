import {
  getLastUpdated,
  processContent,
  readMarkdownFileContent,
} from './utils';
import path from 'path';

export async function getResume() {
  const directory = path.join(process.cwd(), 'markdown');
  const matterResult = readMarkdownFileContent(directory, 'resume');
  const lastUpdated = getLastUpdated(path.join(directory, 'resume.md'));
  const contentHtml = await processContent(matterResult.content);

  return {
    contentHtml,
    lastUpdated,
    ...(matterResult.data as {
      title: string;
      image: string;
    }),
  };
}
