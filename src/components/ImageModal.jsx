import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Slider } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageModal({modalClose, valueSrc}) {

  const handleModalClick = event => {
    if (event.target.dataset.layout) {
        modalClose(false)
    }
  }
    return (
      <>
      <div className="imageBackground" onClick={handleModalClick} data-layout>
            <div className="requestClose" onClick={()=>{modalClose(false)}}><Image src={'/close.svg'} alt="" width={31} height={34}></Image></div>
        <div className="imageModal">
            <Image src={valueSrc} width={700} height={700} alt=""/>              
        </div>
        </div>
      </>
    );
  }


  /*
  const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Image src={'/arrow.svg'} alt="" width={145} height={145}/>,
        prevArrow: <Image src={'/arrow.svg'} alt="" width={145} height={145}/>
      };

      <Slider {...settings}>
                <Image src={valueSrc} width={700} height={700} alt=""/>

            </Slider>
  */
