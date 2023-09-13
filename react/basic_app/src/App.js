import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import Hello2 from "./Hello2";

function App() {
  // return은 트리 형태로 무조건 하나의 단위만.
  // div든, p든 뭐가 더 추가될 수는 없음.
  // HTML태그와 다름. 무조건 닫아주는 태그 필요
  return (
    <div>
      {/* <h1>Hello React!</h1> */}
      <Hello name="리액트" />
      <Hello />
      <Hello2 />
    </div>
  );
}

export default App;
