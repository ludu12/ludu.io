import path from 'path';
import remark from 'remark';
import html from 'remark-html';
import { getMarkdownFilenames, readMarkdownFileContent, sortByDate } from './utils';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const allPostsData = getMarkdownFilenames(postsDirectory).map(id => {
    const matterResult = readMarkdownFileContent(postsDirectory, id);
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return sortByDate(allPostsData);
}

export function getAllPostIds() {
  return getMarkdownFilenames(postsDirectory).map(id => ({ params: { id } }));
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

