import React from 'react';
import Link from 'next/link';
import { clsx } from '../../styles/utils';

const Brand: React.FC = () => {
  const className = clsx('text-3xl transition text-primary-500 hover:text-primary-600');

  return (
    <Link href="/" className={className}>
      ludu.io
    </Link>
  );
};

export default Brand;
