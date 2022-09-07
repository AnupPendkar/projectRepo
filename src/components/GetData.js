import {useState} from 'react';
function GetData({index}) {
    const [count, setCount] = useState(0);
    const decrement = ()=>{
        setCount((prev)=>prev-1);
    }
    const increment = ()=>{
        setCount((prev)=>prev+1);
    }

    return (
        <div className="container">
            <p className="name">{index+1} Age</p>
            <div className="counter">
                <button onClick={decrement} className="decrement">-</button>
                <div className="value-container">
                    <p className="counter getCounter">{count}</p>
                </div>
                <button onClick={increment} className="increment">+</button>
            </div>
        </div>
    );
}

export default GetData;