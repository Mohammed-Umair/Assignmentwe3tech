
import React from 'react';

const Input = ({ type, value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="p-2 border border-gray-300 rounded"
  />
);

export default Input;
