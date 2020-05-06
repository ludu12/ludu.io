import fs from 'fs';
import { getMarkdownFilename, readMarkdownFileContent, sortByFinishedOn, sortByStartedOn } from './utils';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

const booksDirectory = path.join(process.cwd(), 'books');

function getAllBooks() {
  const fileNames = fs.readdirSync(booksDirectory);
  return fileNames.map((fileName) => {
    const matterResult = readMarkdownFileContent(booksDirectory, getMarkdownFilename(fileName));
    return {
      id: getMarkdownFilename(fileName),
      ...(matterResult.data as { title: string, author: string, startedOn: string, finishedOn: string, media: string, mySummary: string, cover: string }),
    };
  });
}

export function getFinishedBooks() {
  return sortByFinishedOn(getAllBooks().filter(book => !Boolean(book.finishedOn)));
}

export function getLatestAudibleBook() {
  let audibleBooks = sortByStartedOn(getAllBooks().filter(book => book.media === 'Audible'));

  if(audibleBooks){
    return audibleBooks[0];
  }

  return null;
}

export function getAllBooksIds() {
  const fileNames = fs.readdirSync(booksDirectory);
  return fileNames.map(getMarkdownFilename).map(id => ({ params: { id } }));
}

export async function getBookData(id: string) {
  const matterResult = readMarkdownFileContent(booksDirectory, id);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string, author: string, startedOn: string, finishedOn: string, media: string, mySummary: string, cover: string }),
  };
}


