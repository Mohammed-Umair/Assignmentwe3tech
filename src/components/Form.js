
import React from 'react';

const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="flex flex-col space-y-4">
    {children}
  </form>
);

export default Form;
