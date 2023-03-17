import { Link } from "react-router-dom";

export default function NewsCardAdmin({ src, date, summary }) {
  return (
    <>
      <div className="cardWrapper">
        <div className="newsImage">
          <img src={"http://localhost:4444" + src} alt="news" className="image" />
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
