import React from 'react';

function Weather(props) {
   const [count, setCount] = React.useState(0)
    return (
       <div>
            <h3>Счетчик кликов: {count} раз</h3>
            <button onClick={()=>setCount(count+1)}>Клик!</button>
       </div>
    );
}

export default Weather;

