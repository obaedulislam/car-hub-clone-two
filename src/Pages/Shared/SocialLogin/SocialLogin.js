import React from 'react';
import {  Link,  } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF,  FaLinkedinIn} from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()

        .then(result =>{
            const user = result.user;
            console.error(user);
            
            const currentUser = {
                email: user.email
            }

            //Get JWT Token
            fetch('https://car-hub-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //Local storage is easiest but not best for store token
                localStorage.setItem('carhub-token', data.token)

            })
        })
        .then(err => console.log(err))
    }

    return (
        <div className='text-center '>
        <p className='font-semibold'>-----Or Sing In With-----</p>
        <div className='flex justify-center  mt-2'>
        
            <ul className='flex'>
                <Link className='w-[45px] h-[45px] mx-[5px] bg-gray-100 border   hover:bg-[#fff] text-primary  rounded-full pt-3 flex justify-center' to='https://www.facebook.com/obaedulislam.mohammad/' target="_blank"><FaFacebookF className='text-xl'></FaFacebookF></Link>
                <Link className='w-[45px] h-[45px] mx-[5px] bg-gray-100 border hover:bg-[#fff] text-primary  rounded-full pt-3 flex justify-center' to='https://www.linkedin.com/in/obaedulislam/' target="_blank"><FaLinkedinIn className='text-xl'></FaLinkedinIn></Link>

                <Link onClick={handleGoogleSignIn} className='w-[45px] h-[45px] mx-[5px] bg-gray-100 border   hover:bg-[#fff] text-primary  rounded-full pt-3 flex justify-center'><FcGoogle className='text-xl'></FcGoogle></Link>

            </ul>
        </div>
    </div>
    );
};

export default SocialLogin;