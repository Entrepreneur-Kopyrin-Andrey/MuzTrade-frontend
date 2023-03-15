import React from "react";
import upload from "../../../assets/upload.svg";
import { Link } from "react-router-dom";

export default function EditPhoto() {
  return (
    <>
      <div className="createWrapper">
        <h1>Редактирование картинки</h1>
        <div className="createUp">
          <div className="upload">
            <img src={upload} alt="search" width={120} height={120} />
            <p> Выберите файл из проводника для загрузки</p>
          </div>
          <textarea
            rows="10"
            placeholder="Краткое описание"
            className="summaryInput"
          />
        </div>
        <div className="createBottom_ph">
          <form className="titleContainer_ph">
            <input
              className="titleInput_ph"
              type="text"
              placeholder="Введите название"
            />
            <input className="dateInput_ph" type="date" />
          </form>

          <div className="bottomButtons_ph">
            <button className="createAdminBtn_ph"> Сохранить </button>
            <Link to={'/main/photos'}>
              <button className="cancelAdminBtn_ph"> Отменить </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
