import "./Hello.css";

// properties로 들어가는건?
// props로 약속!
function Hello(props) {
  const msg = "안녕하세요 React의 세계에 오신 것을 환영합니다!";
  let h = document.getElementsByTagName("h1");

  // 인라인 형태로 넣는건
  // 자바스크립트 객체 형태로 만들어주고.
  // 그걸로 속성에 넣어줄 것.
  // -가 있는 속성은 ''로 감싸주거나 카멜케이스로 표기.
  const style = {
    color: "royalblue",
    backgroundColor: "lightpink",
  };

  return (
    <div>
      <h1 style={style}>Hello React!!!!!</h1>
      <h1 className="hstyle">{msg}</h1>
      <h1>안녕하세요 {props.name} !!</h1>
    </div>
  );
}

//props에 전달되는 값이 없으면 아래의 props를 default로 출력
Hello.defaultProps = {
  name: "뿡뿡",
};

export default Hello;
