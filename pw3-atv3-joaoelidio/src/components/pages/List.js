import { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'

export default function Listar() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                response => {
                    console.log(response);
                    setUsers(response.data)
                })
            .catch(error => { 
                console.log(error); 
            })
    }, [])


    return (
        <>
            <div className="caixa" >
                {users.map(user => (
                        <div className='card' key={user.id}>
                            <h1>
                                Titulo : {user.title}
                            </h1>

                            <p>
                                Conteúdo :{user.body}
                            </p>
                        </div>
                    ))}
            </div>
        </>
    )
}