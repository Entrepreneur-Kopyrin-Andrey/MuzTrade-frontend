import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function MobileMenu({ value, setValue }) {
  const handleModalClick = (event) => {
    if (event.target.dataset.layout) {
      setValue(false);
    }
  };

  return (
    <>
      <div className={value ? "menuModalactive" : "menuModal"} onClick={handleModalClick}>
        <div
          className="menuClose"
          onClick={() => {
            setValue(false);
          }}
        >
          <Image src={"/menuClose.svg"} alt="" width={31} height={34}></Image>
        </div>
          <div className="menuContent">
            <Link href={"#"}>
                <p className="menuContent__p" data-layout>Главная</p>
            </Link>
            <Link href={"#about"}>
                <p className="menuContent__p" data-layout>О нас</p>
            </Link>
            <Link href={"#news"}>
                <p className="menuContent__p" data-layout>Новость</p>
            </Link>
            <Link href={"#gallery"}>
                <p className="menuContent__p" data-layout>Галерея</p>
            </Link>
            <Link href={"#equipment"}>
                <p className="menuContent__p" data-layout>Оборудование</p>
            </Link>
            <Link href={"#contacts"}>
                <p className="menuContent__p" data-layout>Контакты</p>
            </Link>
          </div>
      </div>
    </>
  );
}
