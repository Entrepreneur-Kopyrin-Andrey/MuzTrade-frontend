import React from "react";
import upload from "../../../assets/upload.svg";
import { Link } from "react-router-dom";

export default function EditNews() {
  return (
    <>
      <div className="createWrapper">
        <h1>Редактирование новости</h1>
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

        <div className="createBottom">
          <textarea
            cols="60"
            rows="10"
            placeholder="Полное описание"
            className="descriptionInput"
          />

          <form className="titleContainer">
            <input
              className="titleInput"
              type="text"
              placeholder="Введите название"
            />
            <input className="dateInput" type="date" />
            <div className="bottomButtons">
              <button className="createAdminBtn"> Сохранить </button>
              <Link to={'/main/news'}>
                <button className="cancelAdminBtn"> Отменить </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
