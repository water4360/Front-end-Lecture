import TodoItem from './TodoItem';

function TodoList({todos, toggleTodo, deleteTodo}) {

    return <>
        {
            //배열의 개수만큼 item을 뿌리도록.
            todos.map((todo) => <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)
        }
        {/* <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/> */}
    </>
}

export default TodoList;
