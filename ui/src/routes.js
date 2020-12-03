import { Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Timesheet from './pages/Timesheet';

const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/timesheet' element={<Timesheet/>}/>
        </Routes>
    );
}
 
export default MainRoutes;