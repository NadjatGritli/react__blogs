import { Outlet } from "react-router-dom"
import Sidebar from './Sidebar';
import Header from './Header';
import { useState } from "react";


const Mainlayout = () => {
    const [theme, setTheme] = useState('dark')
    function changetheme(theme) {
        setTheme(theme)
    }
    const [sidebar, setSidebar] = useState('hide')
    function changeSidebar(sidebar) {
        setSidebar(sidebar)
    }
    return (
        <div className={`body ${theme}`}>
            <Header changetheme={changetheme} theme={theme} sidebar={sidebar} changeSidebar={changeSidebar} />
            <main>
                <Sidebar changetheme={changetheme} theme={theme} sidebar={sidebar} />
                <div className="maincontainer">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
export default Mainlayout