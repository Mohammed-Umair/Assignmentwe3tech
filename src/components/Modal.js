
import React from 'react';

const Modal = ({ title, children, footer }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div className="bg-white p-4 rounded">
      <h2 className="text-xl mb-4">{title}</h2>
      <div>{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  </div>
);

export default Modal;
