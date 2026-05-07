import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Learn = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const fetchUser = async () => {
        try {
            setLoading(true)
            await axios.get("https://jsonplaceholder.typicode.com/users")
                
                .then((s) => {
                    setData(s.data);

                    setLoading(false)
                })

        }
        catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        fetchUser()
    }, [])
    if(loading) return <h1>Loading</h1> 
    return (
        <div>

            {Array.isArray(data)&&data.map((a)=>(
                <h1 key={a.id}>{a.name}</h1>
            ))}
             </div>
)
}
export default Learn