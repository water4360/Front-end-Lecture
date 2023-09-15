import './TodoInput.scss'
import { RiEdit2Fill } from "react-icons/ri";
import { useState } from 'react';

function TodoInput({onAdd}) {

    const [value, setValue] = useState('')

    const inputText = (e) => {
        setValue(e.target.value)
    }

    const addTodo = (e) => {
        onAdd(value)
        setValue('')
        e.preventDefault()
    }

    return (
    <form className="todoInput">
        <input placeholder="오늘은 무슨 일을 할까?" value={value} onChange={inputText}/>
        <button onClick={addTodo}><RiEdit2Fill/></button>
    </form>
    )
}

export default TodoInput;