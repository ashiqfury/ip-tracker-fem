import React, { useState } from 'react';
import axios from 'axios';
import Inputs from './components/Inputs';
import Info from './components/Info';
import Map from './components/Map';
import './css/style.css';

const App = () => {
	const [value, setValue] = useState('');
	const [data, setData] = useState({});

	const dataFetching = async (query) => {
		const data = await axios
			.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&${query}=${value}`)
			.then((res) => res.data)
			.catch((err) => console.log(err));
		setData(data);
		setValue('');
	};

	// checking whether the input value is ip address or domain name
	const validate = () => {
		if (
			/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
				value
			)
		)
			dataFetching('ipAddress');
		else if (/[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/.test(value))
			dataFetching('domain');
		else setValue('');
	};

	const submitHandler = async () => {
		if (value.trim() === '') {
			setData({});
			return setValue('');
		}
		validate();
	};

	return (
		<div className="container">
			<header className="header">
				<h1 className="header--text">IP Address Tracker</h1>
			</header>
			<Inputs value={value} setValue={setValue} submitHandler={submitHandler} />
			<section className="infos">
				<Info head="Ip Address" text={data?.ip} />
				<Info head="Location" text={data?.location?.region} text2={data?.location?.city} />
				<Info head="Timezone" text={data?.location?.timezone} zone />
				<Info head="Isp" text={data?.isp} />
			</section>
			{data ? <Map data={data} /> : <></>}
		</div>
	);
};

export default App;
