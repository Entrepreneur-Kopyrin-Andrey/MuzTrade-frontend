import React from "react";
import logo from '../../assets/logo.svg'
import menu from '../../assets/mobile/menu.svg'

export default function MobileHeader({ onChange }) {
  

  const handleChange = () => {
    onChange(true)
  }


  return (
    <>
      <div className="wrapper" id="wrapper">
        <img
          src={logo}
          className="logo"
          alt="logo"
          width={210}
          height={80}
        />
        <img
          src={menu}
          className="menu"
          alt="logo"
          width={17}
          height={35}
          onClick={handleChange}
        />
      </div>
    </>
  );
}
