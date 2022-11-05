import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero  py-12">
            <div className="hero-content items-start flex-col lg:flex-row p-0">
                <div className='w-1/2 relative p-0 m-0'>
                    <img src={person} alt='' className="w-4/5 h-[400px] rounded-xl shadow-2xl" />
                    <img src={parts} alt='' className="w-2/4 h-[270px] border-8 absolute right-10 top-2/4 rounded-xl shadow-2xl " />
                    
                </div>
                <div className='w-1/2 pr-10'>
                    <h4 className='text-xl font-bold text-[#FF3811]'>About Us</h4>
                    <h2 className="text-5xl font-bold leading-[54px] mt-4">We are qualified <br/> & of experience <br/> in this field</h2>
                    <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-5">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn bg-[#FF3811] text-white border-[#ff391100] duration-300 hover:border-[#FF3811] hover:bg-[#ff391100] hover:text-[#FF3811] mr-5 capitalize text-lg text-semibold">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;