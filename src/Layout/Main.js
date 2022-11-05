import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='max-w-[1140px]  mx-auto p-0'>
                <Header></Header>
            </div>
            <div className='max-w-[1140px] mx-auto'>
                <Outlet></Outlet>
            </div>
            <div className='bg-[#151515] '>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;