import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Navbar from "./components/UI/Navbar";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';
import Coupon from "./components/pages/Coupon";
import History from "./components/pages/History";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Navigate to="/shop" />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Navigate to="/shop" />} />
        </Routes>
    </BrowserRouter>
);
