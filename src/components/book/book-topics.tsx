import React from 'react';
import { Book } from '../../lib/types';

const unique = (value: string, index: number, self: string[]) => {
  return self.indexOf(value) === index;
};

const BookTopics: React.FC<{ books: Book[] }> = (props) => {
  const { books } = props;
  const topics = books.reduce(
    (acc, b) => acc.concat(b.topic.split(',')),
    [] as string[]
  );

  console.log(topics.filter(unique));
  return <div />;
};

export default BookTopics;
