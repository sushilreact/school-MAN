import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

import { useGetAllDataByIDQuery, useUpdateByIDMutation } from '../../services/addstudent/addstudent'

const Studentedit = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { data } = useGetAllDataByIDQuery(id)
    const [updateStudent, { error }] = useUpdateByIDMutation()
    const [newdata, dataState] = useState({
        fathername: '',
        mothername: '',
        name: '',
        email: '',
        studentclass: '',
        address: '',
        phone: '',
        gender: ''
    })
    useEffect(() => {
        if (data) {
            dataState(data)
        }
    }, [data])

    const valuechange = (event) => {
        dataState({
            ...newdata,
            [event.target.name]: [event.target.value]
        })
    }


    const Updatedata = async (e) => {
        e.preventDefault()
        await updateStudent(newdata)


    }

    return (
        <div className="container">
            <div className="row">

                <form onSubmit={Updatedata}>
                    <input type="text" name="fathername" value={newdata.fathername} onChange={valuechange} placeholder='Father name' /><br />
                    <input type="text" name="mothername" value={newdata.mothername} onChange={valuechange} placeholder='Mother Name' /><br />
                    <input type="text" name="name" value={newdata.name} onChange={valuechange} placeholder='Student Name' /><br />
                    <input type="email" name="email" value={newdata.email} onChange={valuechange} placeholder='Email' /><br />
                    <input type="number" name="studentclass" value={newdata.studentclass} onChange={valuechange} placeholder='studentclass' /><br />
                    <input type="text" name="address" value={newdata.address} onChange={valuechange} placeholder='Address' /><br />
                    <input type="number" name="phone" value={newdata.phone} onChange={valuechange} placeholder='Phone' /><br />
                    <input type="text" name="gender" value={newdata.gender} onChange={valuechange} placeholder='Gender' /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}
export default Studentedit;