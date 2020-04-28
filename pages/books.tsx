import React from 'react';
import Layout from '../components/layout';
import { getSortedBooksData, getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allBooksData = getSortedBooksData();
  return {
    props: {
      allBooksData,
    },
  };
};

interface BooksProps {
  allBooksData: {
    date: string
    title: string
    id: string
  }[]
}

const Books: React.FC<BooksProps> = ({ allBooksData }) => {
  return (
    <Layout siteTitle="Posts">
      <h1>Books</h1>
      <ul>
        {allBooksData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href="/books/[id]" as={`/books/${id}`}>
              <a>{title}</a>
            </Link>
            <br/>
            <small>
              <Date dateString={date}/>
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Books;
