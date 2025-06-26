import React from 'react';
import './Header.css';

const Header = ({ scrollToMenu }) => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order now, enjoy your favorite meal.</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
        </p>
        <button onClick={scrollToMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
