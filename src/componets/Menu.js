import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLogOutState } from '../services/auth/UserSlice'

const Menu = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [tokenvalu, tokenState] = useState()
    const [username, usernameState] = useState()
    useEffect(() => {
        usernameState(localStorage.getItem('username'))
        tokenState(localStorage.getItem('token'))

    }, []);

    const logout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        dispatch(setUserLogOutState({ username: null, token: null }))
        navigate('/login', { replace: true })
        window.location.reload();
    }




    return (
        <>
            {tokenvalu && username ?

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/addstudent">Add Student</Link>
                    <Link to="/studentlist">Student List</Link>
                    <span onClick={logout}>Logout</span>
                </nav>
                :

                <nav>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </nav>

            }

        </>
    )
}

export default Menu;
