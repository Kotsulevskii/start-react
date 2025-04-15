import React, { useEffect, useRef, useState } from 'react';

function UseRefCounter() {
    let [count, setCount] = useState(0);
    let prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);
    return (
        <div>
            Сейчас: {count}, было: {prevCount.current}
            <button onClick={()=> setCount(el => el + 1)}>+</button> 
        </div>
    );
}

export default UseRefCounter;