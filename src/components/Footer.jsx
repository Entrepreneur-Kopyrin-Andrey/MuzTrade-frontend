import React from "react";
import logo from '../assets/logo.svg'
import vk from '../assets/vk.svg'
import phone from '../assets/phone.svg'

export default function Footer() {
  return (
    <footer>
      <div className="footerWrap">
        <div className="logo">
          <img src={logo} alt="logo" width={306} height={86} />
        </div>

        <div className="info Monrat400">Прокат сценического оборудования</div>

        <div className="cont">
          <div className="number">
            <img src={phone} alt="phone" width={25} height={25} />
            <a href="tel:+78152424373" className="phoneNumber">
              8 (815) 242-43-73
            </a>
          </div>
          <a href={"https://vk.com/muztrade51"}>
            <img
              className="vk"
              src={vk}
              alt="vk"
              width={58}
              height={58}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
