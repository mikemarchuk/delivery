import React, {useState} from 'react';

const ProductItem = ({product, onCountChange}) => {
    const [count, setCount] = useState(product.count)

    const countChange = (count) => {
        setCount(count)
        onCountChange(product.id, +count)
    }

    return (
        <div key={product.id} className="product-item">
            <span className="product-item-title">{product.name}</span>
            <div className="product-item-action">
                <div className="product-item-price">
                    <span>Price: {product.price}</span>
                    <span>
                        Count: <input
                        type="number"
                        name="count"
                        min="0"
                        max="10"
                        step="1"
                        value={count}
                        onChange={e => countChange(e.target.value)}
                        onKeyDown={e => e.preventDefault()}
                        onPaste={e => e.preventDefault()}
                    />
                    </span>
                    <span>Total price: {product.totalPrice}</span>
                </div>
                <div>
                    <button onClick={() => onCountChange(product.id, 0)} className="btn btn-outline-danger">Remove from cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;