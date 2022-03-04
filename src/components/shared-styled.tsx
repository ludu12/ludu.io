import React from 'react';
import { clsx } from '../styles/utils';

export const Container: React.FC = (props) => {
  const { children } = props;
  const className = clsx('flex flex-wrap overflow-hidden p-4 border rounded');
  return <div className={className}>{children}</div>;
};

export const Paper: React.FC = (props) => {
  const { children } = props;
  const className = clsx(
    'flex overflow-hidden p-4 m-1 border rounded shadow-lg'
  );
  return <div className={className}>{children}</div>;
};

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => {
  const { children } = props;
  const className = clsx(
    'p-2 text-white bg-primary-500 rounded transition focus:outline-none disabled:bg-gray-500'
  );
  return <div className={className}>{children}</div>;
};

export const List: React.FC = (props) => {
  const { children } = props;
  return <ul>{children}</ul>;
};

export const FlexList: React.FC = (props) => {
  const { children } = props;
  const className = clsx('flex flex-wrap');

  return <ul className={className}>{children}</ul>;
};

export const ListItem: React.FC = (props) => {
  const { children } = props;
  const className = clsx('flex m-4');

  return <li className={className}>{children}</li>;
};

export const ListLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = (
  props
) => {
  const { children } = props;
  const className = clsx('text-lg');

  return <li className={className}>{children}</li>;
};

export const Thumbnail: React.FC<React.HTMLProps<HTMLImageElement>> = (
  props
) => {
  const { children } = props;
  const className = clsx('h-8 w-2 rounded-2xl mr-4');

  return <li className={className}>{children}</li>;
};

export const Italic: React.FC = (props) => {
  const { children } = props;
  const className = clsx('text-gray-500');

  return <i className={className}>{children}</i>;
};
