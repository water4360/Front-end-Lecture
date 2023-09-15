import './TodoItem.scss'
import { MdClear } from "react-icons/md";


function TodoItem({todo, toggleTodo, deleteTodo}) {

    // const {text, checked} = todo
    // 이경우에는 아래에서 그냥 text, checked 로 사용 가능.

    //체크박스 클릭하면 toggleTodo 소환, todo의 no를 전달
    const onClick = () => {
        toggleTodo(todo.no)
    }


    return (
        <div className="todoItem">
            <input type="checkbox" className='checkbox' checked={todo.checked} onClick={onClick}/>
            <div className='text' no={todo.no} onDoubleClick={onClick}>{todo.text}</div>
            <button onClick={()=> deleteTodo(todo.no)}><MdClear/></button>
        </div>
    )

}

export default TodoItem