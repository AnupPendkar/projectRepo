import { useState } from "react";
import GetData from "./GetData";
import ShowData from "./ShowData";

function Carlos() {
    let total = 4;
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const handleAdd = ()=>{
        setData([...document.getElementsByClassName('getCounter')]);
    }
    const handleSubmit = ()=>{
        if(data.length > 0){
            setShow(true);
        }
    }
    return (  
        <div className="carlos">
            {[...Array(total)].map((item, index)=> <GetData key={index} index={index}/>)}
            <button onClick={handleAdd} className="add">Add</button>

            <div className="line"></div>

            <button onClick={handleSubmit}className="add submit">Submit</button>
            {show && data.map((item, index)=><ShowData key={index} index={index} item={item}/>)}
        </div>
    );
}

export default Carlos;