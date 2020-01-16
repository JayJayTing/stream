import React, { useEffect } from 'react';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Header></Header>
				<Route path="/" exact component={StreamList}></Route>
				<Route path="/streams/StreamCreate" exact component={StreamCreate}></Route>
				<Route path="/streams/StreamEdit" exact component={StreamEdit}></Route>
				<Route path="/streams/StreamDelete" exact component={StreamDelete}></Route>
				<Route path="/streams/StreamShow" exact component={StreamShow}></Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
