import { format, formatDistance, parseISO } from 'date-fns';
import React from 'react';

const DateFormat: React.FC<{ dateString: string, long?: boolean }> = ({ dateString, long = false }) => {
  const date = parseISO(dateString);
  const timeAgo = formatDistance(date, new Date());

  return (
    <>
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
      {long && <span> ({timeAgo} ago)</span>}
    </>);
};

export default DateFormat;
