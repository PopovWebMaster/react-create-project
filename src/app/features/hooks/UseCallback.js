import React, { useState, useCallback, useEffect} from "react";



function GetListElement({getItems}){

    const [items, setItems] = useState([]);

    useEffect( () => {
        const newItems = getItems();
        setItems(newItems);

    }, [getItems]);

    return (
        <ul>
            { items.map( ( item, index ) => {
                return (<li key = {index}>{item}</li>)
            }) }
        </ul>
    )

}



export default function UseCallback(){

    const [number, setNumber ] = useState(5);
    const [colored, setColored] = useState( true );

    // const style = {
    //     backgroundColor: colored? 'red': '',
    // };

    const transition = {
        transitionProperty: 'opacity',
        transitionDuration: '.4s',
    };
    const style = {
        ...transition,
        opacity: colored? '1': '0',

    };


    const getItemsList = useCallback( () => {

        const arr = new Array(number).fill('');
        let result = arr.map( ( _, index ) => {
            return `Element ${index + 1}`
        });

        console.log('getItemsList');

        return result
    }, [number]);








    return (
        <div
            className = 'container'
        >

            <h2 style = {style}
            >результат вычисления - {number}</h2>
            <button
                className="btn btn-success w-100 mb-3"
                onClick={ () => {
                    setNumber((prev) => {
                        return prev +=1 ;
                    });
                }}
            >Добавить</button>

            <button 
                className = 'btn btn-worning'
                onClick={ () => {
                    setColored((prev) => {
                        return !prev;
                    })
                }}
            >Хочу стиль другой</button>



            <div className="container">{

                <GetListElement getItems = { getItemsList }/>
                
            }</div>



        </div>

    );
}