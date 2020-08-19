import React from 'react';
import Layout from '../components/layout/layout';
import { GetStaticProps } from 'next';
import { ListItem, ListLink, FlexList } from '../components/shared-styled';
import { getNotionBookTopics } from '../lib/books';
import Tag from '../components/common/tag';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const topics = await getNotionBookTopics();
  return {
    props: {
      topics,
    },
    revalidate: 1,
  };
};

const toLink = (topic) => {
  return (
    <Link href="/books/[topic]" as={`/books/${topic}`} passHref>
      <ListLink>
        <Tag key={topic} tag={topic} />
      </ListLink>
    </Link>
  );
};

const Books: React.FC<{ topics: string[] }> = (props) => {
  const { topics } = props;

  return (
    <Layout siteTitle="Books">
      <h1>Book Topics</h1>
      <p>
        I'm been curating lists of books I've read concerning various topics.
        Click on a topic to see some books I recommend.
      </p>
      <main>
        <FlexList>
          {topics.map((topic) => (
            <ListItem key={topic}>{toLink(topic)}</ListItem>
          ))}
        </FlexList>
      </main>
    </Layout>
  );
};

export default Books;
