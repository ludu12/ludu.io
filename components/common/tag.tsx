import React from 'react';
import styled from 'styled-components';
import { hashStringToRBG } from '../helpers';

const ColoredSpan = styled.span<{ color: string }>`
  background: #${(props) => props.color};
  padding: 0.2em;
  border-radius: 0.2em;
  -webkit-text-stroke: 0.01em black;
  -webkit-text-fill-color: white;
`;

const Tag: React.FC<{ tag: string }> = (props) => {
  return (
    <ColoredSpan color={hashStringToRBG(props.tag)}>{props.tag}</ColoredSpan>
  );
};

export default Tag;
