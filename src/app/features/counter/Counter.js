import React, { useState, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice';

import './Counter.module.css';


class CounterComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            valueAmount: 3,
            result: this.props.result,
        };


        this.setIncrement =         this.setIncrement.bind(this);
        this.setDecrement =         this.setDecrement.bind(this);
        this.setValueAmount =       this.setValueAmount.bind(this);
        this.setIncrementByAmount = this.setIncrementByAmount.bind(this);
        this.setIncrementAsync =    this.setIncrementAsync.bind(this);

        this.props.incrementAsync( 100 );

    }

    setIncrement(){
        this.props.increment();
    }

    setDecrement(){
        this.props.decrement();
    }

    setValueAmount(e){
        this.setState({
            valueAmount: Number(e.target.value)
        });
    }

    setIncrementByAmount(e){
        this.props.incrementByAmount( this.state.valueAmount );

    }

    setIncrementAsync(){
        this.props.incrementAsync( this.state.valueAmount );

    }

    shouldComponentUpdate( nextProps, nextState ){

        if( this.state.result !== nextProps.result ){
            this.setState({
                result: nextProps.result,
            });

            return true;
        };

        return false;
        
    }



    render(){
        return (
        <div>
            <div className = 'row'>

                <button
                    className = 'button'
                    aria-label = "Increment value"
                    onClick={ this.setIncrement }
                >+</button>

                <span 
                    className = 'value'
                >{ this.state.result }</span>

                <button
                    className = 'button'
                    aria-label="Decrement value"
                    onClick={ this.setDecrement }
                >-</button>

            </div>

            <div className = 'row'>
                <input
                    className = 'textbox'
                    aria-label = "Set increment amount"
                    value = { this.state.valueAmount }
                    onChange = { this.setValueAmount }
                />
                
                <button
                    className = 'button'
                    onClick = { this.setIncrementByAmount }
                > Add Amount</button>

                <button
                    className = 'asyncButton'
                    onClick = { this.setIncrementAsync }
                >Add Async</button>
                
            </div>
        </div>

        );
    }
};

export default function Counter(){

    const state = useSelector( selectCount );
    const dispatch = useDispatch();

    return (
        <CounterComponent
            result =  { state.value }
            decrement =         { () => { dispatch( decrement() ) } }
            increment =         { () => { dispatch( increment() ) } }
            incrementByAmount = { ( valueAmount ) => { dispatch( incrementByAmount( valueAmount ) ) } }
            incrementAsync =    { ( valueAmount ) => { dispatch( incrementAsync( valueAmount ) ) } }
        />
    );


}









