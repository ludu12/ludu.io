import React from 'react';
import Link from 'next/link';

const Brand: React.FC = () => {
  return (
    <Link href="/">
      <a className={'text-xl transition'}>ludu.io</a>
    </Link>
  );
};

export default Brand;
