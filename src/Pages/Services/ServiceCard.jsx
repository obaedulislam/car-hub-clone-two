import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const{_id, img, title, price} = service;

    return (
        <div className="card card-compact rounded-xl w-full bg-base-100 shadow p-4 border border-gray-50 cursor-pointer">
            <img className='w-full min-h-[250px] rounded-lg' src={img} alt="Service" />
            <div className="pt-4">
                <h2 className="card-title text-2xl text-[#444444] font-bold">{title}</h2>
                <div className="flex mt-3 justify-between items-center">
                    <div>
                        <h5 className='text-[#FF3811] text-xl font-semibold'>Price: ${price}</h5>
                    </div>
                    <div>
                        <Link to={`/checkout/${_id}`}>
                            <button className=" pr-0"><BsArrowRightShort className='text-4xl text-[#FF3811] duration-200 hover:text-black'></BsArrowRightShort></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;