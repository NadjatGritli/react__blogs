import ProductCard from "./productCard"

const ProductList = ({ title, ids }) => {
    return (
        <div>
            <div className="SectionTitle">
                <h1>
                    {title}
                </h1>
            </div>
            <div className="productList row">

                {
                    ids.map((id) => (
                        <div className="col-3" key={title + '_product_' + id}>
                            <ProductCard id={id} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ProductList