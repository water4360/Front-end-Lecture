import './TodoInput.scss'
import { RiEdit2Fill } from "react-icons/ri";

function TodoInput() {

    return (
    <form className="todoInput">
        <input placeholder="오늘은 무슨 일을 할까?"/>
        <button><RiEdit2Fill/></button>
    </form>
    )
}

export default TodoInput;