import React, {useEffect, useState} from 'react';
import BurgerButton from "./ui/burger-button";
import {useLocation} from "react-router-dom";
import {menu} from "../utils/data";
import ReloadButton from "./ui/reload-button";

const Header = () => {

  const location = useLocation();

  const [headerTitle, setHeaderTitle] = useState('');

  useEffect(() => {
    const pageData = Object.values(menu).filter((item) => item.ROUTE === location.pathname)[0];

    if (pageData) {
      setHeaderTitle(pageData.TITLE)
    }


  }, [location]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__burger"><BurgerButton/></div>
          <div className="header__title">
            <h1>{headerTitle}</h1>
          </div>
          <div className="header__reload"><ReloadButton/></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
