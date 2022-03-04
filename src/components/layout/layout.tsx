import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import NavLink from '../header/nav-link';
import Footer from './footer';
import BurgerMenuButton from '../header/buger-menu-button';
import Brand from '../header/brand';
import DarkModeButton from '../header/dark-mode-button';

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
      className={`transition-all duration-500 absolute top-0 left-0 w-full z-40 ${
        props.open ? 'visible' : 'hidden'
      }`}
    >
      <div
        className={`transition-all duration-500 ease-in-out bg-pale-pink-600 overflow-hidden ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <nav
          className={
            'flex flex-col items-center text-center w-full h-screen pt-32 text-xl'
          }
        >
          {Links.map((l, i) => (
            <NavLink key={i} {...l} />
          ))}
        </nav>
      </div>
    </div>
  );
};

const mainClass = 'w-full max-w-6xl p-4';

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
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
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
        className={`flex flex-col items-center w-full py-16 ${
          open ? 'fixed' : ''
        }`}
      >
        <header className="bg-pale-pink-600 w-full flex shadow-lg justify-center fixed h-20 top-0 z-50">
          <div className={mainClass}>
            <nav className={'mt-auto mr-10'}>
              <div className={'flex flex-row items-center justify-between'}>
                <Brand />
                <div className={'flex flex-row items-center'}>
                  <DarkModeButton />
                  <BurgerMenuButton
                    onClick={() => setOpen(!open)}
                    open={open}
                  />
                </div>
              </div>
            </nav>
            <div className="flex justify-between items-center">
              <div className="flex">
                <Brand />
                <nav className={'hidden md:flex ml-4'}>
                  {Links.map((l, i) => (
                    <NavLink key={i} {...l} />
                  ))}
                </nav>
              </div>
              <div className={'md:hidden'}>
                <BurgerMenuButton onClick={() => setOpen(!open)} open={open} />
              </div>
            </div>
          </div>
        </header>
        <MobileNavMenu open={open} />
        <div className={`${mainClass} pt-8`}>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
