import { useEffect, useState } from "react"
import axios from 'axios'

const UseEffectApi = () => {
    var [post, setPost] = useState([])
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos/")
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <h2>This page is for useEffect api</h2>
            <h3>the contents in json placholder are:</h3>
            <ul>
                {post.map((element) => (
                    <li key={element.id} style={{ listStyleType: 'Number', textAlign: 'left' }}>{element.thumbnailUrl}</li>
                ))}
            </ul>
        </div>
    )
}
export default UseEffectApi