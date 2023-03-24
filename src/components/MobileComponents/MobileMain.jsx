import React from 'react'
import ModalVideo from "../Modal/ModalVideo.jsx";
import waves from '../../assets/waves.svg'
import plus from '../../assets/plus.svg'
import button from '../../assets/button.svg'
import play from '../../assets/play.svg'
import { Link } from 'react-router-dom';
import main from '../../assets/main.png'

export default function MobileMain() {

  const [modalActive, setModalActive] = React.useState(false);

    return (
      <>
        <div className='main' id='main'>
          <div className="container mainWrapper mainWrapper__mobile">
            <div className="leftSide">
              <h1>Прокат сценического оборудования</h1>
              <Link to="requestpage">
                <button className="request">Оставить заявку</button>
              </Link>
            </div>

            <div className="rightSide">
            <img
              className="waves"
              src={waves}
              alt="main1"
              width={179}
              height={200}
            />
            {/*
            <img
              className="main1"
              src={main1}
              alt="main1"
              width={396}
              height={384}
            />

            <img
              className="main2"
              src={main2}
              alt="main2"
              width={396}
              height={384}
            />*/}
            <img
              className="main"
              src={main}
              alt="main"
            />
            <img
              className="plus"
              src={plus}
              alt="main2"
              width={110}
              height={110}
            />
            <div className="circleBtn" onClick={() => setModalActive(!modalActive)}>
              <img
                className="infinite"
                src={button}
                alt="main2"
                width={200}
                height={200}
              />

              <img
                src={play}
                className="play"
                alt="main2"
                width={40}
                height={40}
              />
              {
                modalActive && (<ModalVideo />)
              }
            </div>
          </div>

          </div>
        </div>
      </>
    );
  }



  