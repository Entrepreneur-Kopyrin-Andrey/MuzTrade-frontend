import React from 'react'
import Link from "next/link";
import Image from "next/image";
import MobileNewsCard from './MobileNewsCard'


export default function MobileNews() {
    return (
      <>
      <div className="background" id="news">
        <div className="news">
          <div className="container news">
            <div className="news__header">
              <Image
                  src={'/stars.svg'}
                  alt="about"
                  width={250}
                  height={30}
              />
              <h2 className="news__title Neucha400">Новости нашей <br /> компании</h2>
              <Image
                  src={'/line.svg'}
                  alt="about"
                  width={114}
                  height={5}
              />
              <p className='Monrat400'>Мероприятия, в которых мы участвовали</p>
            </div>
            <div className="news__container">
                <MobileNewsCard src={'/news/news.svg'}></MobileNewsCard>
                <MobileNewsCard src={'/news/news1.svg'}></MobileNewsCard>
                <MobileNewsCard src={'/news/news2.svg'}></MobileNewsCard>
                <MobileNewsCard src={'/news/news2.svg'}></MobileNewsCard>
                <MobileNewsCard src={'/news/news1.svg'}></MobileNewsCard>
                <MobileNewsCard src={'/news/news.svg'}></MobileNewsCard>
            </div>
            <button className="news__button request Monrat400">Смотреть все новости</button>
        </div>
      </div>
      </div>
      </>
    );
  }


  