import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../services/api';
import Card from '../components/Card';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
//   const user = useSelector((state) => state.auth.user);
  const email = useSelector((state) => state.auth.email);

  console.log(users,"user");


useEffect(() => {
    const fetchUserss = async () => {
      try {
        const response = await fetchUsers();
        console.log("response",response);
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    fetchUserss();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
    <div className="bg-white p-6 rounded shadow-md text-center">
      <h2 className="text-2xl mb-4">Welcome to Dashboard</h2>
      {email && <p className="mb-2">Logged in as: {email}</p>}
      <p>Dashboard Content Goes Here</p>
      <div className="flex flex-wrap justify-center gap-4">

      {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
        </div>
    </div>
  </div>
  );
};

export default Dashboard;
