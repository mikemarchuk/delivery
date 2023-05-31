import React from 'react';
import HistoryOrderItem from "./HistoryOrderItem";

const HistoryOrderList = ({orderList}) => {
    return (
        <div className="orders">
            {orderList.map(order =>
                <HistoryOrderItem
                    key={order.id}
                    order={order}
                />
            )}
        </div>
    );
};

export default HistoryOrderList;