import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteNews } from "../../redux/slices/news";


export default function NewsCardAdmin({ src, date, summary, id }) {

  const dispatch = useDispatch();
  
  const onClickDelete = () => {
    if(window.confirm("Хотите удалить новость?"))
    {

      dispatch(fetchDeleteNews(id))
    }

  }

  return (
    <>
      <div className="cardWrapper">
        <div className="newsImage">
          <img src={"http://localhost:4444" + src} alt="news" className="image" />
        </div>
        <div className="data"> {date} </div>

        <div className="summary">{summary}</div>
        <div className="adminButtons">
          <Link to={`/main/editnews/${id}`}>
            <button className="edit"> Редактировать </button>
          </Link>
          <button className="delete" onClick={onClickDelete}> Удалить </button>
        </div>
      </div>
    </>
  );
}
