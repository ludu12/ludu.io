import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import DateFormat from '../components/common/date-format';
import Layout from '../components/layout/layout';
import {
  Column,
  Italic,
  List,
  ListItem,
  ListLink,
} from '../components/shared-styled';
import { getAllPosts } from '../lib/posts';
import { Post } from '../lib/types';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getAllPosts();
  return {
    props: {
      allPostsData,
    },
  };
};

interface PostsProps {
  allPostsData: Post[];
}

const Posts: React.FC<PostsProps> = (props) => {
  const { allPostsData } = props;
  return (
    <Layout title="Blog" url="/posts">
      <h1>Posts</h1>
      <main>
        <List>
          {allPostsData.map(({ id, date, title, summary }) => (
            <ListItem key={id}>
              <Column>
                <Link href="posts/[id]" as={`/posts/${id}`} passHref>
                  <ListLink>{title}</ListLink>
                </Link>
                <Italic>
                  <DateFormat dateString={date} />
                </Italic>
                <p>{summary}</p>
              </Column>
            </ListItem>
          ))}
        </List>
      </main>
    </Layout>
  );
};

export default Posts;
