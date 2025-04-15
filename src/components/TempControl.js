import React, { useState } from 'react';

function TempControl() {
    const [temperature, setTemperature] = useState(20)

    
    const increaseTemp = () => setTemperature(elem => elem + 1)
    const decreaseTemp = () => setTemperature(elem => elem - 1)

    return (
        <div 
        style={{
            border: '1px solid #ccc',
            width: '300px',
            marginTop: '10px'
        }}>
            <h1>Температура: {temperature} <sup>o</sup>C</h1>
            <button 
            onClick={increaseTemp} 
            style={{ marginRight: '10px'}}>
                Больше</button>
            <button onClick={decreaseTemp}>Меньше</button>
        </div>
    );
}
export default TempControl;