import TodoInput from './TodoInput';
import TodoTemplate from './TodoTemplate';

function App() {
  return (
    // <TodoTemplate name="할일">
    <TodoTemplate>
      {/* div를 추가해도 청소하기는 출력되지 않음.
        무조건 밖에 있는 애 먼저 실행하기 때문.
        얘네는 props로 넘어가고, template에서 props.children으로 불러야함.
        
        데이터를 전달받아서 넘겨야 하는 경우도 있기 때문에 알아둘 것.*/}
      {/* <div>청소하기</div> */}
      <TodoInput/>
      Todo 목록...!
      
    </TodoTemplate>
  );
}

export default App;
