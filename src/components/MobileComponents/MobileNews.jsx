import React from 'react'
import MobileNewsCard from './MobileNewsCard'
import stars from '../../assets/stars.svg'
import line from '../../assets/line.svg'
import news from '../../assets/news/news.svg'
import news1 from '../../assets/news/news1.svg'
import news2 from '../../assets/news/news2.svg'

export default function MobileNews() {
    return (
      <>
      <div className="background" id="news">
        <div className="news">
          <div className="container news">
            <div className="news__header">
              <img
                  src={stars}
                  alt="about"
                  width={250}
                  height={30}
              />
              <h2 className="news__title Neucha400">Новости нашей <br /> компании</h2>
              <img
                  src={line}
                  alt="about"
                  width={114}
                  height={5}
              />
              <p className='Monrat400'>Мероприятия, в которых мы участвовали</p>
            </div>
            <div className="news__container">
                <MobileNewsCard src={news}></MobileNewsCard>
                <MobileNewsCard src={news1}></MobileNewsCard>
                <MobileNewsCard src={news2}></MobileNewsCard>
                <MobileNewsCard src={news2}></MobileNewsCard>
                <MobileNewsCard src={news1}></MobileNewsCard>
                <MobileNewsCard src={news}></MobileNewsCard>
            </div>
            <button className="news__button request Monrat400">Смотреть все новости</button>
        </div>
      </div>
      </div>
      </>
    );
  }


  