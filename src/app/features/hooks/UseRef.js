import React, { useState, useEffect ,useRef } from 'react';


/*
    отличие от useState в том, что когда мы меняем значение из useRef мы не вызываем перерендер всего компонента,
    как в useState

    

*/
export default function UseRef(){

    const [ value, setValue ] = useState("ура!");
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('');
    
    useEffect(() => {
        renderCount.current++;
        console.dir(inputRef.current.value);
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    const focus = () => {
        inputRef.current.focus();
    };

    return (
        <div
            className = "container"

        >
            <h2 className = "mb-3">{value}</h2>
            <h2 className = "mb-3">Сколько там у нас рендеров? - { renderCount.current }</h2>
            <h2 className = "mb-3">предыдущее valet - { prevValue.current }</h2>

            <input 
                type = "text " 
                ref = {inputRef}
                className = "w-100"
                value = {value}
                onChange = { (e) => {
                    setValue(e.target.value);
                }}
            />

            <button 
                className = 'btn btn-success w-100 mt-2 mb-2'
                onClick = { focus } >Кнопка</button>
        
        </div>
    );





};