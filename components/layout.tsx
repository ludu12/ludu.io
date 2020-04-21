import Head from 'next/head'
import React from 'react'
import Navbar from './navbar'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`

interface LayoutProps {
  children: React.ReactNode
  siteTitle?: string
}

const Layout: React.FC<LayoutProps> = ({ children, siteTitle }) => {
  return (
    <Container>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <section>
        <main>{children}</main>
      </section>
    </Container>
  )
}

export default Layout
