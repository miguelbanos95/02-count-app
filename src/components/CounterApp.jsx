import React, { useState } from 'react';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);
    // const [reset, setReset] = useState(value);

    const handdleAdd = () => {
        setCounter(counter + 1)
    }
    const handdleRest = () => setCounter(counter - 1)
    const handleReset = () => setCounter(value)

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <div className='divCustom'>
                <button onClick={() => handdleAdd()}>Add</button>
                <button onClick={() => handdleRest()}>Rest</button>
            </div>
            <button onClick={() => handleReset()}> Reset </button>
        </>
    );
};

export default CounterApp;