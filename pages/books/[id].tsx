import React from 'react';
import Layout from '../../components/layout';
import { getAllBooksIds, getBookData } from '../../lib/posts';
import Date from '../../components/date';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBooksIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bookData = await getBookData(params.id as string);
  return {
    props: {
      bookData,
    },
  };
};

interface BookProps {
  bookData: {
    title: string
    date: string
    contentHtml: string
  }
}

const Book: React.FC<BookProps> = ({ bookData }) => {
  return (
    <Layout siteTitle={bookData.title}>
      <article>
        <h1>{bookData.title}</h1>
        <div>
          <Date dateString={bookData.date}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: bookData.contentHtml }}/>
      </article>
    </Layout>
  );
};

export default Book;
