import React from 'react';
import notFound from "../assets/404.svg"
import logo from '../assets/logo.svg'
import phone from '../assets/phone.svg'



const NotFound = () => {
  return (  
    <>
      <header>
        <div className="wrapper">
          
          <img src={logo} alt="" />

          <nav>
            <ul>
              <li>Главная </li>
              <a href={"/"}> 
                <li className="Monrat400"> О нас</li>
              </a> 
              <a href={"/"}> 
                <li className="Monrat400"> Новость</li>
              </a> 
              <a href={"/"}> 
                <li className="Monrat400">Галерея</li>
              </a> 
              <a href={"/"}> 
                <li className="Monrat400">Оборудование</li>
              </a>
              <a href={"/"}> 
                <li className="Monrat400">Контакты</li>
              </a> 
            </ul>
          </nav>

        </div>
      </header>
    <div className="error">
    <img
      className="404"
      src={notFound}
      alt="404"
      width={593}
      height={324}
    />
    <h2>ОШИБКА</h2>
  </div>
  </>
  )
}

export default NotFound