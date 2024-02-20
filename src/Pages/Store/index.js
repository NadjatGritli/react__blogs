import $ from "jquery"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import b1 from "./assets/imgs/banner1.jpg"
import b2 from "./assets/imgs/banner2.jpg"
import b3 from "./assets/imgs/banner3.jpg"
const Index = () => {
    return (
        <div>
            <section>
                <OwlCarousel className='owl-theme' items={1} loop autoplayTimeout={5000} autoplay dots={false}>
                    <img src={b1} alt="" className="banner_img" />
                    <img src={b2} alt="" className="banner_img" />
                    <img src={b3} alt="" className="banner_img" />
                </OwlCarousel>
                {/* <div className="d-flex banner_container">

                </div> */}
            </section>
        </div>
    )
}
export default Index