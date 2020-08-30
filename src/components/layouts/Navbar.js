import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <Link className='navbar-brand' to='/'>
          Crafts
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span>
            <i className='fa fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/printingwoodenblocks'>
                Printing Wooden Blocks
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/diykits'>
                DIY Kits
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/handcarvedWoodenCandles'>
                Hand Carved Wooden Candles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
