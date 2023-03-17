import { Link } from "react-router-dom";

export default function NewsCardAdmin({ image, date, summary }) {
  return (
    <>
      <div className="cardWrapper">
        <div className="newsImage">
          <img src={image} alt="news" className="image" />
        </div>
        <div className="data"> {date} </div>
        <div className="summary">{summary}</div>
        <div className="adminButtons">
          <Link to={"/main/editnews"}>
            <button className="edit"> Редактировать </button>
          </Link>
          <button className="delete"> Удалить </button>
        </div>
      </div>
    </>
  );
}
