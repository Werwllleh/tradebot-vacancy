import React, {useState} from 'react';
import cn from "classnames";

const BurgerButton = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <button onClick={handleClick} className={cn('burger-button', {active: isActive})}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BurgerButton;
