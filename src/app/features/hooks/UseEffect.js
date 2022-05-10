import React, { useEffect, useState } from 'react';

/*
    useEffect
    вызывается каждый раз когда происходит рендер компонента

*/
export default function UseEffect(){

    const [type, setType] = useState("users");
    const [ data, setData ] = useState([]);
    const [ pos, setPos ] = useState({
        x: 0,
        y: 0,
    });

    // useEffect(() => {
    //     console.log('вызывается');
    // });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);




    const mouseMoveHandler = (e) => {
        setPos( () => {
            return {
                x: e.clientX,
                y: e.clientY,
            };
            
        });
    };

    useEffect( () => {
        /*
            Если сделать так то функция вызовется только один раз 
            после загрузки компонента и больше вызываться не будет
        */
            console.log('ComponentDidMount');

            window.addEventListener( 'mousemove', mouseMoveHandler );

            return () => {
                window.removeEventListener("mousemove", mouseMoveHandler );
            };

    }, []);



    return (
        <div 
            className = "container"
        >
            <h1 className='row'>Ресурс: {type}</h1>

            <button 
                className = 'btn btn-success row w-100 mb-2'
                onClick={ () => {
                    setType("users");
                }}
            >Пользователи</button>

            <button 
                className = 'btn btn-success row w-100 mb-2'
                onClick={ () => {
                    setType("todos");
                }}
            >todos</button>

            <button 
                className = 'btn btn-success row w-100 mb-2'
                onClick={ () => {
                    setType("posts");
                }}
            >Посты</button>


            {/* <pre>{JSON.stringify( data, null, 2 )}</pre> */}
            <pre>{JSON.stringify( pos, null, 2 )}</pre>

        </div>
    );





}