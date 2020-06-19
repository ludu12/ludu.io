import React from 'react';
import styled from 'styled-components';
import { hashStringToRBG } from './helpers';

interface BookMediaProps {
  media: string;
}

const MediaSpan = styled.span<{ color: string }>`
  background: #${(props) => props.color};
  padding: 0.2em;
  border-radius: 0.2em;
  -webkit-text-stroke: 0.01em black;
  -webkit-text-fill-color: white;
`;

const BookMedia: React.FC<BookMediaProps> = (props) => {
  return (
    <MediaSpan color={hashStringToRBG(props.media)}>{props.media}</MediaSpan>
  );
};

export default BookMedia;
