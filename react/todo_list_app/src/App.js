import TodoInput from './TodoInput';
import TodoTemplate from './TodoTemplate';
import TodoList from './TodoList';
import { useRef, useState } from 'react';




function App() {

  const [todos, setTodos] = useState([
    {no: 1, text:'일기쓰기', checked:true},
  ])

  const nextNo = useRef(2)

  const addTodo = function(text) {
    setTodos(todos.concat({no:nextNo.current, text:text, checked:false}))
    nextNo.current++
    
  }

  // 클릭한 no가 같은지 비교해서,
  // no, text, checked 값이 전개연산자로 들어가고.
  // checked 상태에 따라 토글되는 것.
  const toggleTodo = function(no) {
    setTodos(todos.map(todo => todo.no === no ? {...todo, checked : !todo.checked} : todo))
  }

  const deleteTodo = (no) => {
    setTodos(todos.filter(todo => todo.no !== no))
  
  }



  return (
    // <TodoTemplate name="할일">
    <TodoTemplate>
      {/* div를 추가해도 청소하기는 출력되지 않음.
        무조건 밖에 있는 애 먼저 실행하기 때문.
        얘네는 props로 넘어가고, template에서 props.children으로 불러야함.
        
        데이터를 전달받아서 넘겨야 하는 경우도 있기 때문에 알아둘 것.*/}
      {/* <div>청소하기</div> */}
      <TodoInput onAdd={addTodo}/>
      {/* name=value 형태로 내려주기. */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </TodoTemplate>
  );
}

export default App;
