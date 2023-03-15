import React from 'react'
import ph1 from '../../assets/gallery/ph1.svg'
import ph2 from '../../assets/gallery/ph2.svg'
import ph3 from '../../assets/gallery/ph3.svg'
import ph4 from '../../assets/gallery/ph4.svg'
import ph5 from '../../assets/gallery/ph5.svg'
import ph6 from '../../assets/gallery/ph6.svg'
import ph7 from '../../assets/gallery/ph7.svg'
import ph8 from '../../assets/gallery/ph8.svg'
import ph9 from '../../assets/gallery/ph9.svg'

export default function MobileGallery() {

  

    return (
      <>
        <div className="gallery" id="gallery">
          <div className="container gallery">
          <h2 className="gallery__title Neucha400">Фотографии <br/> мероприятий</h2>
          <div className="gallery__photos">
                    <img src={ph1} alt="" width={706} height={485}/>
                    <img src={ph2} alt="" width={706} height={485}/>
                    <img src={ph3} alt="" width={706} height={485}/>
                    <img src={ph4} alt="" width={706} height={485}/>
                    <img src={ph5} alt="" width={706} height={485}/>
                    <img src={ph6} alt="" width={706} height={485}/>
                    <img src={ph7} alt="" width={706} height={485}/>
                    <img src={ph8} alt="" width={706} height={485}/>
                    <img src={ph9} alt="" width={706} height={485}/>
          </div>
          </div>
        </div>
      </>
    );
  }


  
