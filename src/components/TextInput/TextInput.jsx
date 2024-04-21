import React from 'react';
import './TextInput.css';

export const TextInput = ({ placeholder, type, name, value, onChange, className, required }) => {
    return (
            <input
                className={`text-input ${className}`}
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
    )
}
