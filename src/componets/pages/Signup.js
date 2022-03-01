import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useCreateUserMutation } from '../../services/usersignup/usersignup'
const Signup = () => {
    const [createPost] = useCreateUserMutation()
    const [username, setUser] = useState('')
    const [password, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [userType, setType] = useState('')



    const onuserChange = e => setUser(e.target.value)
    const onpassChange = e => setPass(e.target.value)
    const onemailChange = e => setEmail(e.target.value)
    const onnumberChange = e => setPhone(e.target.value)
    const onGenderChange = e => setGender(e.target.value)
    const onTypeChange = e => setType(e.target.value)

    const canSave = [username, password, email, phone, gender, userType]
    const registerdata = async (event) => {

        event.preventDefault()
        if (canSave) {
            try {
                await createPost({ username, password, email, phone, gender, userType }).unwrap()
                toast("Thanks For Register", {
                    position: "top-center"
                });
                setUser('')
                setPass('')
                setEmail('')
                setPhone('')
                setGender('')
                setType('')

            } catch (err) {

                console.error('Failed to save the post: ', err)
                toast("Please Fill all Fileds", {
                    position: "top-center"
                });
            }
        }



    }
    return (
        <>
            <div className="container">
                <div className="row">

                    <form method='POST'>
                        <input type="text" name="username" value={username} onChange={onuserChange} placeholder='username' /><br></br>
                        <input type="password" name="password" value={password} onChange={onpassChange} placeholder='password' /><br></br>
                        <input type="email" name="email" value={email} onChange={onemailChange} placeholder='email' /><br></br>
                        <input type="number" name="phone" value={phone} onChange={onnumberChange} placeholder='phone' /><br></br>
                        <select name="gender" value={gender} onChange={onGenderChange}>
                            <option>Defalut</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select><br></br>
                        <select name="userType" value={userType} onChange={onTypeChange}>
                            <option>Defalut</option>
                            <option>admin</option>
                            <option>superadmin</option>
                        </select><br></br>
                        <input type="submit" value="Submit" onClick={registerdata} />
                    </form>

                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Signup
