import React from "react"
import { useParams } from 'react-router-dom';
import { useGetAllDataQuery } from '../../services/addstudent/addstudent'

const Studentdetail = () => {
    let { id } = useParams();

    const { data } = useGetAllDataQuery()

    return (
        <div className='container'>



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

                    </tr>
                </thead>
                <tbody>
                    {
                        data?.filter(el => el._id === id).map(get => (
                            <tr key={get._id}>
                                <td>{get.fathername}</td>
                                <td>{get.mothername}</td>
                                <td>{get.name}</td>
                                <td>{get.email}</td>
                                <td>{get.studentclass}</td>
                                <td>{get.address}</td>
                                <td>{get.phone}</td>
                                <td>{get.gender}</td>

                            </tr>
                        ))




                    }
                </tbody>
            </table>

        </div>
    )
}

export default Studentdetail