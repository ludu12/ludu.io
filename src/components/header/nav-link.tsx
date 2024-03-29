import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { clsx } from '../../styles/utils';

interface NavLinkProps {
  text: string;
  href: string;
  emoji?: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const router = useRouter();

  // /page/path => ["", "page", "path"]
  const paths = router.asPath.split('/').map(decodeURI);
  const root = paths.slice(0, 2).join('/');
  const rest = paths.slice(2, paths.length);
  const isActive = props.href === root;

  const className = clsx('text-2xl transition hover:text-primary-600', {
    'text-primary-500': isActive,
  });

  return (
    <li>
      <Link href={props.href} passHref className={className}>
          {props.emoji} {props.text}
      </Link>
      {isActive && rest.length > 0 && (
        <i className={'text-2xl text-primary-300 font-light'}> &#x2f; {rest.join('>')}</i>
      )}
    </li>
  );
};

export default NavLink;
