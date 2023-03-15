import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NewsCard from './NewsCard'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../axios'
import { fetchNews } from '@/redux/slices/news';


export default function News() {
const dispatch = useDispatch()
const {news} = useSelector(state => state.news)

    React.useEffect(() => {
        dispatch(fetchNews())
    }, [])

    return (
      <>
          <div className="background" id='news'>
              <div className="container news">
                  <div className="news__header">
                      <Image
                          src={'/stars.svg'}
                          alt="about"
                          width={250}
                          height={30}
                      />
                      <h2 className="news__title Neucha400">Новости нашей компании</h2>
                      <Image
                          src={'/line.svg'}
                          alt="about"
                          width={114}
                          height={5}
                      />
                      <p className='Monrat400'>Мероприятия, в которых мы участвовали</p>
                  </div>
                  <div className="news__container">
                      {
                         (news.items).map((obj, index) => 
                            <NewsCard 
                             key={index}
                             title={obj.title}
                            />

                         )




                        
                      }

                      {/* <NewsCard src={'/news/news.svg'}></NewsCard>
                      <NewsCard src={'/news/news1.svg'}></NewsCard>
                      <NewsCard src={'/news/news2.svg'}></NewsCard>
                      <NewsCard src={'/news/news2.svg'}></NewsCard>
                      <NewsCard src={'/news/news1.svg'}></NewsCard>
                      <NewsCard src={'/news/news.svg'}></NewsCard> */}
                  </div>
                  <Link href={'/news/news'}><button className="news__button request Monrat400">Смотреть все новости</button></Link>
              </div>
          </div>
      </>
    );
  }

  /*
    <div className="news">
        <h3 className="news__title">Новости</h3>
        <div className="news__container">
            <div className="newsCard">
                <div className="newsCard__image"></div>
                <h3 className="newsCard__title">Дата события</h3>
                <p className="newsCard__text">Здесь следует написать 2—3 предложения, c помощью которых вы сможете кратко описать событие.</p>
                <button className="newsCard__button"></button>
            </div>
        </div>
        <button className="news__button">Читать дальше</button>
      </div>
   */
  