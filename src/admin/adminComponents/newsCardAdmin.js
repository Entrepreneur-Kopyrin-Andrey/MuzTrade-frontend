import basket from "../../assets/basket.svg";
import { Link } from "react-router-dom";

export default function NewsCardAdmin({ image, date, summary }) {
  return (
    <>
      <div className="cardWrapper">
        <div className="newsImage">
          <img src={image} alt="news" width={470} height={330} />
          <button className="delete">
            <img src={basket} alt="basket" width={50} height={50} />
          </button>
        </div>
        <div className="data"> {date} </div>
        <div className="summary">{summary}</div>
        <div className="edit">
          <Link to={"/editnews"}>
            <button> Редактировать </button>
          </Link>
        </div>
      </div>
    </>
  );
}
