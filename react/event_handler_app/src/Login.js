import { useState } from 'react';

function Login() {

const [id, setId] = useState('')
const [pw, setPw] = useState('')

const addId = (e) => { 
    //e는 이벤트, target은 input, value는 input의 값.
    // console.log(e.target);
    setId(e.target.value)
}

const addPw = (e) => {
    // console.log(e.target.value);
    const {value} = e.target
    setPw(value)
}

    return <>
        <div>ID : <input value = {id} onChange={addId}/></div>
        <div>PW : <input type="password" value= {pw} onChange={addPw}/></div>
        
        <hr/>
    </>
}

export default Login;