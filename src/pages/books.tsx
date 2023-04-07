import React from 'react';
import Layout from '../components/layout/layout';
import { GetStaticProps } from 'next';
import { Headline, ListItem } from '../components/shared-styled';
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

const toLink = (topic: string) => {
  return (
    <Link href="/books/[topic]" as={`/books/${topic}`} passHref className={'text-xl'}>
        <Tag key={topic} tag={topic}/>
    </Link>
  );
};

const Books: React.FC<{ topics: string[] }> = (props) => {
  const { topics } = props;

  return (
    <Layout
      title="Books"
      url="/books"
      description="I'm been curating lists of books I've read concerning various topics."
    >
      <Headline>Book Topics</Headline>
      <p className={'py-4'}>
        I&apos;m been curating lists of books I&apos;ve read concerning various
        topics. Click on a topic to see some books I recommend.
      </p>
      <main>
        <ul className={'flex flex-wrap'}>
          {topics.map((topic) => (
            <ListItem key={topic}>{toLink(topic)}</ListItem>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Books;
