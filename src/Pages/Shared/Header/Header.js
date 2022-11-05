import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Header = () => {
    const {user} = useContext(AuthContext);
    const menuItems = <>
        <li className='font-semibold'><Link to='/' >Home</Link></li>
        {
            user?.email ?
            <>  
                <li className='font-semibold'><Link to='/orders' >Orders</Link></li>
                <li className='font-semibold'><Link >Sign Out</Link></li>
            </>
            :
            <li className='font-semibold'><Link to='/login' >Login</Link></li>
        }
    </>


    return (
        <div className="navbar py-10 px-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link to='/' className="">
                    <img className='w-24 h-20' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline hover:bg-[#FF3811] text-[#FF3811]">Appointment</Link>
            </div>
        </div>
    );
};

export default Header;