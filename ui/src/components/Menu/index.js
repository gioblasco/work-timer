import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Link to="/">Hoje</Link> 
            {' '}|{' '}
            <Link to="/timesheet">Histórico</Link>
        </>
    );
}
 
export default Menu;