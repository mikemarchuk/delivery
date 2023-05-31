import React from 'react';
import './UserFieldText.module.css';

const UserFieldText = ({title, name, value, onChange, placeholder, isError}) => {
    return (
        <div className="user-field">
            <span>{title}:</span>
            <input
                type="text"
                name={name}
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
                className={isError ? "form-control is-invalid" : "form-control"}
            />
        </div>
    );
};

export default UserFieldText;