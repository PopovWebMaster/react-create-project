import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './../counter/counterSlice.js';

export default function Display(){
    const count = useSelector( selectCount );

    return (<div>
        <h1>{count.value}</h1>
    </div>)
}