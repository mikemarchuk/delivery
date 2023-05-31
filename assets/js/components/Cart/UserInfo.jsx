import React from 'react';
import UserFieldText from "./UserFieldText";
import UserFieldCustom from "./UserFieldCustom";
import AddressAutocomplete from "../UI/AddressAutocomplete";
import UserFieldEmail from "./UserFieldEmail";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const UserInfo = ({userInfo, onChange, errorFields}) => {
    return (
        <div>
            <UserFieldText
                title="Name"
                name="name"
                value={userInfo.name}
                placeholder="Enter your name"
                onChange={value => onChange('name', value)}
                isError={errorFields.includes('name')}
            />
            <UserFieldEmail
                value={userInfo.email}
                onChange={value => onChange('email', value)}
                isError={errorFields.includes('email')}
            />
            <UserFieldCustom name="Phone">
                <PhoneInput
                    placeholder="Enter phone number"
                    country="ua"
                    value={userInfo.phone}
                    onChange={value => onChange('phone', value??'')}
                    inputClass={errorFields.includes('phone') ? "form-control is-invalid" : "form-control"}
                    inputStyle={{width: '100%'}}
                />
            </UserFieldCustom>
            <UserFieldCustom name="Address">
                <AddressAutocomplete
                    value={userInfo.address}
                    onChange={value => onChange('address', value??'')}
                    isError={errorFields.includes('address')}
                />
            </UserFieldCustom>
        </div>
    );
};

export default UserInfo;