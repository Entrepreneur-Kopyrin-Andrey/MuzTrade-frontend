import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function MobileGallery() {

  

    return (
      <>
        <div className="gallery" id="gallery">
          <div className="container gallery">
          <h2 className="gallery__title Neucha400">Фотографии <br/> мероприятий</h2>
          <div className="gallery__photos">
                    <Image src={'/gallery/ph1.svg'} alt="" width={706} height={485}/>
                    <Image src={'/gallery/ph2.svg'} alt="" width={706} height={485}/>
                    <Image src={'/gallery/ph3.svg'} alt="" width={706} height={485}/>
                    <Image src={'/gallery/ph4.svg'} alt="" width={706} height={485}/>
                    <Image src={'/gallery/ph5.svg'} alt="" width={706} height={485}/>
                    <Image src={'/gallery/ph6.svg'} alt="" width={706} height={485}/>
                    <Image src={'/gallery/ph7.svg'} alt="" width={706} height={485}/>
                    <Image src={'/gallery/ph8.svg'} alt="" width={706} height={485}/>
                    <Image src={'/gallery/ph9.svg'} alt="" width={706} height={485}/>
          </div>
          </div>
        </div>
      </>
    );
  }


  
