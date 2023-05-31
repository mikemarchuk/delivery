import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = ({productList, onAdd, onRemove, selectedProducts}) => {
    return (
        <div className="product-list">
            {productList.map(product =>
                <ProductItem
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isSelected={selectedProducts.hasOwnProperty(product.id)}
                />
            )}
        </div>
    );
};

export default ProductList;