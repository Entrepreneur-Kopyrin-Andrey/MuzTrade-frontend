import React from "react";
import mobile_folder from '../../assets/mobile/mobile_folder.svg'

export default function MobilePortfolioButton() {
  return (
    <>
      <div className="mobilebuttonWrapper">
          <a href="https://cloud.mail.ru/public/vm3D/yqMpFmy1z" className="contentButton">
            <img src={mobile_folder} alt="folder" width={130} height={130} />
          </a>
      </div>
    </>
  );
}