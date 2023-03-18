import React from "react";
import upload from "../../../assets/upload.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../../../axios";

export default function EditNews() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [date, setDate] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const uploadFile = React.useRef(null);

  /*const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
      alert("Ошибка");
    }
  };*/

  const onClickRemove = () => {
    setImageUrl("");
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      const fields = {
        title,
        description,
        summary,
        date,
        imageUrl,
      };
      const { data } = await axios.patch(`/news/${id}`, fields);
      const _id = id;
      navigate(`/news/${_id}`);
    } catch (error) {
      console.warn(error);
      alert("Ошибка создания новости!");
    }
  };

  React.useEffect(() => {
    axios
      .get(`/news/${id}`)
      .then(({ data }) => {
        setTitle(data.title);
        setImageUrl(data.imageUrl);
        setDescription(data.description);
        setSummary(data.summary);
      })
      .catch((err) => {
        console.warn(err);
        alert("Не получли статью");
      });
  }, []);

  return (
    <>
      <div className="createWrapper">
        <h1>Редактирование новости</h1>
        <div className="createUp">
          <div className="upload">
            <img src={upload} alt="search" width={120} height={120} />
          </div>
          <textarea
            rows="10"
            placeholder="Краткое описание"
            className="summaryInput"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        <div className="createBottom">
          <textarea
            cols="60"
            rows="10"
            placeholder="Полное описание"
            className="descriptionInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <form className="titleContainer">
            <input
              className="titleInput"
              type="text"
              placeholder="Введите название"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="dateInput"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div className="bottomButtons">
              <button className="createAdminBtn" onClick={onSubmit}>
                {" "}
                Сохранить{" "}
              </button>
              <Link to={"/main/news"}>
                <button className="cancelAdminBtn"> Отменить </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
