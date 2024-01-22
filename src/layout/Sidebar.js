import { NavLink } from "react-router-dom";
import { SunnyOutline, MoonOutline } from 'react-ionicons'
const Sidebar = ({ changetheme, theme, sidebar }) => {
    return (
        <aside className={sidebar}>
            <h3 className="nadjHeader">
                Nadjat GRITLI
                <button className={"switchThemebtn "+theme} type="button" onClick={() => { changetheme(theme === 'light' ? 'dark' : 'light') }}>
                    {theme === 'dark' ? <MoonOutline
                        color={'#00000'}
                        title={'Light'}
                        height="20px"
                        width="20px"
                    /> : <SunnyOutline
                        color={'#00000'}
                        title={'Light'}
                        height="20px"
                        width="20px"
                    />}
                </button>
            </h3>
            <div className="sidebarcontent">
                <NavLink className="sidebar__link" to="/">
                    Home
                </NavLink>
                <NavLink className="sidebar__link" to="/blogs">Blogs</NavLink>
                <NavLink className="sidebar__link" to="/weather">Weather</NavLink>
            </div>
            <div className="sidebarTools">

            </div>
        </aside>
    )
}
export default Sidebar;