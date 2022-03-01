
import React from 'react';
import { useState } from 'react';
import './App.css';
import { useGetAllDataQuery } from './services/signup/signup';
function App() {
    const { data, error, isLoading, isFetching, isSuccess } = useGetAllDataQuery();
    const [mydata, datastate] = useState([]);
    const clickme = () => {
        datastate(data);
    }


    return (
        <div className="App" >
            <h1><button onClick={clickme}>Click me</button></h1>
            {isLoading && <h2>..Loading here</h2>
            }
            {isFetching && <h2>..isFetching</h2>}
            {error && <h2>Something Wrong</h2>}
            {
                isSuccess && (
                    <div>
                        {
                            mydata.map(contact => {
                                return <div className="dataclasss" key={contact._id}>
                                    <span>{contact.fathername}</span>
                                </div>
                            })
                        }
                    </div>
                )
            }
        </div >

    );
}

export default App;
