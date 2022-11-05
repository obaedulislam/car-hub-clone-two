import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort  } from "react-icons/bs";
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
                    
        <div id={`slide${id}`}  className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image}  alt='' className="w-full  rounded-xl" />
            </div>

            <div className="absolute w-[50%] justify-end transform -translate-y-1/2 left-10 top-1/2">
                <h1 className='text-6xl text-white font-bold leading-[75px]'>Affordable <br/> Price For Car<br/> Servicing</h1>
                <p className='text-white mt-7 text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="absolute flex  transform -translate-y-1/2 mt-12">
                    <button className="btn bg-[#FF3811] border-[#ff391100] duration-300 hover:border-gray-100 hover:bg-[#ff391100] mr-5 capitalize text-lg text-semibold">Discover More</button>
                    <button className="btn bg-[#ff391100]   border-gray-100  duration-300 hover:border-[#ff391100] hover:bg-[#FF3811] mr-5 capitalize text-lg text-semibold">Latest Project</button>

                </div>
                {/* CTA End */}
            </div>
            {/* Banner Text End */}


            <div className="absolute flex justify-end transform -translate-y-1/2 left-10 right-10 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-[#878787d0]"><BsArrowLeftShort className="text-4xl"></BsArrowLeftShort></a> 
                <a href={`#slide${next}`}  className="btn btn-circle bg-[#FF3811] text-white"><BsArrowRightShort className="text-4xl"></BsArrowRightShort> </a>
            </div>
        </div> 
    );
};

export default BannerItem;