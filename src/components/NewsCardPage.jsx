import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function NewsCard() {

    const location = useLocation();

    const data = location.state?.data;

    const navigate = useNavigate();

    return (
        <>
            <header className="newsCardHeader">
                <div className="newsCardWrapper">
                    <img
                    src={logo}
                    className="logo"
                    alt="logo"
                    width={210}
                    height={80}
                    />
                    <button onClick={() => navigate(-1)} className="request">Вернуться</button>
                </div>
            </header>
            <div className="newsCardPage">
                <h3 className="newsCardPage__title Monrat500">{data.title}</h3>
                <div className="newsCardPage__image">
                    <img
                        src={'http://localhost:4444' + data.src}
                        alt="newscard"
                        width={485}
                        height={268}
                    />
                </div>
                <p className="newsCardPage__text Monrat400">
                    {data.description}
                </p>
            </div>
        </>
    );
}

