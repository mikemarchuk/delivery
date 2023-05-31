import React from 'react';
import ShopItem from "./ShopItem";

const ShopList = ({shopList, onSelect, selectedShop}) => {
    if(!shopList.length)
        return (<h1>There are no shops.</h1>)

    return (
        <div className="shop-list">
            {shopList.map(shop =>
                <ShopItem
                    key={shop.id}
                    shop={shop}
                    onSelect={onSelect}
                    isSelected={selectedShop===shop.id}
                />
            )}
        </div>
    );
};

export default ShopList;