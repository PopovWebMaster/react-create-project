import React  from 'react';
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import App from './app/App/App.js';
import store from './app/store.js';
import { Provider } from 'react-redux';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);


// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('app')
// );

// // Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// // After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

















