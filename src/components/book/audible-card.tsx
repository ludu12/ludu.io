import React from 'react';
import { AudibleBook } from '../../lib/types';
import Card from '../common/card';
import CoverArt from '../common/cover-art';
import { FaAudible } from 'react-icons/fa';

interface AudibleCardProps {
  book: AudibleBook;
}

const AudibleCard: React.FC<AudibleCardProps> = (props) => {
  const { book } = props;

  if (!book) {
    return null;
  }

  return (
    <Card title="Audible Book" icon={<FaAudible/>}>
      <div className={'flex flex-row justify-start items-start'}>
        <CoverArt cover={book.cover} title={book.title}/>
        <div>
          <div className={'flex flex-col'}>
            <a className={'leading-tight text-primary-500 hover:text-primary-300 hover:underline'} href={book.link}>
              <strong>{book.title}</strong>
            </a>
            <span className={'italic text-xs text-gray-800'}>By {book.author}</span>
          </div>
          <small
            className={'py-1 overflow-hidden overflow-ellipsis description'}
            title={book.mySummary}
          >
            {book.mySummary}
          </small>
        </div>
      </div>
    </Card>
  );
};

export default AudibleCard;
