import $ from "jquery"
import { useLoaderData } from "react-router-dom";

import Slider from "./indexContent/slider";
import Categories from "./indexContent/categoriesList";
import ProductList from "./indexContent/productList";
import Brands from "./indexContent/brandList";

const Index = () => {
    const sections = useLoaderData();
    return (
        <div>
            {sections.map((item, index) => {
                switch (item.type) {
                    case "slider":
                        return (<section>
                            <Slider title={item.title} ids={item.listIds} key={item.title + '-' + item.id} />
                        </section>)
                    case "productList":
                        return (<section>
                            <ProductList title={item.title} ids={item.listIds} key={item.title + '-' + item.id} />
                        </section>)

                    default:
                        <h1>
                            {item.type}
                        </h1>
                        break;
                }

            }

            )
            }
        </div>
    )
}
export default Index