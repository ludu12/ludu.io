import React from 'react';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllBooksIds, getBookData } from '../../lib/books';
import { Book } from '../../lib/types';
import { Italic } from '../../components/shared/shared-styled';
import BookMedia from '../../components/book-media';
import styled from 'styled-components';

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
  bookData: Book;
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-block-end: 0;
  }
  h3 {
    margin-block-start: 0;
  }
`;

const Id: React.FC<BookProps> = ({ bookData }) => {
  return (
    <Layout siteTitle={bookData.title}>
      <article>
        <Title>
          <h1>{bookData.title}</h1>
          <h3>By {bookData.author}</h3>
        </Title>
        <Italic>
          Written on <Date dateString={bookData.startedOn} /> &middot;{' '}
          <BookMedia media={bookData.media} />
        </Italic>
        <p>
          <strong>My Summary: </strong>
          {bookData.mySummary}
        </p>
        <div dangerouslySetInnerHTML={{ __html: bookData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Id;
