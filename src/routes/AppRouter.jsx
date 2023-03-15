import { Route, Routes } from 'react-router'
import App from '../App'
import Auth from '../admin/auth'
import Admin from '../admin/index'
import CreateNews from '../admin/adminPages/news/createNews'



const AppRouter = () => {
    return(
        <Routes>
            <Route path= '/' element={<App />} />
            <Route path= '/admin' element={<Auth />} />
            <Route path= '/main' element={<Admin />} />
            <Route path= '/createnews' element={<CreateNews />} />

            
        </Routes>
    )
}

export default AppRouter