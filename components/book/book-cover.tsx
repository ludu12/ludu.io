import React from 'react';
import styled from 'styled-components';

interface BookCoverProps {
  cover: string;
  title: string;
}

const Cover = styled.img`
  height: 6em;
  width: 6em;
  align-self: center;
  margin: 0 1em 0 0;
`;

const BookCover: React.FC<BookCoverProps> = (props) => {
  return <Cover src={props.cover} alt={props.title} />;
};

export default BookCover;
