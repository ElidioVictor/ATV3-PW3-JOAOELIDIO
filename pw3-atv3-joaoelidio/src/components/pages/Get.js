import { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'

function Get() {

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(
                response => {
                    console.log(response);
                    setUser(response.data)
            })

            .catch(error => {
                console.log(error); 
            })
    }, [])


    return (
        <>
            <div className="caixa" >
                    {<div className='card' key={user.id}>
                        <h1>
                            Titulo : {user.title}
                        </h1>

                        <p>
                            corpo : {user.body}
                        </p>
                    </div>
                    }
            </div>
        </>
    )
}
export default Get