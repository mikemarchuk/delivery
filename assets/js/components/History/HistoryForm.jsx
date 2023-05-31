import React, {useState} from 'react';
import {isValidEmail} from "../../utils/helpers";

const HistoryForm = ({onSearch}) => {
    const [search, setSearch] = useState('')
    const [isSearchValid, setIsSearchValid] = useState(true)

    const onClick = () => {
        if (!search || !isValidEmail(search)) {
            setIsSearchValid(false)
            return
        } else {
            setIsSearchValid(true)
        }

        onSearch(search)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Input email to search"
                onChange={e => setSearch(e.target.value)}
                className={[
                    'form-control',
                    isSearchValid ? '' : 'is-invalid'
                ].join(' ')}
                onKeyUp={e => {
                    if (e.key === 'Enter') {
                        onClick()
                    }
                }}
            />
            <button
                onClick={onClick}
                className="btn btn-outline-success"
                style={{marginTop: 15}}
            >Search</button>
        </div>
    );
};

export default HistoryForm;