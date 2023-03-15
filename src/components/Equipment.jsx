import React from "react";
import sound from '../assets/sound.svg'
import scene from '../assets/scene.svg'
import light from '../assets/light.svg'
import equipment from '../assets/equipment.svg'
import file from '../assets/Price.pdf'


export default function Equipment() {
  
  return (
    <>
      <div className="equipment" id="equipment">
        <div className="container equipment">
          <h2 className="equipment__title Neucha400">Оборудования</h2>
          <p className="equipment__text Monrat400">
            В нашей компании найдется оптимальное решение по аренде звука и
            света для мероприятий любого масштаба.
          </p>
          <p className="equipment__textLink">
            Список предлагаемого оборудование можно{" "}
            <span className="textLink">
              <a className="download Monrat400" href={file} download="Price.pdf" >скачать</a>
            </span>
          </p>
          <div className="equipment__photos">
            <img src={sound} alt="sound" width={396} height={384} />
            <img src={scene} alt="scene" width={396} height={384} />
            <img src={light} alt="light" width={396} height={384} />
            <img
              src={equipment}
              alt="equipment"
              width={396}
              height={384}
            />
          </div>
        </div>
      </div>
    </>
  );
}
