import React from 'react';
import Layout from '../../components/layout/layout';
import DateFormat from '../../components/common/dateFormat';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllBookIds, getBookData } from '../../lib/books';
import { Book } from '../../lib/types';
import { Italic } from '../../components/shared-styled';
import BookMedia from '../../components/book/book-media';
import styled from 'styled-components';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBookIds();
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
      <Title>
        <h1>{bookData.title}</h1>
        <h3>By {bookData.author} <a href={bookData.link}>&#x2192;</a></h3>
      </Title>
      <Italic>
        <BookMedia media={bookData.media}/>
        {' '} &#x2f; {' '}
        <DateFormat dateString={bookData.date} long/>
      </Italic>
      <p>
        <strong>My Summary: </strong>
        {bookData.mySummary}
        <br/>
      </p>
      <main>
        <div dangerouslySetInnerHTML={{ __html: bookData.contentHtml }}/>
      </main>
    </Layout>
  );
};

export default Id;
