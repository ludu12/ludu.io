import React from 'react';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllBooksIds, getBookData } from '../../lib/books';
import { Book } from '../../lib/types';

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
  bookData: Book
}

const Id: React.FC<BookProps> = ({ bookData }) => {
  return (
    <Layout siteTitle={bookData.title}>
      <article>
        <h1>{bookData.title}</h1>
        <div>
          <Date dateString={bookData.startedOn}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: bookData.contentHtml }}/>
      </article>
    </Layout>
  );
};

export default Id;
