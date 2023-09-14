import './TodoTemplate.scss'

// function TodoTemplate({name, children}) {
function TodoTemplate({children}) {



    return(
    <div className="todoTemplate">
        <div className="todo-title">TO-DO LIST</div>
        {/* {props.name} : {props.children} */}
        {/* {name} : {children} */}
        <div>{children}</div>
        
    </div>
        
    )
}

export default TodoTemplate