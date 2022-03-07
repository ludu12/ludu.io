import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import DateFormat from '../../components/common/date-format';
import { Post } from '../../lib/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/layout/layout';
import { Headline, Italic, Thumbnail } from '../../components/shared-styled';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PostProps,
  { id: string }
> = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

interface PostProps {
  postData: Post;
}

const Id: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout title={postData.title}>
      <article>
        <Headline>{postData.title}</Headline>
        <div className={'flex flex-row items-center justify-start py-4'}>
          <Thumbnail
            src={'/static/images/profile.jpg'}
            alt={'This is a picture of me.'}
          />
          <Italic>
            <DateFormat dateString={postData.date} />
          </Italic>
        </div>
        <div className={'unreset'} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Id;
