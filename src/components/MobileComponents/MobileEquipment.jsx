import React from 'react'
import Link from "next/link";
import Image from "next/image";


export default function MobileEquipment() {
    return (
      <>
      <div className="equipment" id="equipment">
        <div className="container equipment">
        <h2 className="equipment__title Neucha400">Оборудования</h2>
        <p className="equipment__text Monrat400">
            В нашей компании найдется оптимальное решение 
            по аренде звука и света для мероприятий любого 
            масштаба. Наш принцип —предлагать клиенту 
            комплексную услугу: прокат звукового и светового 
            оборудования — c доставкой и монтажом, без 
            «самовывоза» и «поштучной аренды». Это позволяет 
            нам гарантировать высокое качество услуги «аренда 
            звука и света», а клиентам — экономить финансы и 
            получать гарантии — ведь мы контролируем 
            техническое обеспечение на всех этапах: от 
            составления спецификаций
            до монтажа и обслуживания.
        </p>
        <p className="equipment__textLink Monrat400">Список предлагаемого оборудование можно <Link className='Monrat400' href={'/'}>скачать</Link></p>
        <div className="equipment__photos">
                <Image
                    src={'/sound.svg'}
                    alt="about"
                    width={396}
                    height={384}
                />
                <Image
                    src={'/scene.svg'}
                    alt="about"
                    width={396}
                    height={384}
                />
                <Image
                    src={'/light.svg'}
                    alt="about"
                    width={396}
                    height={384}
                />
                <Image
                  src={'/equipment.svg'}
                  alt="about"
                  width={396}
                  height={384}
                />
              </div>
      </div>
      </div>
      </>
    );
  }
