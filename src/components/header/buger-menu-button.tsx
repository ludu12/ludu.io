import React from 'react';

interface BurgerProps {
  open?: boolean;
  onClick?: () => void;
}

const BurgerMenuButton: React.FC<BurgerProps> = ({ open, onClick }) => {
  return (
    <button
      className={`text-xs hamburger hamburger--spring ${
        open ? 'is-active' : ''
      }`}
      onClick={onClick}
      type="button"
      style={{
        fontSize: '0.05em',
      }}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner bg-red-50" />
      </span>
    </button>
  );
};

export default BurgerMenuButton;
