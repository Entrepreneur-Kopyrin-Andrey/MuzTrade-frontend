import React from "react";
import "./App.css";
import "./styles/index.scss";
import logo from "./assets/logo.svg";

import About from "./components/About";
import News from "./components/News";
import Gallery from "./components/Gallery";
import Equipment from "./components/Equipment";
import Contacts from "./components/Contacts";
import Main from "./components/Main";
// import { MainLayout } from "@/layout/MainLayout";
// import { MobileLayout } from "@/layout/MobileLayout";
import useWindowSize from "./hooks/useWindowSize";
import MobileAbout from "./components/MobileComponents/MobileAbout";
import MobileNews from "./components/MobileComponents/MobileNews";
import MobileGallery from "./components/MobileComponents/MobileGallery";
import MobileEquipment from "./components/MobileComponents/MobileEquipment";
import MobileMain from "./components/MobileComponents/MobileMain";
import MobileContacts from "./components/MobileComponents/MobileContacts";
import { ValueContext } from "./hooks/context";

import { Header } from "./components/Header";
import  MobileHeader  from "./components/MobileComponents/MobileHeader";
import Footer from "./components/Footer";
import PortfolioButton from "./components/PortfolioButton";
import RequestModal from './components/Modal/RequestModal';
import ImageModal from './components/Modal/ImageModal';

function App() {
  const [width, height] = useWindowSize();
  const [valueSrc, setValueSrc] = React.useState("");
  const [modalValue, setModalValue] = React.useState(true);
  const [requestModalValue, setRequestModalValue] = React.useState(false);


  const handleChange = (value) => {
    setRequestModalValue(value)
  }

  const modalClose = (value) => {
    setModalValue(value)
  }
  return (
    <>
      <ValueContext.Provider
        value={{
          valueSrc,
          setValueSrc,
          modalValue,
          setModalValue,
          requestModalValue,
          setRequestModalValue,
        }}
      >
        {width > 1024 ? (
          <>
            <Header  onChange={handleChange}/>
            <PortfolioButton />
            <Main />
            <About />
            <News /> 
            <Gallery />
            <Equipment />
            <Contacts />
            <Footer />
          </>
        ) : (
          <>
            <MobileHeader />
            <MobileMain />
            <MobileAbout />
            <MobileNews />
            <MobileGallery/>
            <MobileEquipment/>
            <MobileContacts />
          </>
        )}
        { requestModalValue && <RequestModal setValue={setRequestModalValue} value={requestModalValue}></RequestModal> }
        { modalValue && valueSrc && <ImageModal modalClose={modalClose} valueSrc={valueSrc}></ImageModal>}
      </ValueContext.Provider>
    </>
  );
}

export default App;
