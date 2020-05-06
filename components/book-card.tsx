import React from 'react';
import { Paper, Row } from './shared/shared-styled';
import { Book } from '../types';
import styled from 'styled-components';

interface BookCardProps {
  book: Book
}

const Cover = styled.img`
  height: 8em;
  width: 8em;
`

const Title = styled.div`

`


const BookCard: React.FC<BookCardProps> = (props) => {
  const { book} = props;

  if(!book){
    return null;
  }

  return (
      <Paper>
        <Row>
          <Cover src={book.cover} alt={book.title}/>
          <Title>
            <h1>{book.title}</h1>
            <h3>By {book.author}</h3>
          </Title>
          <p>{book.mySummary}</p>
        </Row>
      </Paper>
    );
};

export default BookCard;
