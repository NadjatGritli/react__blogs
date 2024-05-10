import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import b1 from "../assets/imgs/banner1.jpg"
import b2 from "../assets/imgs/banner2.jpg"
import b3 from "../assets/imgs/banner3.jpg"

const Slider = ({ title, ids }) => {
    const imgs = [
        b1, b2, b3
    ]
    return (
        <OwlCarousel className='owl-theme' items={1} loop autoplayTimeout={5000} autoplay dots={false}>
            {ids.map((img, index) => (
                <img src={imgs[img-1]} alt="banner_img" key={title + "_" + index} className="banner_img" />
            ))}
        </OwlCarousel>
    )
}
export default Slider