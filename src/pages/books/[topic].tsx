import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Book } from '../../lib/types';
import Layout from '../../components/layout/layout';
import { Row, List, ListItem } from '../../components/shared-styled';
import CoverArt from '../../components/common/cover-art';
import { getNotionBooksByTopic, getNotionBookTopics } from '../../lib/books';
import Tag from '../../components/common/tag';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getNotionBookTopics()).map((topic) => ({
    params: { topic },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  TopicProps,
  { topic: string }
> = async ({ params }) => {
  const books = await getNotionBooksByTopic(params?.topic as string);
  return {
    props: {
      topic: params?.topic || '',
      books,
    },
    revalidate: 1,
  };
};

interface TopicProps {
  topic: string;
  books: Book[];
}

function toTagWithSpace(text: string) {
  return (
    <>
      <Tag key={text} tag={text} />{' '}
    </>
  );
}

function toLinkTagWithSpace(text: string) {
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
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout title={'Books: ' + topic}>
        <h1>{topic}</h1>
        <article>Loading...</article>
      </Layout>
    );
  }

  return (
    <Layout title={'Books: ' + topic}>
      <h1>{topic}</h1>
      <p>
        This is a list of books I have enjoyed and recommend about the topic of{' '}
        <b>{topic}</b>.
      </p>
      <p>
        They&apos;re tagged by other relevant topics and by the media in which I
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
