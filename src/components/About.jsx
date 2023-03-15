import React from 'react'

import galka from '../assets/galka.svg'
import phone from '../assets/phone.svg'
import about from '../assets/about.svg'




export default function About() {
    return (
      <>
        <div className='about' id='about'>
          <div className="container about">
            <h2 className="about__title Neucha400">Информация о нас</h2>
            <div className="about__content content">
                <div className="content__image">
                  <img 
                    src={about}
                    alt="about"
                    width={751}
                    height={523}
                  />
                </div>
                <ul className="content__list">
                  <li className="list__li"><img src={galka} alt="about" width={25} height={25}/><span className='Monrat400'>Широкий ассортимент товаров для начинающих и профессиональных музыкантов любого возраста</span></li>
                  <li className="list__li"><img src={galka} alt="about" width={25} height={25}/><span className='Monrat400'>“MuzTrade” является официальным дилером мировых брендов Fender, Ibanez, Gibson, Casio, AKG, Shure, Korg, Bose, Tamа, Zildjian и многих других.</span></li>
                  <li className="list__li"><img src={galka} alt="about" width={25} height={25}/><span className='Monrat400'>Надёжный поставщик музыкальных товаров</span></li>
                  <li className="list__li"><img src={galka} alt="about" width={25} height={25}/><span className='Monrat400'>Комплексное техническое сопровождение объектов любого уровня сложности</span></li>
                </ul>
            </div>
            <div className="about__posttitle postTitle">
              <p className="postTitle__text Monrat700">Оставьте <span className='redline'>заявку</span> или позвоните по контактному номеру</p>
              <div className="postTitle__phone">
                <img src={phone} alt="phone" width={25} height={25} />
                <span className="phone redline"> <a className='Monrat700' href="tel:+78152424373">8 (815) 242-43-73</a></span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


  /*
    <div className='about'>
        <div className="about__image"></div>
        <div className="about__video"></div>
        <div className="about__text">
            <h3>О нас</h3>
            <p>В магазине MuzTrade вы можете приобрести 
            музыкальные инструменты и необходимые музыканту 
            аксессуары, оборудование для студий и концертный 
            звук от ведущих мировых производителей. Приходя к 
            нам, любой желающий имеет возможность детально 
            ознакомиться с работой оборудования, оценить 
            звучание инструмента, получить квалифицированную 
            консультацию профессионалов. На всю продукцию 
            распространяется гарантийное и постгарантийное 
            обслуживание. Широкий, постоянно обновляющийся 
            ассортимент, высочайший уровень сервиса. 
            Возможность персонального заказа делает выбор 
            приятным и лёгким как для новичка, так и для профи.
            </p>
        </div>
      </div>
   */
  