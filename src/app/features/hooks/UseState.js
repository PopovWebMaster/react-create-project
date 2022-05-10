import React, { useState } from 'react';


// useState
export default function UseStste(){

    let [ value, setValue ] = useState(0);
    let [ obj, setObj ] = useState({
        title: 'my title',
        date: Date.now()
    });



    function increment(){
        setValue(++value);
    };

    function decrement(){
        setValue(--value);
    };

    function changeObj(){
        setObj((prev) => {
            return {
                ...prev, title: 'my new good title'
            }
        });
    }

    return (
        <div className = "container">
            <h1>Счетчик - {value}</h1>

            <button 
                className =" btn btn-success row w-100 mb-2"
                onClick={ increment }
            >добавить</button>

            <button 
                className = "btn btn-success row w-100 mb-2"
                onClick={ decrement }
            >убрать</button>


            <button 
                className = "btn btn-success row w-100 mb-2"
                onClick={ changeObj }
            >Сменить объект</button>



            <pre>{JSON.stringify(obj, null, 2)}</pre>
        </div>
    );

};