import React from 'react';
import { hashStringToRBG } from '../helpers';

const Tag: React.FC<{ tag: string }> = (props) => {
  const color = hashStringToRBG(props.tag);
  return (
    <span className={'p-1 rounded'} style={{
     background: `#${color}`,
    }}>{props.tag}</span>
  );
};

export default Tag;
