import { useState } from "react";

function Emrae({setCount}) {
    // const [input, setInput] = useState();
    const decrement = ()=>{
        setCount((prev)=>prev-1);
    }
    return (  
        <div className="emrae">
            
            {/* <input type="number" onChange={(e)=>setInput(e.target.value)}/> */}
        </div>
    );
}

export default Emrae;