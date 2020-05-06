import React from 'react';
import { Column, Paper, Row } from './shared/shared-styled';
import { Book } from '../lib/types';
import styled from 'styled-components';

interface BookCardProps {
  book: Book
}

const Cover = styled.img`
  height: 7em;
  width: 7em;
  align-self: center;
  margin: 0 1em 0 0;
`;

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
    <Paper>
      <Row align='flex-start'>
        <Cover src={book.cover} alt={book.title}/>
        <Column>
          <Title>
            <strong>{book.title}</strong>
            <small>By {book.author}</small>
          </Title>
          <Description>{book.mySummary}</Description>
        </Column>
      </Row>
    </Paper>
  );
};

export default BookCard;
