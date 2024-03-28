import { useState } from "react";
import axios from "axios";
import "./styles.css";

function Criar() {

    const [titulo, setTitulo] = useState("");
    const [body, setBody] = useState("");

    function criarItem(e)
    {
        e.preventDefault();
        let item = JSON.stringify({
            title:titulo,
            body:body,
            userId:1
        });

    axios.post('https://jsonplaceholder.typicode.com/posts', item)
        .then((response) => {
            console.log(response)
            alert(response)
        })
        .catch((error) =>{
            console.log(error);  
        })


    }

    return(
        <div className="form-card">
            <form onSubmit={criarItem} className='form'>
                <h1>Criação de Itens</h1>

                <input 
                    type='text'
                    placeholder='Digite o nome titulo do item'
                    value={titulo}
                    onChange={(event) => {setTitulo(event.target.value)}}
                    />

                <input
                    type='text'
                    placeholder='Digite o conteúdo do item'
                    value={body}
                    onChange={(event) => {setBody(event.target.value)}}
                />

                <button className="form-button">CADASTRAR</button>
            </form>
        </div>
    )
}
export default Criar