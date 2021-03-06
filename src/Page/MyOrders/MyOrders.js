import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import SingleRow from './SingleRow';

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const userEmail = [user.email];
    console.log(userEmail);

    fetch('https://shrouded-thicket-18720.herokuapp.com/orders/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userEmail),
    })
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders]);
  return (
    <div className="py-14">
      <h1 className=" py-5 font-bold text-3xl text-black" >Here Is All Your Orders </h1>
      <table className='min-w-1/2 mx-auto table-auto'>
        <thead className='justify-between'>
          <tr className='bg-gray-800'>
            <th className='px-16 py-2'>
              <span className='text-gray-300'>Name</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-300'>Order Item</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-300'>Price</span>
            </th>

            <th className='px-16 py-2'>
              <span className='text-gray-300'>Status</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-300'>Delete</span>
            </th>
          </tr>
        </thead>
        <tbody className='bg-gray-200'>
          {myOrders.map((myOrder) => (
            <SingleRow myOrder={myOrder}></SingleRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
