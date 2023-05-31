import React from 'react';

const Loader = () => {
    return (
        <div className="col" style={{marginTop: 200}}>
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;