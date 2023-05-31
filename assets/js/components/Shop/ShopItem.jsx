import React from 'react';

const ShopItem = ({shop, onSelect, isSelected}) => {
    const classesItem = ["shop-item", 'text-center', 'mb-3'];
    if (isSelected) {
        classesItem.push('btn btn-primary')
    } else {
        classesItem.push('btn btn-outline-primary')
    }

    return (
        <div className={classesItem.join(' ')}
             onClick={() => onSelect(shop.id)} >
            <div className="card-body" style={{padding: 10}}>
                <h5 className="card-title">{shop.name}</h5>
            </div>
        </div>
    );
};

export default ShopItem;