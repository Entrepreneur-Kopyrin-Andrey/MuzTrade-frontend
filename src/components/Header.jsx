import React from "react";
import logo from "../assets/logo.svg";
import phone from "../assets/phone.svg";

export const Header = ({ onChange }) => {
  const handleChange = () => {
    onChange(true);
  };

  return (
    <>
      <header>
        <div className="wrapper">
          <img src={logo} alt="" />

          <nav>
            <ul>
              <a href={"/"}>
                <li>Главная </li>
              </a>

              <a href={"#about"}>
                <li className="Monrat400"> О нас</li>
              </a>
              <a href={"#news"}>
                <li className="Monrat400"> Новость</li>
              </a>
              <a href={"#gallery"}>
                <li className="Monrat400">Галерея</li>
              </a>
              <a href={"#equipment"}>
                <li className="Monrat400">Оборудование</li>
              </a>
              <a href={"#contacts"}>
                <li className="Monrat400">Контакты</li>
              </a>
            </ul>
          </nav>

          <div className="number">
            <img src={phone} alt="phone" width={25} height={25} />
            <a href="tel:+78152424373" className="phoneNumber Monrat400">
              8 (815) 242-43-73
            </a>
          </div>

          <button className="request Monrat400" onClick={() => handleChange()}>
            Оставить заявку
          </button>
        </div>
      </header>
    </>
  );
};
