import {
  getMarkdownFilenames,
  readMarkdownFileContent,
  reverse,
  sortByDate,
} from './utils';
import path from 'path';
import { processContent } from './remark';

const postsDirectory = path.join(process.cwd(), 'src/markdown/posts');

// Get All Book Meta info
export function getAllPosts() {
  return reverse(
    sortByDate(
      getMarkdownFilenames(postsDirectory).map((id) => {
        const matterResult = readMarkdownFileContent(postsDirectory, id);
        return {
          id,
          ...(matterResult.data as {
            isDraft: boolean;
            title: string;
            date: string;
            summary: string;
            image: string;
          }),
        };
      }).filter(x => !x.isDraft)
    )
  );
}

// Get Ids
export function getAllPostIds() {
  return getMarkdownFilenames(postsDirectory).map((id) => ({ params: { id } }));
}

// Get Data
export async function getPostData(id: string) {
  const matterResult = readMarkdownFileContent(postsDirectory, id);
  const contentHtml = await processContent(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      date: string;
      summary: string;
      image: string;
    }),
  };
}
