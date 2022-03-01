import React, { useState, useEffect } from 'react'
import { useLoginUserMutation } from '../../services/usersignup/usersignup'
import { setActiveUser, setUserLogOutState, setTimerLogOutState } from '../../services/auth/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const [createLogin, { data, isLoading, error, isError, isSuccess }] = useLoginUserMutation()

    const navigate = useNavigate()
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')


    const onuserChange = e => setUser(e.target.value)
    const onuserPassword = e => setPassword(e.target.value)
    const canlogin = [username, password]
    const dispatch = useDispatch()

    setTimeout(() => {
        dispatch(setTimerLogOutState(
            localStorage.removeItem('username'),
            localStorage.removeItem('token')

        ))

    }, 1000 * 60 * 60 * 24)


    const login = async (event) => {
        event.preventDefault()


        if (canlogin) {
            try {
                const res = await createLogin({ username, password }).unwrap()

                alert("Login Success")
                dispatch(setActiveUser({ username: res.username, token: res.token }))

                localStorage.setItem("username", res.username)
                localStorage.setItem("token", res.token)

                navigate('/', { replace: true })
                window.location.reload();
            } catch (err) {
                console.error('Failed to save the post: ', err)
                alert("Login UNSuccess")
            }
        }


    }
    return (
        <div>
            <div className='container'>
                <input type="text" name="" placeholder='Username' onChange={onuserChange} /><br />
                <input type="password" name="" placeholder='Password' onChange={onuserPassword} /><br />
                <input type="submit" value="Submit" onClick={login} /><br />


            </div>

        </div>


    )
}

export default Login
