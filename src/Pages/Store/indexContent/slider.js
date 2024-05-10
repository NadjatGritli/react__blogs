import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = ({ data }) => {
    return (
        <OwlCarousel className='owl-theme' items={1} loop autoplayTimeout={5000} autoplay dots={false}>
            {data.map((img, index) => (
                <img src={img} alt="banner_img" key={"img_" + index} className="banner_img" />
            ))}
        </OwlCarousel>
    )
}
export default Slider