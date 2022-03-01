import React from 'react'
import ReactDOM from "react-dom"
import { Link, useNavigate } from 'react-router-dom'
import { useGetAllDataQuery, useDeleteStudentInfoMutation } from '../../services/addstudent/addstudent'

const Studentlist = () => {
    const navigate = useNavigate()
    const { data, error, isLoading, isSuccess } = useGetAllDataQuery();

    const [delteStudent] = useDeleteStudentInfoMutation()
    // console.log(data)
    const getbyID = (e) => {
        const id = e

        navigate(`/studentdetail/${id}`, { replace: true })
    }


    return (
        <div className='container'>

            {isLoading && <h2>..Loading here</h2>
            }

            {error && <h2>Something Wrong</h2>}
            {
                isSuccess && (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Father</th>
                                <th scope="col">Mother</th>
                                <th scope="col">ST Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Class</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Admin</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map(contact => {
                                    return <tr key={contact._id}>
                                        <td>{contact.fathername}</td>
                                        <td>{contact.mothername}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.studentclass}</td>
                                        <td>{contact.address}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.gender}</td>
                                        <td>{contact.admin}</td>
                                        <td><button onClick={() => delteStudent(contact._id)}>Delete</button> <button onClick={() => getbyID(contact._id)}>View</button> <Link to={`/student/${contact._id}`}>Edit</Link></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Studentlist
