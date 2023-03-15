import React from 'react'
import Link from "next/link";
import Image from "next/image";


export default function MobileNewsCard({src}) {
    return (
        <>
            <div className="newsCard">
                <div className="newsCard__image">
                    <Image
                        src={src}
                        alt="newscard"
                        width={385}
                        height={268}
                    />
                </div>
                <h3 className="newsCard__title Monrat700">Дата события</h3>
                <p className="newsCard__text Monrat400">Здесь следует написать 2—3 предложения, c помощью которых вы сможете кратко описать событие.</p>
                <button className="newsCard__button request Monrat400">Читать дальше</button>
            </div>
        </>
    );
}

