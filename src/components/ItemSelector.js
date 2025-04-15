import React from 'react';

function ItemSelector(props) {
    return(
        <div>
           {props.items.map((elem, index) => (
            <button key={index} onClick={() => props.onSelect(elem)}>{elem}</button>
           ))} 
        </div>
    );
}

export default ItemSelector;