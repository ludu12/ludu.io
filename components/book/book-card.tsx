import React from 'react';
import { Column, Container, Row } from '../shared-styled';
import { Book } from '../../lib/types';
import styled from 'styled-components';
import BookCover from './book-cover';

interface BookCardProps {
  book: Book;
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.small`
  margin: 0.5em 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const BookCard: React.FC<BookCardProps> = (props) => {
  const { book } = props;

  if (!book) {
    return null;
  }

  return (
    <Container>
      <Row align="flex-start">
        <BookCover cover={book.cover} title={book.title} />
        <Column>
          <Title>
            <strong>{book.title}</strong>
            <small>
              <i>By {book.author}</i>
            </small>
          </Title>
          <Description>{book.mySummary}</Description>
        </Column>
      </Row>
    </Container>
  );
};

export default BookCard;
