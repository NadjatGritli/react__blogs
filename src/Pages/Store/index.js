import $ from "jquery"

import b1 from "./assets/imgs/banner1.jpg"
import b2 from "./assets/imgs/banner2.jpg"
import b3 from "./assets/imgs/banner3.jpg"
import Slider from "./indexContent/slider";
import Categories from "./indexContent/categoriesList";
const Index = () => {
    return (
        <div>
            <section>
                <Slider data={[b1,b2,b3]} />
            </section>
        </div>
    )
}
export default Index