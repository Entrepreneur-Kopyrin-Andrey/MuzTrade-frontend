import { Route, Routes } from 'react-router'
import App from '../App'
import Auth from '../admin/auth'
import Admin from '../admin/index'
import CreateNews from '../admin/adminPages/news/createNews'
import { News } from "../admin/adminPages/news/news";
import { Photos } from "../admin/adminPages/photos/photos";


const AppRouter = () => {
    return(
        <Routes>
            <Route path= '/' element={<App />} />
            <Route path= '/admin' element={<Auth />} />
            <Route path= '/main' element={<News />} />
            <Route path= '/createnews' element={<CreateNews />} />
            <Route path="/main/news" element={<News />} />
            <Route path="/main/photos" element={<Photos />} />
        </Routes>
    )
}

export default AppRouter