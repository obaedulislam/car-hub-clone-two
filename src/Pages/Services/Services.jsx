import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const[services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://car-hub-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='py-12'>
            <div className="text-center w-[60%] mx-auto ">
                <h4 className='text-xl font-bold text-[#FF3811]'>About Us</h4>
                <h2 className="text-5xl font-bold leading-[54px] mt-2">Our Service Area</h2>
                <p className="py-4">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-10'>
                <button className="btn bg-[#ff391100]   border-[#FF3811] text-[#FF3811]  duration-300 hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white mr-5 capitalize text-lg text-semibold">Latest Project</button>
            </div>
        </div>
    );
};

export default Services;