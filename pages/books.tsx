import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import { getFinishedBooks } from '../lib/books';
import { Book } from '../lib/types';
import {
  Italic,
  List,
  ListItem,
  ListLink,
} from '../components/shared/shared-styled';

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
      <List>
        {allBooksData.map(({ id, startedOn, title, author }) => (
          <ListItem key={id}>
            <Link href="/books/[id]" as={`/books/${id}`} passHref>
              <ListLink>{title}</ListLink>
            </Link>
            <br />
            <Italic>
              By {author} &middot; Written <Date dateString={startedOn} />
            </Italic>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default Books;
