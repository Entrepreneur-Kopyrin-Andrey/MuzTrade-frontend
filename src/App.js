
import './App.css';
import './styles/index.scss';
import logo from './assets/logo.svg';

function App() {
  return (
    <>
    <header>
      <div className="wrapper">
        
        <img src={logo} alt="" />

        <nav>
          <ul>
            <li>Главная </li>
            {/* <Link href={"#about"}> */}
              <li className="Monrat400"> О нас</li>
            {/* </Link> */}
            {/* <Link href={"#news"}> */}
              <li className="Monrat400"> Новость</li>
            {/* </Link> */}
            {/* <Link href={"#gallery"}> */}
              <li className="Monrat400">Галерея</li>
            {/* </Link> */}
            {/* <Link href={"#equipment"}> */}
              <li className="Monrat400">Оборудование</li>
            {/* </Link> */}
            {/* <Link href={"#contacts"}> */}
              <li className="Monrat400">Контакты</li>
            {/* </Link> */}
          </ul>
        </nav>

        <div className="number">
          {/* <Image src={"/phone.svg"} alt="phone" width={25} height={25} /> */}
          <a href="tel:+78152424373" className="phoneNumber Monrat400">
            8 (815) 242-43-73
          </a>
        </div>

        <button className="request Monrat400" 
        // onClick={
        //   ()=>handleChange()
        //   }
          >Оставить заявку
        </button>
      </div>
    </header>
    </>
  );
}

export default App;
