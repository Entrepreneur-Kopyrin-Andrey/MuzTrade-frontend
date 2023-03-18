import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDeletePhotos } from "../../redux/slices/photos";

export default function PhotosCardAdmin({ id, src, date, summary }) {

  const dispatch = useDispatch();
  
  const onClickDelete = (id) => {
    if(window.confirm("Хотите удалить новость?"))
    {
      dispatch(fetchDeletePhotos(id))
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
          <Link to={"/main/editphoto"}>
            <button className="edit"> Редактировать </button>
          </Link>
          <button className="delete" onClick={() => onClickDelete(id)}> Удалить </button>
        </div>
      </div>
    </>
  );
}
