import React from 'react';
import SVG from "react-inlinesvg";

const ReloadButton = () => {

  const handleClick = () => {
    window.location.reload();
  }

  return (
    <button onClick={handleClick} className="reload-button">
      <SVG src={"/images/icons/reload.svg"} title="Reload" />
    </button>
  );
};

export default ReloadButton;
