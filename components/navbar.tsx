import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import BurgerMenuButton from './buger-menu-button'

const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`

const Navbar: React.FC = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <Nav {...props}>
      <Link href="/">
        <a>ludu.io</a>
      </Link>
      <BurgerMenuButton
        open={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
    </Nav>
  )
}

export default Navbar
