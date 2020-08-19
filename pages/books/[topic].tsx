import React from 'react';
import { Book } from '../../lib/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/layout/layout';
import { Row, List, ListItem } from '../../components/shared-styled';
import CoverArt from '../../components/common/cover-art';
import { getNotionBooksByTopic, getNotionBookTopics } from '../../lib/books';
import Tag from '../../components/common/tag';
import Link from 'next/link';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getNotionBookTopics()).map((topic) => ({
    params: { topic },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const books = await getNotionBooksByTopic(params.topic as string);
  return {
    props: {
      topic: params.topic,
      books,
    },
  };
};

interface TopicProps {
  topic: string;
  books: Book[];
}

function toTagWithSpace(text) {
  return (
    <>
      <Tag key={text} tag={text} />{' '}
    </>
  );
}

function toLinkTagWithSpace(text) {
  return (
    <>
      <Link href="/books/[topic]" as={`/books/${text}`} passHref>
        <a>
          <Tag key={text} tag={text} />
        </a>
      </Link>{' '}
    </>
  );
}

const Topic: React.FC<TopicProps> = (props) => {
  const { topic, books } = props;
  return (
    <Layout siteTitle={'Books: ' + topic}>
      <h1>{topic}</h1>
      <p>
        This is a list of books I have enjoyed and recommend about the topic of{' '}
        <b>{topic}</b>.
      </p>
      <p>
        They're tagged by other relevant topics and by the media in which I
        consumed it.
      </p>
      <br />
      <article>
        <List>
          {books.map((book) => (
            <ListItem key={book.name}>
              <Row align="flex-start">
                <CoverArt cover={book.cover} title={book.name} height={7} />
                <div>
                  <a href={book.url}>{book.name}</a>
                  <p>Topic: {book.topic.split(',').map(toLinkTagWithSpace)}</p>
                  <p>Media: {book.media.split(',').map(toTagWithSpace)}</p>
                </div>
              </Row>
            </ListItem>
          ))}
        </List>
      </article>
    </Layout>
  );
};

export default Topic;
