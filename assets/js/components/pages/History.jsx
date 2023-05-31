import React, {useState} from 'react';
import HistoryForm from "../History/HistoryForm";
import HistoryOrderList from "../History/HistoryOrderList";
import axios from "axios";
import './History.module.css';

const History = () => {
    const [orderList, setOrderList] = useState([])

    const fetchCouponList = (email) => {
        axios.get(`http://127.0.0.1:8000/api/history/${email}`).then(res => {
            setOrderList(res.data.result)
        })
    }
    const onSearch = (email) => {
        if (!email.length) {
            return
        }

        fetchCouponList(email)
    }

    return (
        <div className="history">
            <HistoryForm onSearch={onSearch}/>
            <HistoryOrderList orderList={orderList}/>
        </div>
    );
};

export default History;