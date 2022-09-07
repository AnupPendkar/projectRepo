import { useState } from "react";

function Down({setCount}) {
    // const [input, setInput] = useState();
    const increment = ()=>{
        setCount((prev)=>prev+1);
    }
    return (  
        <div className="down">
            
            {/* <input type="number" onChange={(e)=>setInput(e.target.value)}/> */}
        </div>
    );
}

export default Down;