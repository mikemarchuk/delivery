import React from 'react';
import './ProductList.module.css';
import ProductItem from "./ProductItem";

const ProductList = ({productList, onCountChange}) => {
    return (
        <div className="product-list">
            {productList.map(product =>
                <ProductItem
                    key={product.id}
                    product={product}
                    onCountChange={onCountChange}
                />
            )}
        </div>
    );
};

export default ProductList;