import { readMarkdownFileContent } from './utils';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

const resumeDirectory = path.join(process.cwd(), 'resume');

export async function getResume() {
  const matterResult = readMarkdownFileContent(resumeDirectory, 'resume');

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...(matterResult.data as {
      title: string;
      lastUpdated: string;
      image: string;
    }),
  };
}
