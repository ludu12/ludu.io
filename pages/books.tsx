import React from 'react';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import DateFormat from '../components/common/date-format';
import { GetStaticProps } from 'next';
import { Book } from '../lib/types';
import {
  Column,
  Italic,
  List,
  ListItem,
  ListLink,
  Row,
} from '../components/shared-styled';
import { getAllBooks } from '../lib/books';
import BookCover from '../components/book/book-cover';

export const getStaticProps: GetStaticProps = async () => {
  const allBooksData = getAllBooks();
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
      <main>
        <List>
          {allBooksData.map(({ id, cover, date, title, author }) => (
            <ListItem key={id}>
              <Row align="flex-start">
                <BookCover cover={cover} title={title} />
                <Column>
                  <Link href="books/[id]" as={`/books/${id}`} passHref>
                    <ListLink>{title}</ListLink>
                  </Link>
                  <Italic>By {author}</Italic>
                  <Italic>
                    <DateFormat dateString={date} />
                  </Italic>
                </Column>
              </Row>
            </ListItem>
          ))}
        </List>
      </main>
    </Layout>
  );
};

export default Books;
