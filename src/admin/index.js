import React from "react";
import Menu from "./adminComponents/menu";
import { Route, Link, Routes } from "react-router-dom";
import { News } from "./adminPages/news/news";
import { Photos } from "./adminPages/photos/photos";


function Admin() {
  return (
    <div className="wrapperMenu">
       < Menu />
      <div className="routes">
        <Routes>
          <Route path="/main/news" element={<News />} />
          <Route path="/main/photos" element={<Photos />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
