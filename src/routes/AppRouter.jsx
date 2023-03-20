import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Auth from "../admin/auth";
import { News } from "../admin/adminPages/news/news";
import { Photos } from "../admin/adminPages/photos/photos";
import EditNews from "../admin/adminPages/news/editNews";
import EditPhoto from "../admin/adminPages/photos/editPhoto";
import CreateNews from "../admin/adminPages/news/createNews";
import CreatePhoto from "../admin/adminPages/photos/createPhoto";
import NewsCardPage from "../components/NewsCardPage";
import NewsPage from "../components/NewsPage";

import { fetchAuthUser, selectIsAuth } from "../redux/slices/auth";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import NotFound from "../components/NotFound";

const AppRouter = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Auth />} />

      <Route path="/newscard" element={<NewsCardPage />} />
      <Route path="/newspage" element={<NewsPage />} />

      {/* private */}

      <Route path="/news" element={<News />} />
      <Route path="/photos" element={<Photos />} />

      <Route path="/createnews" element={<CreateNews />} />
      <Route path="/createphoto" element={<CreatePhoto />} />

      <Route path="/editnews/:id" element={<EditNews />} />
      <Route path="/editphoto/:id" element={<EditPhoto />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
