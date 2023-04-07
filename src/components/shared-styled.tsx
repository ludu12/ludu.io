import React from 'react';
import {clsx} from '../styles/utils';
import Link, {LinkProps} from "next/link";

export const Container: React.FC = (props) => {
  const {children} = props;
  const className = clsx('flex flex-wrap overflow-hidden p-4 border rounded');
  return <div className={className}>{children}</div>;
};

export const Paper: React.FC = (props) => {
  const {children} = props;
  const className = clsx(
      'flex overflow-hidden p-4 m-1 border rounded shadow-lg',
  );
  return <div className={className}>{children}</div>;
};

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => {
  const {children} = props;
  const className = clsx(
      'p-2 text-white bg-primary-500 rounded transition focus:outline-none disabled:bg-gray-500',
  );
  return <div className={className}>{children}</div>;
};

export const List: React.FC = (props) => {
  const {children} = props;
  return <ul>{children}</ul>;
};

export const ListItem: React.FC = (props) => {
  const {children} = props;
  const className = clsx('flex my-4 mr-4');

  return <li className={className}>{children}</li>;
};

interface MainLinkProps extends LinkProps {
  className?: string
}

export const MainLink: React.FC<MainLinkProps> = (
    props,
) => {
  const {children, className, ...rest} = props;
  const clsxName = clsx('transition text-primary-500 hover:text-primary-600', className);

  return (
      <Link {...rest} className={clsxName}>
        {children}
      </Link>
  )
};

export const Thumbnail: React.FC<React.HTMLProps<HTMLImageElement>> = (
    props,
) => {
  const className = clsx('h-8 w-8 rounded-2xl mr-4');

  return <img alt={props.alt} src={props.src} className={className}/>
};

export const Italic: React.FC = (props) => {
  const {children} = props;
  const className = clsx('text-gray-500');

  return <i className={className}>{children}</i>;
};

export const Headline: React.FC = (props) => {
  const {children} = props;
  const className = clsx(
      'text-3xl font-bold my-2',
  );
  return <h1 className={className}>{children}</h1>;
};
