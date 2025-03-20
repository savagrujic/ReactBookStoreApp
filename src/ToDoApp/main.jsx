import { useState } from "react";
import "./design.css"
import { type } from "@testing-library/user-event/dist/type";
export default function ToDo() {
    
    const [todo, setTodo] = useState([])
    const [element, setElement] = useState('')


    function AddElement(e) {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            text: element
        }
        setTodo([...todo,newTodo])
        setElement('')
       
    }
    function DeleteFunction(id) {

        setTodo( todo.filter(item => item.id !== id))
        console.log(id)

    }
    return(
        <div className="wrapper">
            <div className="container">
            <p>Add Your Item</p>
            
            <div>
            <form onSubmit={AddElement}>
            <input type = "text" value = {element}onChange={(e) => {setElement(e.target.value)}
        }></input>
            <button type="submit">Add</button>
            </form>
            </div>
            <ul>
                {todo.map((element,id) => (
                    <li>{element.text} <button className="delete" onClick={() => {DeleteFunction(element.id) }}>Obrisi</button></li>
                    
                ))}
               
            </ul>
            
            </div>
        </div>
    )
}