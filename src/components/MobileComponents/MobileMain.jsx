import React from 'react'
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "../ModalVideo.jsx";
import { ValueContext } from '../../hooks/context';

export default function MobileMain() {

  const { requestModalValue, setRequestModalValue } = React.useContext(ValueContext);
  const [modalActive, setModalActive] = React.useState(false);

    return (
      <>
        <div className='main' id='main'>
          <div className="container mainWrapper mainWrapper__mobile">
            <div className="leftSide">


            <h1>Прокат сценического оборудования</h1>
            <button onClick={() => setRequestModalValue(true)} className="request">Оставить заявку</button>
            </div>

            <div className="rightSide">
            <Image
              className="waves"
              src={"/waves.svg"}
              alt="main1"
              width={179}
              height={200}
            />

            <Image
              className="main1"
              src={"/main1.svg"}
              alt="main1"
              width={396}
              height={384}
            />

            <Image
              className="main2"
              src={"/main2.svg"}
              alt="main2"
              width={396}
              height={384}
            />
            <Image
              className="plus"
              src={"/plus.svg"}
              alt="main2"
              width={110}
              height={110}
            />
            <div className="circleBtn" onClick={() => setModalActive(!modalActive)}>
              <Image
                className="infinite"
                src={"/button.svg"}
                alt="main2"
                width={200}
                height={200}
              />

              <Image
                src={"/play.svg"}
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



  