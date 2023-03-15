import React from "react";
import upload from '../../../assets/upload.svg'

export default function CreateNews() {
  return (
    <>
      <div className="createWrapper">
        <h1>Создание новости</h1>
        <div className="createUp">
          <div className="upload">
            <img src={upload} alt="upload" width={120} height={120} />
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
              <button className="createAdminBtn"> Создать </button>
              {/* <Link href="./news"> */}
                <button className="cancelAdminBtn"> Отменить </button>
              {/* </Link>s */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
