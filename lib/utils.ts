import R from 'ramda';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const getMarkdownFilename = (filename: string) => filename.replace(/\.md$/, '');

export const getMarkdownFilenames = (directory: string) => {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map(getMarkdownFilename);
};

export const readMarkdownFileContent = (directory: string, id: string) => {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return matter(fileContents);
};

export const sortByDate = R.sortBy(R.prop('date'));
export const sortByStartedOn = R.sortBy(R.prop('startedOn'));
export const sortByFinishedOn = R.sortBy(R.prop('finishedOn'));
