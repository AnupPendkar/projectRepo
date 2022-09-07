import Down from "./Down";
import Emrae from "./Emrae";

function Barbara({setCount}) {
    return (  
        <div className="barbara">
            <Down setCount={setCount}/>
            <Emrae setCount={setCount}/>
        </div>
    );
}

export default Barbara;