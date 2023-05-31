import React from 'react';

const ProductItem = ({product, onAdd, onRemove, isSelected}) => {
    return (
        <div className="product-item">
            <span className="product-item-title">{product.name}</span>
            <span className="product-item-price">Price: {product.price}</span>
            {isSelected
                ? <button
                    className="btn btn-outline-danger"
                    onClick={() => onRemove(product.id)}
                >Remove from cart</button>
                : <button
                    className="btn btn-outline-success"
                    onClick={() => onAdd(product.id)}
                >Add to cart</button>
            }
        </div>
    );
};

export default ProductItem;