import React, { useContext } from 'react';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/images/login/login.svg'

import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login( email, password)
        .then(result => {
            const user = result.user;

            const currentUser = {
                email: user.email
            }
            console.log(currentUser);

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
                navigate(from, {replace: true});
            })

        })
        .catch(error => console.error(error))
    }

    return (
    <div className="w-full mb-20">
        <div className=" grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left flex items-center">
                <img className='w-3/4 mx-auto' src={loginimg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full  shadow-xl bg-base-100 py-16 px-7 border border-gray-50">
                <h1 className="text-5xl text-center font-semibold text-[#444444]">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#444444] text-lg">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#444444] text-lg">Confirm Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/singup' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <input className="btn bg-[#FF3811] border-[#FF3811] duration-300 text-white hover:text-[#FF3811] hover:bg-[#ff391100]  capitalize text-xl text-semibold " type="submit" value="Log In" />
                    </div>
                </form>

                <SocialLogin></SocialLogin>

                <p className='text-center mt-5'>New to Genius Car <Link className='text-[#FF3811] font-bold' to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Login;