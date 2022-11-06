import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser( email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken(user);
        })
        .catch(error => console.error(error))
    }

    return (
    <div className="w-full mb-20">
        <div className=" grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left flex items-center">
                <img className='w-3/4 mx-auto' src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full  shadow-xl bg-base-100 py-16 px-7 border border-gray-50">
                <h1 className="text-5xl text-center font-semibold text-[#444444]">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#444444] text-lg">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
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
                        <input className="btn bg-[#FF3811] border-[#FF3811] duration-300 text-white hover:text-[#FF3811] hover:bg-[#ff391100]  capitalize text-xl text-semibold " type="submit" value="Sign Up"  />
                    </div>
                </form>

                <SocialLogin></SocialLogin>

                <p className='text-center mt-5'>Already Have an Account? <Link className='text-[#FF3811] font-bold' to="/login">Log In</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;