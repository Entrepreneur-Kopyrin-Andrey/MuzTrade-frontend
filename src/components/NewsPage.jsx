import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NewsCard from './NewsCard'


export default function NewsPage() {

    const data = [
        {
            src: '/news/news.svg'
        },
        {
            src: '/news/news1.svg'
        },
        {
            src: '/news/news2.svg'
        },
        {
            src: '/news/news2.svg'
        },
        {
            src: '/news/news1.svg'
        },
        {
            src: '/news/news.svg'
        },
        {
            src: '/news/news1.svg'
        },
        {
            src: '/news/news2.svg'
        },
        {
            src: '/news/news2.svg'
        },
        {
            src: '/news/news1.svg'
        },
        {
            src: '/news/news.svg'
        },
        {
            src: '/news/news1.svg'
        },
        {
            src: '/news/news2.svg'
        },
        {
            src: '/news/news1.svg'
        },
        {
            src: '/news/news.svg'
        },
    ]

    const [count, setCount] = React.useState(6);
    const [countBool, setCountBool] = React.useState(false);

    const countClick =() => {
        count + 3 >= data.length ? setCountBool(true) : setCountBool(false) 
        setCount(count+3);
    }
    

    return (
      <>
          <div className="background backgroundPage">
              <div className="container news newsPage">
                  <div className="news__header">
                      <h2 className="news__title newsPage__title Neucha400">Новости нашей компании</h2>
                  </div>
                  <div className="news__container newsPage__container">
                        {data.filter((item, idx) => idx < count).map((item, idx) => {
                            return(
                                <>
                                  <NewsCard src={item.src}></NewsCard>    
                              </>
                          )
                        })}
                  </div>
                  
                  <button className={countBool ? "none" : "news__button request Monrat400"} onClick={()=>countClick()}>Еще новости</button>
              </div>
          </div>
      </>
    );
  }
  