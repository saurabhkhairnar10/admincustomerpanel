import React from 'react';
import './Registration.css';
import { useState } from 'react';
import { Link, Routes, Route,NavLink } from 'react-router-dom';
import { Admin } from './Admin';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    let navigate = useNavigate();
    const [handle, setHandle] = useState({
        email: '',
        password: ''
    });
    console.log("...handle", handle);

    const onChangeHandle = (e) => {
        const {
            name, value
        } = e.target
        setHandle({
            ...handle,
            [name]: value
        })
    }
    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <form type='submit'>
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row dimension">
                                <img src="https://i.imgur.com/CXQmsmF.png" className="logo" />
                            </div>
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">

                            <div className="row px-3 mb-4">
                                <div className="line"></div>
                                <h3 className="or text-center">SIGN IN</h3>
                                <div className="line"></div>
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><h5 className="Emailmargin text-sm">Email Address</h5></label>
                                <input className="mb-1" type="text" name="email" placeholder="Enter a valid email address"
                                    value={handle.email}
                                    onChange={onChangeHandle}
                                    required />

                                <p className="err-msg">
                                    {
                                        handle.email && (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(handle.email) ?
                                            <p className="text-white bg-warning mt-1" role='alert'>
                                                "Please Enter Email address with proper validation "
                                            </p> : null)
                                    }
                                </p>
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><h5 className="Passwordmargin text-sm">Password</h5></label>
                                <input type="password" name="password" placeholder="Enter password"
                                    value={handle.password}
                                    onChange={onChangeHandle}
                                    required />

                                <p className="err-msg">
                                    {
                                        handle.password && (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_]).{8,15}$/.test(handle.password) ?
                                            <p className="text-white bg-warning mt-1" role='alert'>
                                                "Please Enter Email address with proper validation "
                                            </p> : null)
                                    }
                                </p>
                            </div>

                            <div className="row mt-3 px-3">
                                <button type="submit" className="btn btn-outline-dark"> 
                                <NavLink
                                     to='/Admin'>LOGIN
                                </NavLink>                                                                
                                </button>                                   
                            </div>
                            <div className="row mb-4 px-3">
                                <small className="font-weight-bold">Don't have an account? <a className="text-danger ">Register</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
                <div className="bg-blue py-4">
                    <div className="row px-3">
                        <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration