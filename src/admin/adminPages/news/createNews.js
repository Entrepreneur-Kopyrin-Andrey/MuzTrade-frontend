import React from "react";
import upload from "../../../assets/upload.svg";
import { Link } from "react-router-dom";
import axios from "../../../axios";
import basket from "../../../assets/basket.svg";
import { useNavigate } from "react-router-dom";

export default function CreateNews() {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");

  const [description, setDescription] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [date, setDate] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const uploadFile = React.useRef(null);

  const handleChangeFile = async (event) => {
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
  };

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
      const { data } = await axios.post("/news", fields);
      // const id = data._id
      // navigate(`/news/${id}`)
    } catch (error) {
      console.warn(error);
      alert("Ошибка создания новости!");
    }
  };

  // console.log({title, description, summary, date})
  return (
    <>
      <div className="createWrapper">
        <h1>Создание новости</h1>
        <div className="createUp">
          <div className="upload">
            {imageUrl ? (
              <>
                <div className="fileUpl">
                  <img
                    src={`http://localhost:4444${imageUrl}`}
                    alt="Upload"
                    className="uploadImg"
                  />
                  <button className="deleteImg">
                    <img
                      src={basket}
                      alt="basket"
                      width={50}
                      height={50}
                      onClick={onClickRemove}
                    />
                  </button>
                </div>
              </>
            ) : (
              <>
                <img
                  src={upload}
                  alt="upload"
                  width={120}
                  height={120}
                  onClick={() => uploadFile.current.click()}
                />
                <input
                  type="file"
                  ref={uploadFile}
                  style={{ visibility: "hidden" }}
                  onChange={handleChangeFile}
                />
                <p> Выберите файл из проводника для загрузки</p>
              </>
            )}
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
                Создать
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
