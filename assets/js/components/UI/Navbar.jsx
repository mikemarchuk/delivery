import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/shop">Delivery App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shop">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/coupon">Coupon</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/history">History</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;