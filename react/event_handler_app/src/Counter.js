import { useState } from 'react'
function Counter() {

const [number, setNumber] = useState(0);

// const increaseNumber = function() {
//     // console.log('increase...');
//     // number = number+1로 하면 될 것 같지만. number의 타입이? const, 상수다.
//     // useState라는 상수를 변환시켜주는 함수를 써야 함.
//     // 그리고 이 함수에는 setter메소드를 인자로 넣어야 함.
    
//     //방법1 - 
//     setNumber(number+1)

//     //방법2 - 함수호출. setNumber가 가지고 있는 인자(0)를 자동으로 넘겨줌.
//     // setNumber(function(num) {
//     //     return num+1
//     // })
//     // setNumber((num) => num+1)
    
// }
//방법1-2(화살표 함수로 변형)
const increaseNumber = () => {setNumber(number+1)}
const resetNumber = () => {setNumber(0)}


    return <>
    <h1>{number}번 클릭</h1>
        <button onClick={increaseNumber}>UP</button>
        <button onClick={resetNumber}>TO ZERO</button>
    </>
}


//function 명과 일치시킬 것
export default Counter