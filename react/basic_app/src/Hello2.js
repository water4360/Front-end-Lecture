//함수가 아닌 클래스 기반으로 만들고자 함
import { Component } from "react";
class Hello2 extends Component {
  //함수에는 return, 클래스에는 render
  render() {
    return (
      <>
        <h2>클래스 기반...</h2>
      </>
    );
  }
}

export default Hello2;
