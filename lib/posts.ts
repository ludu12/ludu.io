import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';
import { getMarkdownFilename, readMarkdownFileContent, sortByDate } from './utils';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = getMarkdownFilename(fileName);
    const matterResult = readMarkdownFileContent(postsDirectory, getMarkdownFilename(fileName));

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return sortByDate(allPostsData);
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(getMarkdownFilename).map(id => ({ params: { id } }));
}

export async function getPostData(id: string) {
  const matterResult = readMarkdownFileContent(postsDirectory, id);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}

