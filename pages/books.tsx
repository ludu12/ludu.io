import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import { getFinishedBooks } from '../lib/books';
import { Book } from '../lib/types';

export const getStaticProps: GetStaticProps = async () => {
  const allBooksData = getFinishedBooks();
  return {
    props: {
      allBooksData,
    },
  };
};

interface BooksProps {
  allBooksData: Book[];
}

const Books: React.FC<BooksProps> = (props) => {
  const { allBooksData } = props;
  return (
    <Layout siteTitle="Books">
      <h1>Books</h1>
      <ul>
        {allBooksData.map(({ id, startedOn, title }) => (
          <li key={id}>
            <Link href="/books/[id]" as={`/books/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={startedOn} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Books;
