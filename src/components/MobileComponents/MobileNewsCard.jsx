import React from "react";
import { Link } from "react-router-dom";

export default function MobileNewsCard({
  src,
  title,
  description,
  date,
  summary,
}) {
  const [data, setData] = React.useState({
    title: "",
    description: "",
    src: "",
  });

  React.useEffect(() => {
    setData({
      title: title,
      description: description,
      src: src,
    });
  }, []);
  return (
    <>
      <div className="newsCard">
        <div className="newsCard__image">
          <img src={src} alt="newscard" width={385} height={268} />
        </div>
        <h3 className="newsCard__title Monrat700">{date}</h3>
        <p className="newsCard__text Monrat400"> {summary} </p>
          <button className="newsCard__button request Monrat400">
            <Link to={"/newscard"} state={{ data: data }}>
              Читать дальше
            </Link>
          </button>
      </div>
    </>
  );
}
