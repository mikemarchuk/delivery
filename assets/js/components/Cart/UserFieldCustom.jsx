import React from 'react';

const UserFieldCustom = ({name, children}) => {
    return (
        <div className="user-field">
            <span>{name}:</span>
            {children}
        </div>
    );
};

export default UserFieldCustom;