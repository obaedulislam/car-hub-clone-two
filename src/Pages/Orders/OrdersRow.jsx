import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const OrdersRow = ({order, handleDelete, handleStatusUpdate}) => {
    const{_id, service, serviceName,  price, customer, email, phone, message, status} = order;

    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    },[service])



    return (

            <tr>
                <th>
                    <label>
                            <button onClick={() => handleDelete(_id)}><FaTrashAlt className='text-3xl'></FaTrashAlt></button>
                    </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        {
                           orderService?.img && <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
                </td>
                <td>
                    {serviceName}
                <br/>
                <span className="badge badge-ghost badge-sm">{price}</span>
                </td>
                <td>Purple</td>
                <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost">{status ? status : 'Pending'}</button>
                </th>
            </tr>

    );
};

export default OrdersRow;