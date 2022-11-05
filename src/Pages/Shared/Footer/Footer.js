import React from 'react';
import { Link } from 'react-router-dom';
import logotwo from '../../../assets/logotwo.png'

const Footer = () => {
    return (
        <div className='max-w-[1140px]  mx-auto'>
            <footer className="footer py-32  text-white">
            <div>
                <Link to='/'> <img  src={logotwo} alt="" /></Link>
                <p>Car Hub | Best Car Online store in BD, <br/>Choose your best car from our store & <br/>enjoy a happy journey with us</p>
            </div> 
            <div>
                <span className="footer-title">Services</span> 
                <Link className="link link-hover">Branding</Link> 
                <Link className="link link-hover">Design</Link> 
                <Link className="link link-hover">Marketing</Link> 
                <Link className="link link-hover">Advertisement</Link>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <Link className="link link-hover">About us</Link> 
                <Link className="link link-hover">Contact</Link> 
                <Link className="link link-hover">Jobs</Link> 
                <Link className="link link-hover">Press kit</Link>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <Link className="link link-hover">Terms of use</Link> 
                <Link className="link link-hover">Privacy policy</Link> 
                <Link className="link link-hover">Cookie policy</Link>
            </div>
            </footer>
        </div>
    );
};

export default Footer;