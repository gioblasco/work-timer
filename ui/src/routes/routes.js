import { Route, Routes } from "react-router-dom";
import Month from "../pages/Month";
import TodayInfo from "../pages/TodayInfo";
import Year from "../pages/Year";

const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path='/' element={<TodayInfo/>}/>
            <Route path='/month' element={<Month/>}/>
            <Route path='/year' element={<Year/>}/>
        </Routes>
    );
}
 
export default MainRoutes;