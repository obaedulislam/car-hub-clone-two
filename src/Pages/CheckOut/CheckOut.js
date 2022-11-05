import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import checkout from '../../assets/images/checkout/checkout.png';


const CheckOut = () => {
    const{_id, title, price, img} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Un Registered';
        const phone = form.phone.value;
        const message = form.message.value;  
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('carhub-token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Order Placed Successfully");
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }


    return (
    <div>
        <div className='banner banner-img'>
            <img src={checkout} alt="" srcset="" />
        </div>

        <div className='bg-gray-100 p-28 my-20 rounded-xl'>
            <form onSubmit={handlePlaceOrder} >
                <h2 className="text-4xl">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered bg-white" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered bg-white" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered bg-white" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered bg-white" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full bg-white mt-5" placeholder="Your Message" required></textarea>

                <input className='btn bg-[#FF3811] text-white border-[#ff391100] duration-300 hover:border-[#FF3811] hover:bg-[#ff391100] hover:text-[#FF3811]  capitalize text-lg text-semibold mt-4' type="submit" value="Place Your Order" />
            </form>
        </div>
    </div>
    );
};

export default CheckOut;