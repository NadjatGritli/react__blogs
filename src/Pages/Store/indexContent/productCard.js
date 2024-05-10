const ProductCard = ({ id }) => {
    console.log("product - "+id)
    return (
        <div className="productCard">
            <h6>
                product - {id}
            </h6>
        </div>
    )
}
export default ProductCard