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
                        return (<div key={item.title + '-' + item.id}>
                            <Slider title={item.title} ids={item.listIds} />
                        </div>)
                    case "productList":
                        return (<section key={item.title + '-' + item.id}>
                            <ProductList title={item.title} ids={item.listIds} />
                        </section>)

                    default:
                        return (<h1 key={item.title + '-' + item.id}></h1>)
                }

            }

            )
            }
        </div>
    )
}
export default Index