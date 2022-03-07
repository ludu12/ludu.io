// Use remark to convert markdown into HTML string
import { remark } from 'remark';
import html from 'remark-html';

export const processContent = async (content: string) => {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
};
