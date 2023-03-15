import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ValueContext } from '../hooks/context'
import arrow from '../assets/arrow.svg'
import ph1 from '../assets/gallery/ph1.svg'
import ph2 from '../assets/gallery/ph2.svg'
import ph3 from '../assets/gallery/ph3.svg'
import ph4 from '../assets/gallery/ph4.svg'
import ph5 from '../assets/gallery/ph5.svg'
import ph6 from '../assets/gallery/ph6.svg'
import ph7 from '../assets/gallery/ph7.svg'
import ph8 from '../assets/gallery/ph8.svg'
import ph9 from '../assets/gallery/ph9.svg'
// создаем контекст



export default function Gallery() {

  const SlickArrowRight = () => (
      <img className='slick-next slick-arrow' src={arrow} alt="" width={145} height={145}/>
  );
  const SlickArrowLeft = () => (
      <img className='slick-prev slick-arrow' src={arrow} alt="" width={145} height={145}/>
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
        src: ph1,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph2,
        title: 'Дата ',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph3,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
    
    
      {
        src: ph4,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph5,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph6,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
    
    
      {
        src: ph7,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph8,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph9,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
  
    
      {
        src: ph1,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph2,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph3,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
    
    
      {
        src: ph4,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph5,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph6,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
    
      {
        src: ph7,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph8,
        title: 'Дата мероприятия',
        description: 'Напишите здесь краткое описание, состоящее из 2-3 предложений',
      },
      {
        src: ph9,
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
                        <img key={index} src={item.src} alt={item.title} width={516} height={385}/>
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
  
