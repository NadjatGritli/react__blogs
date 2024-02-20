import { Outlet } from "react-router-dom"
import StoreHeader from "./header";
import StoreSidebar from "./sidebar";
import StoreFooter from "./footer"; 
import './Store.css';
const App_store = () => {
    return (
        <div>
            <StoreHeader />
            <StoreSidebar />
            <div className="store_index">
                <Outlet />
            </div>
            <StoreFooter />
        </div>
    )
}
export default App_store