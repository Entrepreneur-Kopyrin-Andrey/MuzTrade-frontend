import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const NewPageHeader = () => {
    
    const navigate = useNavigate();

    return (
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
  )
}

export default NewPageHeader