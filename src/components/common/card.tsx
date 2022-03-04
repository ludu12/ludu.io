import React from 'react';
import { Paper } from '../shared-styled';

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const { title, children } = props;
  return (
    <Paper>
      <div className={'flex-1 h-32 min-w-[15rem]'}>
        <div className={'flex flex-row pb-2 items-center justify-between'}>
          <h2 className={'text-2xl font-bold'}>{title}</h2>
          {props.icon}
        </div>
        {children}
      </div>
    </Paper>
  );
};

export default Card;
