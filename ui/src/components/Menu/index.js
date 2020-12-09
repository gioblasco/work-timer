import { NavLink } from "react-router-dom";
import './Menu.css';

const Menu = () => {
    return (
        <>
            <NavLink to="/" activeClassName="selected" className="button" end>hoje</NavLink>
            <NavLink to="/timesheet" activeClassName="selected" className="button">mês</NavLink>
            <NavLink to="/teste" activeClassName="selected" className="button">ano</NavLink>
        </>
    );
}
 
export default Menu;