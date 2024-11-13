import React from 'react';
import './css/style.css';
import ProductList from "./ProductList";

function App() {
    return (
        <div className="product-section">
            <h2>슬로우에이징을 위한 뷰티템 : 레티놀편</h2>
            <ProductList />
        </div>
    );
}

export default App;