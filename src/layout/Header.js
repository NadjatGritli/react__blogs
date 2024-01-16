import { NavLink } from "react-router-dom";
import { MenuOutline, CloseCircleOutline, SunnyOutline, MoonOutline } from 'react-ionicons'
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
                <button className={"switchThemebtn "+theme}  onClick={() => { changetheme(theme === 'light' ? 'dark' : 'light') }}>
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
            </div>
        </header>
    );
};
export default Header;