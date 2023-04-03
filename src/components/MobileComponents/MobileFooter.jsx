import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import phone from '../../assets/phone.svg'
import vk from '../../assets/vk.svg'

export default function MobileFooter() {
  return (
    <footer>
      <div className="footerWrap">
        <div className="footerWrap__left">
            <div className="logo">
            <img src={logo} alt="logo" width={306} height={86} />
            </div>

            <div className="info Monrat400">Прокат сценического оборудования</div>
        </div>
        <div className="footerWrap__right">
          <div className="number">
            <img src={phone} alt="phone" width={25} height={25} />
            <a href="tel:+78152424373" className="phoneNumber">
              8 (815) 242-43-73
            </a>
          </div>
          <Link href={"https://vk.com/muztrade"} className="vk">
            <img
              className="vk"
              src={vk}
              alt="vk"
              width={58}
              height={58}
            />
          </Link>
        </div>
      </div>
      <p className="copyright">© 2023 Все права защищены</p>
    </footer>
  );
}