import { Route, Routes } from "react-router";
import App from "../App";
import Auth from "../admin/auth";
import { News } from "../admin/adminPages/news/news";
import { Photos } from "../admin/adminPages/photos/photos";
import EditNews from "../admin/adminPages/news/editNews";
import EditPhoto from "../admin/adminPages/photos/editPhoto";
import CreateNews from "../admin/adminPages/news/createNews";
import CreatePhoto from "../admin/adminPages/photos/createPhoto";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Auth />} />
      <Route path="/main" element={<News />} />
      <Route path="/createnews" element={<CreateNews />} />
      <Route path="/createphoto" element={<CreatePhoto />} />

      <Route path="/editnews" element={<EditNews />} />
      <Route path="/editphoto" element={<EditPhoto />} />

      <Route path="/main/news" element={<News />} />
      <Route path="/main/photos" element={<Photos />} />
    </Routes>
  );
};

export default AppRouter;
