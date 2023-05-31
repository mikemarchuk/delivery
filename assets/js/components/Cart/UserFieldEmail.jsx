import React from 'react';
import '../../utils/helpers';

const UserFieldEmail = ({value, onChange, isError}) => {
    return (
        <div className="user-field">
            <span>Email:</span>
            <input
                type="email"
                name="email"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Enter your email"
                className={isError ? "form-control is-invalid" : "form-control"}
            />
        </div>
    );
};

export default UserFieldEmail;