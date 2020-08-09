import React from 'react';
import styled from 'styled-components';

interface CoverArtProps {
  title: string;
  cover: string;
  height?: number;
}

const Cover = styled.img`
  height: ${(props) => (props.height ? props.height : 5)}rem;
  width: 5rem;
  margin: 0 1em 0 0;
`;

const CoverArt: React.FC<CoverArtProps> = (props) => {
  return <Cover src={props.cover} alt={props.title} height={props.height} />;
};

export default CoverArt;
