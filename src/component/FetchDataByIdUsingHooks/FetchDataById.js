import axios from 'axios';
import React, { useEffect, useState} from 'react';
const FetchDataById = () => {
    const [data, setData] = useState({});
    const [id , setId] = useState('')

    // useEffect(() => {
    //     async function fetchData(){
    //         let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //         setData(res.data)
    //         console.log(res);
    //     }
    //     fetchData()
    // }, [id])

    const showPostHandler = async() => {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setData(res.data)
        console.log(res);
    }
    return(
        <div>
            <div>
                <label> Enter your id : </label>
                <input 
                type='number'
                value={id} 
                onChange={(e)=> setId(e.target.value)}
                />
            </div>
            <button onClick={()=> showPostHandler()}>Show Post</button>
            {
                <div>
                    <p>User id : {data.userId}</p>
                    <p> ID : {data.id}</p>
                    <p>Title : {data.title}</p>
                    <p>Body: {data.body}</p>
                </div>
            }
        </div>
    )
}

export default FetchDataById;