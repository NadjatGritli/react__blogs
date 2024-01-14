import { NavLink } from "react-router-dom";
import { MenuOutline, CloseCircleOutline } from 'react-ionicons'
const Header = ({ changetheme, theme, sidebar, changeSidebar }) => {
    return (
        <header className="App-header">
            <div className="headercontent">
                <button className="closebtn" onClick={() => { changeSidebar(sidebar === '' ? 'hide' : '') }}>
                    {sidebar === 'hide' ? <MenuOutline
                        color={'#00000'}
                        title={'open sidebar'}
                        height="20px"
                        width="20px"
                    /> : <CloseCircleOutline
                        color={'#00000'}
                        title={'close'}
                        height="20px"
                        width="20px"
                    />}
                </button>
                <NavLink className="header__link" to="/">
                    Home
                </NavLink>
                <NavLink className="header__link" to="/blogs">
                    Blogs
                </NavLink>
            </div>
            <div className="headerTools">
                <button onClick={() => { changetheme(theme === 'light' ? 'dark' : 'light') }}>
                    {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
                </button>
            </div>
        </header>
    );
};
export default Header;