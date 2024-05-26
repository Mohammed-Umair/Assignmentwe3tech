
import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <p className="font-bold">{user.first_name}</p>
      <p>{user.email}</p>
      <img src={user.avatar} alt="Avatar" className="w-full mt-4" />
    </div>
  );
};

export default Card;
