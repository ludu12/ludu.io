import * as React from 'react';
import styled from 'styled-components';

interface BurgerProps {
  open?: boolean;
  onClick?: () => void;
}

const StyledBurgerMenu = styled.button<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 0 0 1em;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2em;
    height: 0.25rem;
    background: ${(props) => props.theme.main.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${(props) => (props.open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const BurgerMenuButton: React.FC<BurgerProps> = ({ open, onClick }) => {
  return (
    <StyledBurgerMenu open={open} onClick={onClick}>
      <div />
      <div />
      <div />
    </StyledBurgerMenu>
  );
};

export default BurgerMenuButton;
