import React from 'react';

interface CoverArtProps {
  title: string;
  cover: string;
  height?: number;
}

const CoverArt: React.FC<CoverArtProps> = (props) => {
  const { height, cover, title} = props;
  return (
    <img
      className={`h-[${height}rem] w-[5rem] mr-4`}
      src={cover}
      alt={title}
      height={height}
    />
  );
};

export default CoverArt;
