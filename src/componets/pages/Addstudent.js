import React, { useState, useEffect } from 'react'
import { useAddStudentInfoMutation } from "../../services/addstudent/addstudent"

const Addstudent = () => {
    const [postaddStudent, { isLoading }] = useAddStudentInfoMutation()

    const [fathername, setfatherState] = useState('')
    const [mothername, setmotherState] = useState('')
    const [name, setnameState] = useState('')
    const [email, setemailState] = useState('')
    const [studentclass, setfclassState] = useState('')
    const [address, setaddressState] = useState('')
    const [phone, setphoneState] = useState('')
    const [gender, setgenderState] = useState('')


    const onfathername = e => setfatherState(e.target.value)
    const onmothername = e => setmotherState(e.target.value)
    const onname = e => setnameState(e.target.value)
    const onemail = e => setemailState(e.target.value)
    const onclass = e => setfclassState(e.target.value)
    const onaddress = e => setaddressState(e.target.value)
    const onphone = e => setphoneState(e.target.value)
    const ongender = e => setgenderState(e.target.value)


    const studentSave = [fathername, mothername, name, email, studentclass, address, phone, gender]

    const StudentSubmit = async (event) => {

        event.preventDefault()
        if (studentSave) {
            try {
                await postaddStudent({ fathername, mothername, name, email, studentclass, address, phone, gender }).unwrap()

                alert("data submit ")
            } catch (err) {
                alert("Something Error")
                console.log("Something error", err)
            }
        }

    }



    return (
        <>
            <div className="container">
                <div className="row">
                    <form method='POST'>
                        <input type="text" name="fathername" onChange={onfathername} disabled={isLoading} placeholder='Father name' /><br />
                        <input type="text" name="mothername" onChange={onmothername} disabled={isLoading} placeholder='Mother Name' /><br />
                        <input type="text" name="name" onChange={onname} disabled={isLoading} placeholder='Student Name' /><br />
                        <input type="email" name="email" onChange={onemail} disabled={isLoading} placeholder='Email' /><br />
                        <input type="number" name="studentclass" onChange={onclass} disabled={isLoading} placeholder='studentclass' /><br />
                        <input type="text" name="address" onChange={onaddress} disabled={isLoading} placeholder='Address' /><br />
                        <input type="number" name="phone" onChange={onphone} disabled={isLoading} placeholder='Phone' /><br />
                        <input type="text" name="gender" onChange={ongender} disabled={isLoading} placeholder='Gender' /><br />
                        <input type="submit" value="Submit" onClick={StudentSubmit} disabled={isLoading} />
                    </form>
                </div>
            </div>

        </>
    )
}
export default Addstudent