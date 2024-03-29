import {GetStaticProps} from 'next';
import React from 'react';
import DateFormat from '../components/common/date-format';
import Layout from '../components/layout/layout';
import {Headline, Italic, List, ListItem, MainLink} from '../components/shared-styled';
import {getAllPosts} from '../lib/posts';
import {Post} from '../lib/types';

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
  const {allPostsData} = props;
  return (
      <Layout title="Blog" url="/posts">
        <Headline>Posts</Headline>
        <main>
          <List>
            {allPostsData.map(({id, date, title, summary}) => (
                <ListItem key={id}>
                  <div className={'flex flex-col'}>
                    <MainLink href="posts/[id]" as={`/posts/${id}`} passHref className={'text-2xl'}>{title}</MainLink>
                    <Italic>
                      <DateFormat dateString={date}/>
                    </Italic>
                    <p className={'py-1'}>{summary}</p>
                  </div>
                </ListItem>
            ))}
          </List>
        </main>
      </Layout>
  );
};

export default Posts;
