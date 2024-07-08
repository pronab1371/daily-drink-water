import {useState} from "react";

export const SmallCup = ({id, qty, onGlassClick}) => {
    const [isFull, setIsFull] = useState(false);

    function handleOnClick(){
        setIsFull(!isFull);
        onGlassClick(prevCount => prevCount + (isFull? -qty : qty));
    }

    return (
        <div id={id}
             className={`cup cup-small ${isFull ? 'full' : ''}`}
             onClick={handleOnClick}>
            {qty} ml
        </div>
    );
};