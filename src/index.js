import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header';
import Platforms from './components/platforms';
import Overviews from './components/overviews';

import "./style.css"

const Index = () => {
	return (
		<>
			<Header/>
			<Platforms/>
			<h2>Overview - Today</h2>
			<Overviews/>
		</>
	)
}

ReactDOM.render(<Index/>, document.getElementById("root"));
