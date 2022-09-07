import Barbara from "./Barbara";
import Carlos from "./Carlos";
import {useState} from 'react';

function Andrew() {
    const [count, setCount] = useState(0);
    return (  
        <div className="andrew">
            <Barbara setCount={setCount}/>
            <Carlos count={count} setCount={setCount}/>
        </div>
    );
}

export default Andrew;