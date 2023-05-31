import React, {useEffect, useState} from 'react';
import CouponItem from "./CouponItem";
import Loader from "../UI/Loader";
import axios from "axios";

const CouponList = () => {
    const [loading, setLoading] = useState(true)
    const [couponList, setCouponList] = useState([])

    const fetchCouponList = () => {
        axios.get(`http://127.0.0.1:8000/api/coupon`).then(res => {
            setLoading(false)
            setCouponList(res.data.result)
        })
    }

    useEffect(() => {
        fetchCouponList()
    }, [])

    if (loading) {
        return <Loader/>
    } else if (!couponList.length) {
        return <h1>There are no one coupon.</h1>
    }

    return (
        <div className="coupon-list">
            {couponList.map(coupon =>
                <CouponItem
                    key={coupon.id}
                    coupon={coupon}
                />
            )}
        </div>
    );
};

export default CouponList;