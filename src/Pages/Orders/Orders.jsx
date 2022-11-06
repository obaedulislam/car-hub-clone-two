import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {

    const {user, logOut} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);


    useEffect( () => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('carhub-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json()
        })
        .then(data => {
            console.log('received', data);
            setOrders(data)
        })
    }, [user?.email, logOut ]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure? You want to cancel this order");
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('carhub-token')}`
                }

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert("Data Deleted Successfully");
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('carhub-token')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved';
                const newOrders = [  approving, ...remaining ];
                setOrders(newOrders);
            }

        })
    }

    return (
        <div className='my-12'>
            <h1 className='text-3xl font-semibold'>You have {orders.length} order</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map(order => <OrdersRow
                                key = {order._id}
                                order = {order}
                                handleDelete = {handleDelete}
                                handleStatusUpdate = {handleStatusUpdate}
                            ></OrdersRow>)
                        }
                    </tbody>
    
                </table>
            </div>
        </div>
    );
};

export default Orders;