import { useState } from 'react';

function Login2() {


    //한꺼번에 초기화 할 수 있도록. 객체 형태로.
    const [inputs, setInputs] = useState({id:'', pw:''})

    //value를 e.target에서 받아왔던 것처럼.
    //이렇게 받아올 수 있는 것. 초기는 usetState의 ''들.
    const {id, pw} = inputs;


    const onInput = (e) => {
        // console.log(e.target.value); //id, pw 원래라면
        // console.log(e.target.name); //id, pw
        const{value, name} = e.target;

        // 전개연산자를 사용해서. 초기값을 원래대로 넣어주고.
        // 이후에 설정값을 다시 넣어서 업데이트 해주는 방식으로.
        setInputs({...inputs, [name]:value})
    }

    

    return <>
        <h1>{id}님 환영! 비번은 {pw}!! </h1>
        <div>ID : <input value = {id} onChange={onInput} name="id"/></div>
        <div>PW : <input type="password" value= {pw} onChange={onInput} name="pw"/></div>
        
        <hr/>
    </>
}


export default Login2;