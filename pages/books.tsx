import React from 'react';
import Layout from '../components/layout/layout';
import { GetStaticProps } from 'next';
import { Book } from '../lib/types';
import { List, ListItem, Row } from '../components/shared-styled';
import CoverArt from '../components/common/cover-art';
import { getNotionBooks } from '../lib/books';
import Tag from '../components/common/tag';

export const getStaticProps: GetStaticProps = async () => {
  const books = await getNotionBooks();
  return {
    props: {
      books,
    },
    revalidate: 1,
  };
};

const Books: React.FC<{ books: Book[] }> = (props) => {
  const { books } = props;
  return (
    <Layout siteTitle="Books">
      <h1>Books</h1>
      <p>
        This is a list of books I have enjoyed. They're tagged by topic and by
        the media in which I consumed it.
      </p>
      <main>
        <List>
          {books.map((book) => (
            <ListItem key={book.name}>
              <Row align="flex-start">
                <CoverArt cover={book.cover} title={book.name} height={7} />
                <div>
                  <a href={book.url}>{book.name}</a>
                  <p>
                    Topic:{' '}
                    {book.topic.split(',').map((t) => {
                      return <Tag key={t} tag={t} />;
                    })}
                  </p>
                  <p>
                    Media:{' '}
                    {book.media.split(',').map((m) => {
                      return <Tag key={m} tag={m} />;
                    })}
                  </p>
                </div>
              </Row>
            </ListItem>
          ))}
        </List>
      </main>
    </Layout>
  );
};

export default Books;
