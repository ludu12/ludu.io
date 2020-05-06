import React from 'react';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../lib/types';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

interface PostProps {
  postData: Post
}

const Id: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout siteTitle={postData.title}>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
      </article>
    </Layout>
  );
};

export default Id;
