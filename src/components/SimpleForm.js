import React, { useState } from 'react';

function SimpleForm() {
    let [name, setName] = useState('')
    let [age, setAge] = useState(0)
    let [isTrue, setIsTrue] = useState(true)

    return (
        <form 
        style={{
            marginTop: '20px'
        }}>
            <input
                value={name}
                placeholder='Напишите имя'
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type='number'
                value={age}
                placeholder='Напишите возраст'
                onChange={(event) => setAge(event.target.value)}
            />
            <input
                type='checkbox'
                checked={isTrue}
                onChange={(event) => setIsTrue(event.target.checked)}
            />
            <div>
                <span
                    style={{
                        display:'inline-block',
                        margin: '5px'
                    }}
                >Введенное имя: {name}</span>
                <span
                    style={{
                        display:'inline-block',
                        margin: '5px'
                    }}
                >Введенный возраст: {age}</span>
            </div>
        </form>
    )
}

export default SimpleForm;