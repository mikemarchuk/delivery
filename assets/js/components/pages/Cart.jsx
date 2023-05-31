import React, {useEffect, useState} from 'react';
import UserInfo from "../Cart/UserInfo";
import ProductList from "../Cart/ProductList";
import './Cart.module.css';
import CartStorage from "../../modules/CartStorage";
import axios from "axios";
import Loader from "../UI/Loader";
import Decimal from "@agrora/decimal";
import {isValidEmail} from "../../utils/helpers";

const Cart = () => {
    CartStorage.wake()

    const [shopProductList, setShopProductList] = useState({loading: true, data: []})
    const [priceTotal, setPriceTotal] = useState(0)
    const [priceTotalDiscount, setPriceTotalDiscount] = useState(0)
    const [coupon, setCoupon] = useState(null)
    const [couponCode, setCouponCode] = useState('')
    const [canSubmit, setCanSubmit] = useState(true)

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const [userInfoError, setUserInfoError] = useState([])

    const fetchShoProductList = () => {
        setShopProductList({...shopProductList, loading: true})
        axios.get(`http://127.0.0.1:8000/api/shop/${CartStorage.getShop()}`).then(res => {
            let products = []
            let totalPrice = Decimal.from(0)
            const selectedProducts = CartStorage.getProducts()
            res.data.result.map(product => {
                if (!selectedProducts.hasOwnProperty(product.id))
                    return
                const productTotalPrice = Decimal.from(product.price).multiply(selectedProducts[product.id], 2)
                products.push({
                    ...product,
                    count: selectedProducts[product.id],
                    totalPrice: productTotalPrice.toString()
                })
                totalPrice = totalPrice.add(productTotalPrice, 2)
            })

            setPriceTotal(totalPrice.toString())
            setPriceTotalDiscount(totalPrice.toString())
            setShopProductList({loading: false, data: products})
        })
    }

    useEffect(() => {
        fetchShoProductList(CartStorage.getShop())
    }, [])

    if (shopProductList.loading) {
        return (
            <Loader/>
        )
    }

    const onCountChange = (productId, count) => {
        CartStorage.productCountSet(productId, count)
        const products = [];
        let totalPrice = Decimal.from(0)
        const selectedProducts = CartStorage.getProducts()
        shopProductList.data.map(product => {
            if (!selectedProducts.hasOwnProperty(product.id))
                return

            const productTotalPrice = Decimal.from(product.price).multiply(selectedProducts[product.id], 2)
            products.push({
                ...product,
                count: selectedProducts[product.id],
                totalPrice: productTotalPrice.toString()
            })
            totalPrice = totalPrice.add(productTotalPrice, 2)
        })

        setPriceTotal(totalPrice.toString())
        if (coupon !== null) {
            setPriceTotalDiscount(totalPrice.subtract(coupon.discount, 2).toString())
        } else {
            setPriceTotalDiscount(totalPrice.toString())
        }

        setShopProductList({...shopProductList, data: products})
    }

    const changeUserInfo = (field, value) => {
        setUserInfo({...userInfo, [field]: value})
    }

    const checkCoupon = () => {
        setCanSubmit(false)
        axios.get(`http://127.0.0.1:8000/api/coupon/${couponCode}`).then(res => {
            setCoupon(res.data.result)
            if (res.data.result !== null) {
                setPriceTotalDiscount(Decimal.from(priceTotal).subtract(res.data.result.discount, 2).toString())
            } else {
                setPriceTotalDiscount(priceTotal)
            }
            setCanSubmit(true)
        })
    }

    const onSubmit = () => {
        let userInfoError = []
        console.log(userInfo)
        Object.keys(userInfo).map(field => {
            if (!userInfo[field].length) {
                userInfoError.push(field)
            } else if (field === 'email' && !isValidEmail(userInfo[field])) {
                userInfoError.push(field)
            }
        })
        setUserInfoError(userInfoError)

        if (userInfoError.length)
            return

        const data = {
            'user': userInfo,
            'shop': CartStorage.getShop(),
            'products': shopProductList.data,
            'coupon': coupon
        }

        axios.post(`http://127.0.0.1:8000/api/order`, data).then(res => {
            alert(res.data.message)
            CartStorage.clear()
            setShopProductList({loading: false, data: []})
        })
    }

    if (!shopProductList.data.length) {
        return (<h1>Cart is empty</h1>)
    }

    return (
        <div className="cart">
            <div className="cart-main">
                <div className="user-info-wrapper">
                    <UserInfo
                        userInfo={userInfo}
                        onChange={changeUserInfo}
                        errorFields={userInfoError}
                    />
                </div>
                <div className="product-list-wrapper">
                    <ProductList
                        productList={shopProductList.data}
                        onCountChange={onCountChange}
                    />
                </div>
            </div>
            <div className="cart-footer">
                <input
                    type="text"
                    placeholder="Input discount code here"
                    className="form-control discount-code"
                    value={couponCode}
                    onChange={e => setCouponCode(e.target.value)}
                    onBlur={checkCoupon}
                />
                <div className="cart-footer-price">Total price: {priceTotalDiscount}</div>
                <button className="btn btn-primary" onClick={onSubmit} disabled={!canSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Cart;