import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Inputs from './components/Inputs';
import Info from './components/Info';
import Map from './components/Map';
import './css/style.css';

const App = () => {
	const [value, setValue] = useState('');

	const submitHandler = () => {};

	return (
		<div className="container">
			<header className="header">
				<h1 className="header--text">IP Address Tracker</h1>
			</header>
			<Inputs value={value} setValue={setValue} submitHandler={submitHandler} />
			<section className="infos">
				<Info head="Ip Address" text={value} />
				<Info head="Location" text={value} />
				<Info head="Timezone" text={value} />
				<Info head="Isp" text={value} />
			</section>
			<Map />
		</div>
	);
};

export default App;
