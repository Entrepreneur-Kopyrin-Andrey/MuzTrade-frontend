import React from "react";
import Link from "next/link";
import Image from "next/image";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';



export default function MobileContacts() {
  return (
    <>
    <div className="contacts" id="contacts">
      <div className="container contacts">
        <div className="contacts__header">
            <Image src={"/stars.svg"} alt="about" width={250} height={30} />
            <h2 className="contacts__title Neucha400">Контакты</h2>
        </div>
        <div className="contacts__map">
          <YMaps  className="ymaps">
            <Map defaultState={{ center: [68.975345, 33.088132], zoom: 15,
              controls: ["zoomControl", "fullscreenControl"] }} width={'100%'} height={500} 
              modules={["control.ZoomControl", "control.FullscreenControl"]} >
              <Placemark defaultGeometry={[68.975345, 33.088132]} options={{
                iconColor: 'red',
              }}/>
            </Map>
          </YMaps>
        </div>
        <p className='contacts__posttitle Monrat700'>Свяжитесь с нами:</p>
        <div className='contacts__connection connection'>
          <p className="connection__phone">
            <span className="Monrat500">Телефон:</span> <a className="Monrat500" href="tel:+78152424373">8 815 242 43 73</a> 
          </p>
          <p className="connection__email">
            <span className="Monrat500">E-mail:</span> <a className="Monrat500" href="mailto:ager@muztrade.com">ager@muztrade.com</a> 
          </p>
          <p className="connection__address Monrat500">
            Мурманск, Рыбный проезд, д.8
          </p>
          <p className="connection__contactFace Monrat500">
            <span>Контактное лицо:</span>
          </p>
          <p className="connection__timetable Monrat500">
            <span className="Monrat500">График работы:</span> Пн - Пт с 12:00 до 20:00
            <br />
            Сб - Вс с 12:00 до 18:00
          </p>
        </div>
        <p className='contacts__p Monrat500'>Мы в соц.сетях:</p>
        <Link href={"https://vk.com/muztrade51"} className="connections__vk">
                <Image
                  src={"/vk.svg"}
                  alt="vk"
                  width={58}
                  height={58}
                />
        </Link>
      </div>
      </div>
    </>
  );
}


