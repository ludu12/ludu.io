import React from 'react';
import { Book } from '../../lib/types';

const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const BookTopics: React.FC<{ books: Book[] }> = (props) => {
  const { books } = props;
  const topics = books.reduce((acc, b) => acc.concat(b.topic.split(',')), []);

  console.log(topics.filter(unique));
  return <div></div>;
};

export default BookTopics;
