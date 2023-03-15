import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import stars from '../assets/stars.svg'
import vk from '../assets/vk.svg'



export default function Contacts() {
  return (
    <>
      <div className="contacts" id="contacts">
        <div className="container contacts">
          <div className="contacts__header">
            <img src={stars} alt="stars" width={250} height={30} />
            <h2 className="contacts__title Neucha400">Контакты</h2>
          </div>
          <div className="contacts__content">
            <div className="contactSide">

            <div className="map">
              <YMaps>
                <Map defaultState={{ center: [68.975345, 33.088132], zoom: 15,
                    controls: ["zoomControl", "fullscreenControl"] }} width={'100%'} height={'100%'} 
                    modules={["control.ZoomControl", "control.FullscreenControl"]} >
                    <Placemark defaultGeometry={[68.975345, 33.088132]} options={{
                      iconColor: 'red',
                    }}/>
                  </Map>
              </YMaps>
            </div>

            <div className="connections">
              <p className="connections__title Monrat700">Свяжитесь с нами</p>
              <div className="connections__text connection">
                <p className="connection__phone ">
                  <span className="Monrat500">Телефон:</span> <a className="Monrat500" href="tel:+78152424373">8 815 242 43 73</a> 
                </p>
                <p className="connection__email">
                  <span className="Monrat500">E-mail:</span> <a className="Monrat500" href="mailto:ager@muztrade.com">ager@muztrade.com</a> 
                </p>
                <p className="connection__address Monrat500">
                  Мурманск, Рыбный проезд, д.8
                </p>
                <p className="connection__contactFace Monrat500">
                  <span className="Monrat500">Контактное лицо:</span>
                </p>
                <p className="connection__timetable Monrat500">
                  <span className="Monrat500">График работы:</span> Пн - Пт с 12:00 до 20:00
                  <br />
                  Сб - Вс с 12:00 до 18:00
                </p>
              </div>
              <p className="connections__p Monrat500">Мы в соц.сетях:</p>
              <a href="https://vk.com/muztrade51">
                <img
                  className="connections__vk"
                  src={vk}
                  alt="vk"
                  width={58}
                  height={58}
                />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
    <div className="contacts">
        <div className="contacts__map"></div>
        <div className="contacts__content contactsFlex">
            <p className='contactsFlex__title'>Свяжитесь с нами:</p>
            <div className='contactsFlex__connection'>

            </div>
            <p className='contactsFlex__address'>Адрес: Мурманск, Рыбный проезд, д.8</p>
            <p className='contactsFlex__vk'><Image></Image>vk.com/muztrade</p>
        </div>
      </div>
   */