import React, { useState, useMemo, useEffect } from "react";


function complexCompute( num ){

    for( let i =0; i < 1000000000; i++ ){ };

    for( let i =0; i < 1000000000; i++ ){};

    return num;

}

/*
    он говорит что выполнять указанное в параметре-функции действие нужно только в том случае, 
    если изменится значение переданное в параметре-массиве

*/
export default function UseMemo(){

    const [number, setNumber ] = useState(42);
    const [colored, setColored] = useState( false );


    const style = useMemo( () => {
        return {
            backgroundColor: colored? "red": '',
        }
    }, [colored]);

    let computedNumber = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    useEffect(() => {
        console.log('style');
    }, [style]);
    

    return (
        <div
            className = 'container'
        >

            <h2 style = {style}
            >результат вычисления - {computedNumber}</h2>
            <button
                className="btn btn-success w-100 mb-3"
                onClick={ () => {
                    setNumber((prev) => {
                        return prev +=1 ;
                    });
                }}
            >Добавить</button>

            <button
                className="btn btn-success w-100 mb-3"
                onClick={ () => {
                    setNumber((prev) => {
                        return prev -= 1
                    });
                }}
            >Убавить</button>

            <button 
                className = 'btn btn-worning'
                onClick={ () => {
                    setColored((prev) => {
                        return !prev;
                    })
                }}
            >Хочу стиль другой</button>



        </div>
    );





}