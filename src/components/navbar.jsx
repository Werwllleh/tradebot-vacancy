import React from 'react';
import {MENU} from "../utils/data";
import SVG from 'react-inlinesvg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__body">
        {MENU.length && MENU.map((item) => {

          const isActive = location.pathname === item.ROUTE;

          return (
            <Link className={`navbar__link ${isActive ? 'active' : ''}`} to={item.ROUTE} key={item.TITLE}>
              <span className="navbar__link-icon">
                <SVG src={`/images/icons/navbar/${item.IMAGE}`} title={item.TITLE} />
              </span>
              <p className="navbar__link-title">{item.TITLE}</p>
            </Link>
          )
        })}
      </div>
    </nav>
  );
};

export default Navbar;
