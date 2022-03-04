import React from 'react';

interface CoverArtProps {
  title: string;
  cover: string;
  height?: number;
}

const CoverArt: React.FC<CoverArtProps> = (props) => {
  return <img className={`h-[5rem] w-[5rem] mr-4`} src={props.cover} alt={props.title} height={props.height} />;
};

export default CoverArt;
