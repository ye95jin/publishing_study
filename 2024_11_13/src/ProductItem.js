function ProductItem({ product }) {
    return (
        <li>
            <a href="" className="product-item">
                <div className="product-image">
                    <img src={`images/${product.image}`} alt={product.title} />
                </div>
                <div className="product-info">
                    <h3>{product.title}</h3>
                    <div className="product-price">
                        <span className="discount">{product.sale}</span>
                        <span className="price">{product.dollar}</span>
                    </div>
                    <span className="original-price">{product.won}</span>
                </div>
            </a>
        </li>
    );
}

export default ProductItem;