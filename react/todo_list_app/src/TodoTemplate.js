import './TodoTemplate.css'

// function TodoTemplate({name, children}) {
function TodoTemplate({children}) {



    return(
    <div className="todoTemplate">
        <h1  className="todo-title">TO-DO LIST</h1>
        {/* {props.name} : {props.children} */}
        {/* {name} : {children} */}
        <div>{children}</div>
        
    </div>
        
    )
}

export default TodoTemplate