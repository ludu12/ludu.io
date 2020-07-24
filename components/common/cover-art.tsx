import React from 'react';
import styled from 'styled-components';

interface CoverArtProps {
  title: string;
  cover: string;
}

const Cover = styled.img`
  height: 5rem;
  width: 5rem;
  margin: 0 1em 0 0;
`;

const CoverArt: React.FC<CoverArtProps> = (props) => {
  return <Cover src={props.cover} alt={props.title} />;
};

export default CoverArt;
