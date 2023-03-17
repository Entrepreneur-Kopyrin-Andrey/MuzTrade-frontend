import React from 'react'
import { toggleTracks } from 'react-html5video/dist';


export default function NewsCard({src, summary, date, imageUrl}) {
    return (
        <>
            <div className="newsCard">
                <div className="newsCard__image">
                    <img
                        src={imageUrl}
                        alt="newscard"
                        width={485}
                        height={268}
                    />
                </div>
                <h3 className="newsCard__title Monrat700">{date}</h3>
                {/* <p className="newsCard__text Monrat400">Здесь следует написать 2—3 предложения, c помощью которых вы сможете кратко описать событие.</p> */}
                <p className="newsCard__text Monrat400"> {summary} </p>

                <a href={'/news/newscard'}><button className="newsCard__button request Monrat400">Читать дальше</button></a>
            </div>
        </>
    );
}

