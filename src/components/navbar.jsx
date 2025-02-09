import React from 'react';
import SVG from 'react-inlinesvg';
import { Link, useLocation } from 'react-router-dom';
import {menu} from "../utils/data";
import cn from 'classnames';

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__body">
        {Object.values(menu).length && Object.values(menu).map((item) => {

          const isActive = location.pathname === item.ROUTE;

          return (
            <Link className={cn('navbar__link', {active: isActive})} to={item.ROUTE} key={item.TITLE}>
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
