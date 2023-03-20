import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/slices/photos";

export default function MobileGallery() {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.photos);

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <>
      <div className="gallery" id="gallery">
        <div className="container gallery">
          <h2 className="gallery__title Neucha400">
            Фотографии <br /> мероприятий
          </h2>
          <div className="gallery__photos">
            {photos.items.map((obj, index) => {
              return (
                <div key={index} className="img__link">
                  <img
                    src={"http://localhost:4444" + obj.imageUrl}
                    alt={obj.date}
                    width={516}
                    height={385}
                    s
                  />
                  <span className="img__mask">
                    <h4>{obj.date}</h4>
                    <p>{obj.summary}</p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
