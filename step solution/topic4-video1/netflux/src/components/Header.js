import React from 'react';
import Logo from './Logo';

const Header = () => {
    return (
      <header className="section" role="navigation">
        <div className="container">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="navbar-burger" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <Logo />
          <ul className="navbar-menu">
            <li><a className="navbar-item active" href="/">الرئيسية</a></li>
            <li><a className="navbar-item" href="./movies.html">أفلام</a></li>
            <li><a className="navbar-item" href="./shows.html">مسلسلات</a></li>
            </ul>
          <div className="navbar-search">
            <button><i className="fas fa-search"></i></button>
            <input className="searchInput" type="text" name="search" placeholder="إبحث عن فيلم أو مسلسل..." />
					</div>
      </div>
		</header>
    );
}

export default Header;
