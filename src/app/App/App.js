import { Component } from 'react';
import React  from 'react';
import Counter from '../features/counter/Counter.js';
import Display from './../features/display/Display.js';


export default class App extends Component {

	render(){
		return (
			<>
				<Counter />
				<Display />
			</>
            
		);
	}
};


