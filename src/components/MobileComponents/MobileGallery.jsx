import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/slices/photos";
import { ValueContext } from '../../hooks/context'

export default function MobileGallery() {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.photos);

  const { setValueSrc } = React.useContext(ValueContext)
  const { setModalValue } = React.useContext(ValueContext)

  const handleImage = (src) => {
    setValueSrc(src)
    setModalValue(true)
  }

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
                <div key={index} className="img__link" onClick={() => handleImage(obj.imageUrl)}>
                  <img
                    src={"http://localhost:4444" + obj.imageUrl}
                    alt={obj.date}
                    width={516}
                    height={385}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
