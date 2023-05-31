import React from 'react';
import Decimal from "@agrora/decimal";

const HistoryOrderItem = ({order}) => {
    const date = new Date(order.date)
    let totalPrice = Decimal.from(0)
    let discount = Decimal.from(order.couponData.discount ? order.couponData.discount : 0)

    const ProductRow = ({product}) => {
        return (
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.count}</td>
                <td>{product.totalPrice}</td>
            </tr>
        )
    }

    const products = []
    for (let i = 0; i < order.productsData.length; i++) {
        totalPrice = totalPrice.add(Decimal.from(order.productsData[i].totalPrice), 2)
        products.push(<ProductRow key={order.productsData[i].id} product={order.productsData[i]}/>)
    }
    totalPrice = totalPrice.subtract(discount, 2)

    return (
        <div className="order">
            <span className="title">Order in {order.shopName} at {date.toLocaleDateString()} {date.toLocaleTimeString()}</span>
            <table className="table">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
            <span className="price">Total price: {totalPrice.toString()}</span>
        </div>
    );
};

export default HistoryOrderItem;