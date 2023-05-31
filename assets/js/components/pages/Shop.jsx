import React, {useEffect, useState} from 'react';
import ShopList from "../Shop/ShopList";
import ProductList from "../Shop/ProductList";
import axios from "axios";
import CartStorage from "../../modules/CartStorage";
import Loader from "../UI/Loader";
import './Shop.module.css';
import '../Shop/ShopList.module.css';
import '../Shop/ProductList.module.css';

const Shop = () => {
    CartStorage.wake()

    const [shopList, setShopList] = useState({loading: true, data: []})
    const [shopProductList, setShopProductList] = useState({loading: false, data: []})

    const [shopId, setShopId] = useState(CartStorage.getShop())
    const [selectedProducts, setSelectedProducts] = useState(CartStorage.getProducts())


    const fetchShopList = () => {
        axios.get(`http://127.0.0.1:8000/api/shop`).then(res => {
            setShopList({loading: false, data: res.data.result})
        })
    }

    const fetchShoProductList = (shopIdLoad) => {
        if(!shopIdLoad)
            return

        setShopProductList({...shopProductList, loading: true})
        axios.get(`http://127.0.0.1:8000/api/shop/${shopIdLoad}`).then(res => {
            if(shopIdLoad !== shopId)
                return
            setShopProductList({loading: false, data: res.data.result})
        })
    }
    const selectShop = (shopIdSet) => {
        if(shopIdSet === shopId)
            return

        setShopId(shopIdSet)
        setSelectedProducts({})
        CartStorage.setShop(shopIdSet)
    }

    const productAdd = (productId) => {
        setSelectedProducts({...selectedProducts, [productId]: 1})
        CartStorage.productAdd(productId)
    }

    const productRemove = (productId) => {
        const { [productId]: tmp, ...selectedProductsNew } = selectedProducts
        setSelectedProducts(selectedProductsNew)
        CartStorage.productRemove(productId)
    }

    useEffect(() => {
        fetchShoProductList(shopId)
    }, [shopId])

    useEffect(() => {
        CartStorage.wake()
        fetchShopList()
    }, [])

    if (shopList.loading) {
        return (
            <Loader />
        )
    }

    return (
        <div className="shop row">
            <div className="shop-list-wrapper col-3">
                <ShopList
                    shopList={shopList.data}
                    onSelect={selectShop}
                    selectedShop={shopId}
                />
            </div>
            <div className="col-1"></div>
            <div className="product-list-wrapper col-8">
                {
                    shopId
                        ? shopProductList.loading
                            ? <Loader />
                            : <ProductList
                                productList={shopProductList.data}
                                onAdd={productAdd}
                                onRemove={productRemove}
                                selectedProducts={selectedProducts}
                            />
                        : <h1>Select shop</h1>
                }
            </div>
        </div>
    );
};

export default Shop;