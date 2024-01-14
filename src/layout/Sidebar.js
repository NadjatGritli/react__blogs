import { NavLink } from "react-router-dom";
const Sidebar = ({ sidebar }) => {
    return (
        <aside className={sidebar}>
            <h3 className="sitename">
                react tuto
            </h3>
            <div className="sidebarcontent">
                <NavLink className="sidebar__link" to="/">
                    Home
                </NavLink>
                <NavLink className="sidebar__link" to="/blogs">Blogs</NavLink>

            </div>
        </aside>
    )
}
export default Sidebar;