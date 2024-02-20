import {
    CartOutline,
    GlobeOutline,
    SearchOutline,
    ReorderThreeOutline
} from 'react-ionicons'
import logo from '../assets/imgs/0e8370aae943c10e75dba75306f10cd2.jpg'
const StoreHeader = () => {
    return (
        <div className="navbar p-2">
            <div className="left">
                <ReorderThreeOutline
                    color={'#00000'}
                    title={'Menu'}
                    height="20px"
                    width="20px"
                />
            </div>
            <div className="center">
                <img src={logo} className="header_logo" alt="logo" />
            </div>
            <div className="right">
                <GlobeOutline
                    color={'#00000'}
                    title={'Language'}
                    height="20px"
                    width="20px"
                />
                <CartOutline
                    color={'#00000'}
                    title={'cart'}
                    height="20px"
                    width="20px"
                />
                <SearchOutline
                    color={'#00000'}
                    title={'Search'}
                    height="20px"
                    width="20px"
                />
            </div>
        </div>
    )
}
export default StoreHeader