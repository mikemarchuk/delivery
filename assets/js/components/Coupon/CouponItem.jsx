import React from 'react';
import './Coupon.module.css';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const CouponItem = ({coupon}) => {
    return (
        <div className="coupon-item">
            <span className="coupon-title">{coupon.title}</span>
            <div className="coupon-info">
                <span>Discount: {coupon.discount}</span>
                <CopyToClipboard text={coupon.code}>
                    <span className="coupon-code" title="Click to copy to clipboard">{coupon.code}</span>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default CouponItem;