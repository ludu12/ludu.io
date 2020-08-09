import R from 'ramda';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

// https://images-na.ssl-images-amazon.com/images/P/B001G8MA4O._LZZZZZZZ_.jpg


export const getMarkdownFilename = (filename: string) =>
  filename.replace(/\.md$/, '');

export const getMarkdownFilenames = (directory: string) => {
  const fileNames = fs.readdirSync(directory);
  return fileNames
    .filter((f) => !f.includes('_template'))
    .map(getMarkdownFilename);
};

// Use gray matter to read markdown meta info
export const readMarkdownFileContent = (directory: string, id: string) => {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return matter(fileContents);
};

// Use remark to convert markdown into HTML string
export const processContent = async (content: string) => {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
};

export function bookCover(link: string): string {
  const asin = link.match(/dp\/(.*)\/?$/);
  if (asin) {
    return `https://images-na.ssl-images-amazon.com/images/P/${asin[1]}._LZZZZZZZ_.jpg`
  }
  return 'static/images/book/placeholder.jpg'
}

export const sortByDate = R.sortBy(R.prop('date'));
export const reverse = R.reverse;
