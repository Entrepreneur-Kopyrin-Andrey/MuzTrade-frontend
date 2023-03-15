import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useContext, createContext } from 'react'
import { ValueContext } from '../hooks/context'
// создаем контекст



export default function Gallery() {

  const SlickArrowRight = () => (
      <Image className='slick-next slick-arrow' src={'/arrow.svg'} alt="" width={145} height={145}/>
  );
  const SlickArrowLeft = () => (
      <Image className='slick-prev slick-arrow'  src={'/arrow.svg'} alt="" width={145} height={145}/>
  );

  const { setValueSrc } = React.useContext(ValueContext)
  const { setModalValue } = React.useContext(ValueContext)

  const handleImage = (src) => {
    setValueSrc(src)
    setModalValue(true)
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    nextArrow: <SlickArrowRight/>,
    prevArrow: <SlickArrowLeft/>
  };
  
  
  const data = [
    
      {
        src: '/gallery/ph1.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph2.svg',
        title: 'Дата ',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph3.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
    
    
      {
        src: '/gallery/ph4.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph5.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph6.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
    
    
      {
        src: '/gallery/ph7.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph8.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph9.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
  
    
      {
        src: '/gallery/ph1.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph2.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph3.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
    
    
      {
        src: '/gallery/ph4.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph5.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph6.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
    
      {
        src: '/gallery/ph7.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph8.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: '/gallery/ph9.svg',
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
  ]


    return (
      <>
        <div className="gallery" id="gallery">
          <div className="container gallery">
            <h2 className='Neucha400'>Фотографии мероприятий</h2>
            <Slider {...settings}>
              {data.map((item, index) => {
                 return(
                      <div className="img__link" onClick={() => handleImage(item.src)}>
                        <Image key={index} src={item.src} alt={item.title} width={516} height={385}/>
                        <span className="img__mask">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </span>
                      </div>
                  )
              })}
          </Slider>
          </div>
        </div>
      </>
    );
  }
  
