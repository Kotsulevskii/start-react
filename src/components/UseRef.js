import React, { useRef } from 'react';

function UseRef() {
    const nameField = React.useRef();
    let send = () => {
        let inputElem = nameField.current;
        console.log('Имя: ' + inputElem.value);
    };
    return(
        <div>
            <input ref={nameField}/>
            <button onClick={send}>Отправить</button>
        </div>
    );
};

export default UseRef;