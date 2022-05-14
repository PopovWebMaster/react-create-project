import { Component } from 'react';
import React  from 'react';
import Counter from '../features/counter/Counter.js';
import Display from './../features/display/Display.js';


import Hooks from './../features/hooks/Hooks.js';
import UseRef from '../features/hooks/UseRef.js';
import UseMemo from '../features/hooks/UseMemo.js';
import UseCallback from '../features/hooks/UseCallback.js';
import UseContext from '../features/hooks/UseContext.js';


export default class App extends Component {

	render(){
		return (
			<>
				<Counter />
				<Display />
				{/* <Hooks /> */}
				{/* <UseRef /> */}
				{/* <UseMemo /> */}
				{/* <UseCallback /> */}
				{/* <UseContext /> */}
			</>
            
		);
	}
};


