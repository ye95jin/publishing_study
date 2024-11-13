import { useState } from "react";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import productData from "./data";

function ProductList() {
    const [activePage, setActivePage] = useState(0);

    const handlePageChange = (pageIndex) => {
        setActivePage(pageIndex);
    };

    return (
        <>
            <ul className="product-grid">
                {productData[activePage].map((product) => (
                    <ProductItem key={product.idx} product={product} />
                ))}
            </ul>
            <Pagination activePage={activePage} onPageChange={handlePageChange} />
        </>
    );
}

export default ProductList;