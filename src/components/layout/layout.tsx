import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import NavLink from '../header/nav-link';
import Footer from './footer';
import BurgerMenuButton from '../header/buger-menu-button';
import Brand from '../header/brand';

const Links: { href: string; text: string }[] = [
  { href: '/', text: 'Home' },
  { href: '/books', text: 'Books' },
  { href: '/posts', text: 'Posts' },
  { href: '/uses', text: 'Uses' },
];

const MobileNavMenu: React.FC<{ open: boolean }> = (props) => {
  // Hack for delayed open
  const [open, setOpen] = React.useState<boolean>(props.open);
  React.useEffect(() => {
    setTimeout(() => setOpen(props.open), 5);
  }, [props.open]);

  return (
    <div
      className={`transition-all duration-500 absolute top-0 left-0 bg-white w-full z-10 ${
        props.open ? 'visible' : 'hidden'
      }`}
    >
      <div
        className={`transition-all duration-500 ease-in-out bg-pale-pink-600 overflow-hidden ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <nav
          className={'flex flex-col items-center w-full h-screen pt-20 text-xl'}
        >
          <ul className={`px-4 ${mainClass}`}>
            {Links.map((l, i) => (
              <NavLink key={i} {...l} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mainClass = 'w-full max-w-3xl p-4';

interface LayoutProps {
  title?: string;
  url?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { title = 'Luke Dunscombe', url = '', description = '' } = props;
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();
  React.useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  const URL = `https://ludu.io${url}`;
  return (
    <>
      <Head>
        <title>{`${props.title} - ludu.io`}</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
      </Head>
      <NextSeo
        title={`${title} - ludu.io`}
        description={description}
        canonical={URL}
        openGraph={{
          url: URL,
          title: title,
          description,
        }}
      />
      <div
        className={`flex flex-col items-center w-full ${
          open ? 'fixed' : ''
        }`}
      >
        <header className="w-full flex justify-center items-center z-20">
          <div className={mainClass}>
            <div className="flex justify-between items-center">
              <div className="flex">
                <Brand/>
              </div>
              <div>
                <BurgerMenuButton onClick={() => setOpen(!open)} open={open}/>
              </div>
            </div>
          </div>
        </header>
        <MobileNavMenu open={open}/>
        <div className={`${mainClass} relative`}>
          {props.children}
        </div>
        <div className={mainClass}>
          <Footer/>
        </div>
      </div>
    </>
  );
};
export default Layout;
