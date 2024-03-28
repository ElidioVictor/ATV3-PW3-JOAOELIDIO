import { useState } from "react";
import axios from "axios";
import "./styles.css";

function PutDelete() {

    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [body, setBody] = useState("");

    function putItem(e) {
        e.preventDefault();
        let item = JSON.stringify({ 
            userId: 1, 
            title: titulo,
            body: body
        });

        axios.put('https://jsonplaceholder.typicode.com/posts/1', item)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function deleteItem(e){
        e.preventDefault()
        
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', id)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="caixa">
            <div className="form-card">
                <form onSubmit={putItem} className='form'>
                    <h1>Editor de item</h1>

                    <input
                        type='text'
                        placeholder='Novo titulo de seu item'
                        value={titulo}
                        onChange={(event) => { setTitulo(event.target.value) }}
                    />

                    <input
                        type='text'
                        placeholder='Novo conteúdo do item'
                        value={body}
                        onChange={(event) => { setBody(event.target.value) }}
                    />

                    <button className="form-button">EDITAR</button>
                </form>
            </div>

            <div className="form-card">
                <form onSubmit={deleteItem} className='form'>
                    <h1>Delete item</h1>

                    <input
                        type='text'
                        placeholder='Insira o ID do item'
                        value={id}
                        onChange={(event) => { setId(event.target.value) }}
                    />

                    <button className="form-button">DELETAR</button>
                </form>
            </div>
        </div>

    )
}

export default PutDelete