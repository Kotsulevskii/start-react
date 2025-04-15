import React, { useEffect } from 'react';

function UseEffect() {
    let [count, setCount] = React.useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    }, [count]);
    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count+1)}>Нажми на меня</button>
        </div>
    )
}

export default UseEffect;