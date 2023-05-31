import React, {useState} from 'react';
import {Autocomplete} from "@react-google-maps/api";

const AddressAutocomplete = ({value, onChange, isError}) => {
    const [autocomplete, setAutocomplete] = useState()

    const onLoad = (autocomplete) => {
        setAutocomplete(autocomplete)
    }

    const onPlaceChanged = () => {
        const place = autocomplete.getPlace();
        onChange(place.formatted_address)
    }

    return (
        <Autocomplete
            restrictions={{
                country: "ua"
            }}
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
            style={{display: 'flex'}}
        >
            <input
                type="text"
                placeholder="Enter your address"
                className={isError ? "form-control is-invalid" : "form-control"}
                style={{width: "100%"}}
                onChange={e => onChange(e.target.value)}
                value={value}
            />
        </Autocomplete>
    );
};

export default AddressAutocomplete;